import { Types } from 'mongoose'
import { User } from '~/interfaces/schema/user.schema'
import messageModel from '~/models/database/message.model'
import userModel from '~/models/database/user.model'
import { uploadToCloudinary } from './upload.service'
import { REGEX_LINK_MESSAGE } from '~/utils/app.constant'
import mediaModel from '~/models/database/media.model'
import notificationModel from '~/models/database/notification.model'
import profileModel from '~/models/database/profile.model'
import { notifyNewMessageContent } from '~/utils/notification.content'
import { getIo } from '~/libs/socket'
import conversationModel from '~/models/database/conversation.model'

export interface SendMessageParams {
  sender: User
  text: string
  files: {
    fileName: string
    fileType: string
    fileSize: number
    buffers: Buffer
  }[]
  folder: string
  receiverId: Types.ObjectId
}

export const sendMessageTo = async (requestSendMessage: SendMessageParams) => {
  const loadedReceiver = await userModel.findById(requestSendMessage.receiverId)
  const loadedProfileReceiver = await profileModel.findById(loadedReceiver?.profile)
  if (!loadedReceiver) {
    return {
      status: false,
      message: 'Receiver not exist!'
    }
  }

  let conversation = await conversationModel.findOne({
    $and: [{ 'members.memberId': requestSendMessage.sender._id }, { 'members.memberId': loadedReceiver._id }],
    isGroupChat: false
  })

  if (!conversation) {
    conversation = await conversationModel.create({
      members: [{ memberId: requestSendMessage.sender._id }, { memberId: loadedReceiver._id }],
      isGroupChat: false
    })
  }

  const messageTypes: string[] = []
  let mediaFiles: {
    mediaId: Types.ObjectId
    url?: string
    name?: string
    type?: string
    size?: number
  }[] = []

  if (requestSendMessage.files.length > 0) {
    const uploadFiles = requestSendMessage.files.map((file) => {
      return (async () => {
        const result = await uploadToCloudinary(file.buffers, requestSendMessage.folder)
        const savedMedia = await mediaModel.create({
          contextType: 'Message',
          contextId: null,
          secureUrl: (result as any).secure_url,
          folder: requestSendMessage.folder,
          fileName: file.fileName,
          fileType: file.fileType,
          size: file.fileSize
        })

        return {
          value: {
            mediaId: savedMedia._id,
            url: savedMedia.secureUrl,
            name: savedMedia.fileName,
            type: savedMedia.fileType,
            size: savedMedia.size
          }
        }
      })()
    })

    const results = await Promise.allSettled(uploadFiles)
    mediaFiles = results.filter((f) => f.status === 'fulfilled').map((r) => (r as PromiseFulfilledResult<any>).value)
  }

  const regexLinks = requestSendMessage.text.match(REGEX_LINK_MESSAGE) || []
  if (requestSendMessage.text.length > 0) messageTypes.push('Text')
  if (mediaFiles.length > 0) messageTypes.push('Media')

  const newMessage = await messageModel.create({
    conversationId: conversation._id,
    sender: requestSendMessage.sender._id,
    text: requestSendMessage.text,
    type: messageTypes,
    media: mediaFiles,
    links: regexLinks
  })

  await mediaModel.updateMany(
    { _id: { $in: mediaFiles.map((x) => x.mediaId) } },
    { $set: { contextId: newMessage._id } }
  )

  if (!loadedReceiver.isOnline) {
    await notificationModel.create({
      senderId: requestSendMessage.sender._id,
      receiverIds: [loadedReceiver._id],
      contextType: 'Message',
      contextId: newMessage._id,
      context: {
        text: notifyNewMessageContent(`${loadedProfileReceiver?.firstName} ${loadedProfileReceiver?.lastName}`),
        extraInfo: loadedProfileReceiver?.avatar
      }
    })
  } else {
    const io = getIo()
    io.to(loadedReceiver._id.toString()).emit('newMessage', {
      sender: requestSendMessage.sender,
      message: newMessage
    })
  }

  return {
    status: true,
    message: 'Sent message successfully!'
  }
}
