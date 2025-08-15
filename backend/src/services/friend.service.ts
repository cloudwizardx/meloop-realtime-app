import { Types } from 'mongoose'
import { AccountBlockedException } from '~/exceptions/account.blocked.exception'
import { User } from '~/interfaces/schema/user.schema'
import friendModel from '~/models/database/friend.model'
import userModel from '~/models/database/user.model'
import notificationModel from '~/models/database/notification.model'
import { notifyFriendInvitationContent } from '~/utils/notification.content'
import profileModel from '~/models/database/profile.model'
import { ResourceNotFoundException } from '~/exceptions/resource.not.found.exception'

export const createNewFriendInvitation = async (receiverId: Types.ObjectId, currentUser: User): Promise<boolean> => {
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
    return false
  }

  const pendingInvite = await friendModel.findOne({
    userId: currentUser._id,
    friendId: receiver._id,
    status: 'Pending'
  })

  if (pendingInvite) {
    return false
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

  const notificationContent = notifyFriendInvitationContent(currentUserProfile?.id)

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

  return true
}
