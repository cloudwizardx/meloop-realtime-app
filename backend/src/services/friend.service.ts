import { Types } from 'mongoose'
import { AccountBlockedException } from '~/exceptions/account.blocked.exception'
import { User, UserPopulated } from '~/interfaces/schema/user.schema'
import friendModel from '~/models/database/friend.model'
import userModel from '~/models/database/user.model'
import notificationModel from '~/models/database/notification.model'
import { notifyAcceptedFriendInvitation, notifyFriendInvitationContent } from '~/utils/notification.content'
import profileModel from '~/models/database/profile.model'
import { ResourceNotFoundException } from '~/exceptions/resource.not.found.exception'
import { Friend } from '~/interfaces/schema/friend.schema'
import { getIo } from '~/libs/socket'
import { FriendRequest } from '~/interfaces/dtos/friend.request'
import redisClient from '~/configs/redis.config'
import { Profile } from '~/interfaces/schema/profile.schema'

export const createNewFriendInvitation = async (receiverId: Types.ObjectId, currentUser: User) => {
  if (receiverId.equals(currentUser._id)) {
    throw new Error('Cannot send friend request to yourself')
  }

  const receiver = await userModel.findOne({ _id: receiverId, isActive: true })
  if (!receiver) {
    throw new AccountBlockedException('This user is blocked or not verify account')
  }

  const isFriend = await friendModel.findOne({
    $or: [
      { userId: currentUser._id, friendId: receiver._id },
      { userId: receiver._id, friendId: currentUser._id }
    ]
  })

  if (isFriend) {
    return {
      status: false,
      message: 'Cannot send invitations to people who are already friends'
    }
  }

  const myFriends = await friendModel.find({
    $or: [{ userId: currentUser._id }, { friendId: currentUser._id }],
    status: 'Accepted'
  })

  const myFriendIds = myFriends.map((f) => (f.userId.equals(currentUser._id) ? f.friendId : f.userId))

  if (myFriendIds.length > 0) {
    await redisClient.sAdd(
      `friends:${currentUser._id}`,
      myFriendIds.map((id) => id.toString())
    )
  }

  const senderFriends = await friendModel.find({
    $or: [{ userId: receiverId }, { friendId: receiverId }],
    status: 'Accepted'
  })

  const senderFriendsIds = senderFriends.map((f) => (f.userId.equals(receiverId) ? f.friendId : f.userId))

  if (senderFriendsIds.length > 0) {
    await redisClient.sAdd(
      `friends:${receiverId}`,
      senderFriendsIds.map((id) => id.toString())
    )
  }

  const intersec = await redisClient.sInter([`friends:${currentUser._id}`, `friends:${receiverId}`])

  const pendingInvite = await friendModel.findOne({
    userId: currentUser._id,
    friendId: receiver._id,
    status: 'Pending'
  })

  if (pendingInvite) {
    return {
      status: false,
      message: 'Invitation has been sent please wait for their confirmation'
    }
  }

  const friends = await friendModel.create({
    userId: currentUser._id,
    friendId: receiver._id,
    mutualCount: intersec.length,
    status: 'Pending'
  })

  const currentUserProfile = await profileModel.findById(currentUser.profile)
  if (!currentUserProfile) {
    throw new ResourceNotFoundException('Current user profile not exist!')
  }
  const userName = `${currentUserProfile?.firstName} ${currentUserProfile?.lastName}`
  const notificationContent = notifyFriendInvitationContent(userName)

  const notification = await notificationModel.create({
    senderId: currentUser._id,
    receiverIds: [receiverId],
    contextType: 'Friend',
    contextId: friends._id,
    content: {
      text: notificationContent,
      extraInfo: currentUserProfile?.avatar
    },
    isRead: false
  })

  const sender = (await userModel
    .findById(notification.senderId)
    .select('-password')
    .populate<{ profile: Profile }>('profile')) as UserPopulated

  return {
    status: true,
    data: {
      receiverId: receiver._id.toString(),
      sender: {
        id: currentUser._id ? currentUser._id.toString() : '',
        name: userName,
        avatar: currentUserProfile?.avatar
      },
      notification: {
        _id: notification._id,
        sender: sender,
        contextType: notification.contextType,
        contextId: notification.contextId,
        content: {
          text: notification.content.text,
          extraInfo: notification.content.extraInfo
        },
        isRead: notification.isRead,
        createdAt: notification.createdAt,
        updatedAt: notification.updatedAt
      }
    }
  }
}

export const updateStatusFriendInvitation = async (
  inviteId: Types.ObjectId,
  senderId: Types.ObjectId,
  status: string
) => {
  const loadedInvitation = await friendModel.findById(inviteId)
  if (!loadedInvitation) {
    return {
      status: false,
      message: 'Friend invitation not exist!'
    }
  }

  if (status === 'Deleted' && loadedInvitation.status === 'Accepted') {
    return {
      status: false,
      message: 'Invitation is accepted, you cannot update to deleted!'
    }
  }

  await friendModel.updateOne({ _id: inviteId }, { $set: { status: status } })
  if (status === 'Accepted') {
    const friendId = loadedInvitation.userId === senderId ? loadedInvitation.friendId : loadedInvitation.userId
    const receiver = (await userModel
      .findById(friendId)
      .select('-password')
      .populate<{ profile: Profile }>('profile')) as UserPopulated
    const senderPopulated = (await userModel
      .findById(senderId)
      .select('-password')
      .populate<{ profile: Profile }>('profile')) as UserPopulated

    const notification = await notificationModel.create({
      senderId: senderId,
      receiverIds: [friendId],
      contextType: 'Friend',
      contextId: loadedInvitation._id,
      content: {
        text: notifyAcceptedFriendInvitation(`${receiver.profile?.firstName} ${receiver.profile?.lastName}`),
        extraInfo: receiver.profile?.avatar
      }
    })

    const data = {
      notification: {
        _id: notification._id,
        sender: senderPopulated,
        contextType: notification.contextType,
        contextId: notification.contextId,
        content: {
          text: notification.content.text,
          extraInfo: notification.content.extraInfo
        },
        isRead: notification.isRead,
        createdAt: notification.createdAt,
        updatedAt: notification.updatedAt
      }
    }
    if (receiver?.isOnline) {
      const io = getIo()
      io.to((receiver._id ?? '').toString()).emit('acceptedInvitation', data)
    }
  }

  return {
    status: true,
    message: 'Updated status of friend invitation!'
  }
}

export const getMyFriends = async (userId: Types.ObjectId): Promise<Friend[]> => {
  const friends = await friendModel.find({ $or: [{ userId: userId }, { friendId: userId }] })
  return friends || []
}

export const getFriendRequestsList = async (user: User): Promise<FriendRequest[]> => {
  const friendRequests = await friendModel.find({
    $or: [{ userId: user._id }, { friendId: user._id }],
    status: 'Pending'
  })

  const myFriends = await friendModel
    .find({ $or: [{ userId: user._id }, { friendId: user._id }], status: 'Accepted' })
    .lean()

  const myFriendIds = myFriends.map((f) => (f.userId.equals(user._id) ? f.friendId : f.userId))
  const myFriendIdsStr = myFriendIds.map((id) => id.toString())

  if (myFriendIdsStr.length > 0) {
    await redisClient.sAdd(`friends:${user._id}`, myFriendIdsStr)
  }

  const result: FriendRequest[] = []

  for (const request of friendRequests) {
    const friendId = request.userId.equals(user._id) ? request.friendId : request.userId

    const loadFriend = await userModel.findById(friendId).select('-password').populate<{ profile: Profile }>('profile')
    if (!loadFriend) continue

    const loadFriends = await friendModel
      .find({ $or: [{ userId: friendId }, { friendId: friendId }], status: 'Accepted' })
      .lean()

    const friendIds = loadFriends.map((f) => (f.userId.equals(friendId) ? f.friendId : f.userId))
    const friendIdsStr = friendIds.map((id) => id.toString())

    if (friendIdsStr.length > 0) {
      await redisClient.sAdd(`friends:${friendId}`, friendIdsStr)
    }

    const mutualList: string[] = await redisClient.sInter([`friends:${user._id}`, `friends:${friendId}`])
    const previewIds = mutualList.slice(-3).map((x) => new Types.ObjectId(x))
    const mutualPreviewDocs = await userModel
      .find({ _id: { $in: previewIds } })
      .select('_id profile')
      .populate<{ profile: Pick<Profile, '_id' | 'avatar'> }>('profile')

    const mutualPreview = mutualPreviewDocs.map((x) => ({
      userId: x._id,
      profile: x.profile._id,
      avatar: x.profile.avatar
    }))

    result.push({
      sender: loadFriend,
      createdAt: request.createdAt ?? null,
      mutualCount: mutualList.length,
      mutualPreview
    })
  }

  return result
}

export const getFriendSuggestion = async (user: User): Promise<UserPopulated[]> => {
  const res =
    (await userModel
      .find({ _id: { $ne: user._id } })
      .select('-password')
      .populate<{ profile: Profile }>('profile')) ?? []

  return res
}

export async function convertFriends(user: User, friends: Friend[]): Promise<UserPopulated[]> {
  const result: UserPopulated[] = []
  for (const f of friends) {
    const friendId = f.userId === user._id ? f.friendId : f.userId
    const loadFriend = (await userModel
      .findById(friendId)
      .select('-password')
      .populate<{ profile: Profile }>('profile')) as UserPopulated
    result.push(loadFriend)
  }

  return result
}
