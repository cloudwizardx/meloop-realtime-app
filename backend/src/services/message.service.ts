import { Types } from 'mongoose'
import { ResourceNotFoundException } from '~/exceptions/resource.not.found.exception'
import { User } from '~/interfaces/schema/user.schema'
import messageModel from '~/models/database/message.model'
import userModel from '~/models/database/user.model'
import { uploadToCloudinary } from './upload.service'
import { FOLDER_CHATTING_RESOURCES, REGEX_LINK_MESSAGE } from '~/utils/app.constant'
import { Message } from '~/interfaces/schema/message.schema'
import mediaModel from '~/models/database/media.model'
import notificationModel from '~/models/database/notification.model'
import profileModel from '~/models/database/profile.model'
import { notifyNewMessageContent } from '~/utils/notification.content'
import { getIo } from '~/libs/socket'

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
  conversationId: Types.ObjectId
}

export const sendMessageTo = async (requestSendMessage: SendMessageParams) => {
  const loadedReceiver = await userModel.findById(requestSendMessage.receiverId)
  const loadedProfileReceiver = await profileModel.findById(loadedReceiver?._id)
  if (!loadedReceiver) {
    return {
      status: false,
      message: 'Receiver not exist!'
    }
  }

  const newMessage: Message = await messageModel.create({
    conversationId: requestSendMessage.conversationId,
    sender: requestSendMessage.sender._id,
    text: requestSendMessage.text,
    type: ['Text']
  } as Message)

  const mediaFiles: {
    mediaId: Types.ObjectId
    url?: string
    name?: string
    type?: string
    size?: number
  }[] = []

  const links: string[] = []
  if (requestSendMessage.files.length > 0) {
    for (const file of requestSendMessage.files) {
      const result = await uploadToCloudinary(file.buffers, FOLDER_CHATTING_RESOURCES)
      const savedMedia = await mediaModel.create({
        contextType: 'Message',
        contextId: newMessage._id,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        secureUrl: (result as any).secure_url,
        folder: requestSendMessage.folder,
        fileName: file.fileName,
        fileType: file.fileType,
        size: file.fileSize
      })
      mediaFiles.push({
        mediaId: savedMedia._id,
        url: savedMedia.secureUrl,
        name: savedMedia.fileName,
        type: savedMedia.fileType,
        size: savedMedia.size
      })
    }
  }

  const regexLinks = newMessage.text.match(REGEX_LINK_MESSAGE) || []
  if (regexLinks?.length > 0) regexLinks.forEach((x) => links.push(x))
  if (mediaFiles.length > 0) newMessage.type.push('Media')

  await messageModel.updateOne(
    { _id: newMessage._id },
    { $set: { media: mediaFiles, links: regexLinks, type: newMessage.type } }
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
