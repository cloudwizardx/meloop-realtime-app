import { NextFunction, Request, Response } from 'express'
import { UnauthorizeException } from '~/exceptions/unauthorized.exception'
import { updateCoverPhoto, updatePhoto } from '~/services/user.service'
import { FOLDER_PHOTO_USER_RESOURCES } from '~/utils/app.constant'

export const uploadPhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access this function!')
    }

    if (!req.file || !req.file.buffer) {
      throw new Error('No photo file uploaded!')
    }

    const isUploaded = await updatePhoto(FOLDER_PHOTO_USER_RESOURCES, req.file.buffer, req.user)
    if (isUploaded) {
      res.status(201).json({ message: 'Uploaded photo' })
    } else {
      res.status(400).json({ message: 'Fail to upload photo' })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const uploadCoverPhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access this function!')
    }

    if (!req.file || !req.file.buffer) {
      throw new Error('No photo file uploaded!')
    }

    const isUploaded = await updateCoverPhoto(FOLDER_PHOTO_USER_RESOURCES, req.file.buffer, req.user)
    if (isUploaded) {
      res.status(201).json({ message: 'Uploaded photo' })
    } else {
      res.status(400).json({ message: 'Fail to upload photo' })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}
