import { NotificationBox } from '~/interfaces/dtos/notify.box'
import { Profile } from '~/interfaces/schema/profile.schema'
import { User } from '~/interfaces/schema/user.schema'
import notificationModel from '~/models/database/notification.model'
import userModel from '~/models/database/user.model'

export const getNotificationsOfUser = async (user: User): Promise<NotificationBox[]> => {
  const notifications = await notificationModel.find({ receiverIds: [user._id] })
  const result: NotificationBox[] = []

  notifications.forEach(async (n) => {
    const loadedSender = await userModel
      .findById(n.senderId)
      .select('--password')
      .populate<{ profile: Profile }>('profile')
    result.push({
      _id: n._id,
      sender: loadedSender!,
      contextType: n.contextType,
      contextId: n.contextId,
      content: {
        text: n.content.text,
        extraInfo: n.content.extraInfo
      },
      isRead: n.isRead,
      createdAt: n.createdAt,
      updatedAt: n.updatedAt
    })
  })

  return result
}
