import { Types } from 'mongoose'
import { AccountBlockedException } from '~/exceptions/account.blocked.exception'
import { User } from '~/interfaces/schema/user.schema'
import friendModel from '~/models/database/friend.model'
import userModel from '~/models/database/user.model'
import notificationModel from '~/models/database/notification.model'
import { notifyFriendInvitationContent } from '~/utils/notification.content'
import profileModel from '~/models/database/profile.model'
import { ResourceNotFoundException } from '~/exceptions/resource.not.found.exception'
import { Friend } from '~/interfaces/schema/friend.schema'

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
    status: 'Pending'
  })

  const currentUserProfile = await profileModel.findById(currentUser.profile)
  if (!currentUserProfile) {
    throw new ResourceNotFoundException('Current user profile not exist!')
  }
  const userName = `${currentUserProfile?.firstName} ${currentUserProfile?.lastName}`
  const notificationContent = notifyFriendInvitationContent(userName)

  await notificationModel.create({
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

  return {
    status: true,
    message: 'Sent friend invitation successfully!',
    data: {
      receiverId: receiver._id.toString(),
      sender: {
        id: currentUser._id ? currentUser._id.toString() : '',
        name: userName,
        avatar: currentUserProfile?.avatar
      }
    }
  }
}

export const updateStatusFriendInvitation = async (inviteId: Types.ObjectId, status: string) => {
  const loadedInvitation = await friendModel.findById(inviteId)
  if (!loadedInvitation) {
    return {
      status: false,
      message: 'Friend invitation not exist!'
    }
  }

  if (!status.match(/^(Accepted|Deleted)$/)) {
    return {
      status: false,
      message: 'Status to update invalid!'
    }
  }

  if (status === 'Deleted' && loadedInvitation.status === 'Accepted') {
    return {
      status: false,
      message: 'Invitation is accepted, you cannot update to deleted!'
    }
  }

  await friendModel.updateOne({ _id: inviteId }, { $set: { status: status } })
  return {
    status: true,
    message: 'Updated status of friend invitation!'
  }
}

export const getMyFriends = async (userId: Types.ObjectId): Promise<Friend[]> => {
  const friends = await friendModel.find({ $or: [{ userId: userId }, { friendId: userId }] })
  return friends || []
}
