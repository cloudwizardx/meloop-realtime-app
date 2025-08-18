import { NextFunction, Request, Response } from 'express'
import { Types } from 'mongoose'
import { ResourceNotFoundException } from '~/exceptions/resource.not.found.exception'
import * as messageServices from '~/services/message.service'
import { FOLDER_CHATTING_RESOURCES } from '~/utils/app.constant'

export const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new ResourceNotFoundException('Current user not exist!')
    }

    const { text, receiverId } = req.body
    const { conversationId } = req.params
    const mediaFiles: {
      fileName: string
      fileType: string
      fileSize: number
      buffers: Buffer
    }[] = []

    if (Array.isArray(req.files) && req.files.length > 0) {
      for (const file of req.files) {
        mediaFiles.push({ fileName: file.filename, fileType: file.mimetype, fileSize: file.size, buffers: file.buffer })
      }
    }

    const result = await messageServices.sendMessageTo({
      sender: req.user,
      text: text,
      files: mediaFiles,
      folder: FOLDER_CHATTING_RESOURCES,
      receiverId: new Types.ObjectId(receiverId),
      conversationId: new Types.ObjectId(conversationId)
    })

    if (result.status) {
      res.status(200).json({ message: result.message })
    } else {
      res.status(400).json({ message: result.message })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const getMessages = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const updateStatusMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    console.log(error)
    next(error)
  }
}
