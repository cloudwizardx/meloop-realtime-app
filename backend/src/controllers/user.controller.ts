import { NextFunction, Request, Response } from 'express'
import { UnauthorizeException } from '~/exceptions/unauthorized.exception'
import * as userServices from '~/services/user.service'
import { FOLDER_PHOTO_USER_RESOURCES } from '~/utils/app.constant'

export const uploadPhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access this function!')
    }

    if (!req.file || !req.file.buffer) {
      throw new Error('No photo file uploaded!')
    }

    const isUploaded = await userServices.updatePhoto(FOLDER_PHOTO_USER_RESOURCES, req.file.buffer, req.user)
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

    const isUploaded = await userServices.updateCoverPhoto(FOLDER_PHOTO_USER_RESOURCES, req.file.buffer, req.user)
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

// edit name for first name and last name following by keyName
export const editName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access this function!')
    }

    const { keyName, editName } = req.body
    const isUpdated = await userServices.updateName(keyName, editName, req.user)

    if (isUpdated) {
      res.status(201).json({ message: 'Updated name successfully!' })
    } else {
      res.status(400).json({ message: 'Fail to update name!' })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const editGender = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access this function!')
    }

    const { gender } = req.body
    const isUpdated = await userServices.updateGender(gender, req.user)

    if (isUpdated) {
      res.status(201).json({ message: 'Updated gender successfully!' })
    } else {
      res.status(400).json({ message: 'Fail to update gender!' })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const editSocialUrlContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access this function!')
    }

    const { data } = req.body as { data: { name: string; url: string }[] }
    const isUpdated = await userServices.updateSocialUrl(data, req.user)

    if (isUpdated) {
      res.status(201).json({ message: 'Updated gender successfully!' })
    } else {
      res.status(400).json({ message: 'Fail to update gender!' })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const editDateOfBirth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access this function!')
    }

    const { dateOfBirth } = req.body
    const dobDate = new Date(dateOfBirth)
    const isUpdated = await userServices.updateDateOfBirth(dobDate, req.user)

    if (isUpdated) {
      res.status(201).json({ message: 'Updated date of birth successfully!' })
    } else {
      res.status(400).json({ message: 'Fail to update date of birth!' })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

// edit details for nickname, intro self, bio following by fieldName
export const editDetailsInfoSelf = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access this function!')
    }

    const { fieldName, text } = req.body
    const isUpdated = await userServices.updateDetails(fieldName, text, req.user)
    if (isUpdated) {
      res.status(201).json({ message: 'Updated date of birth successfully!' })
    } else {
      res.status(400).json({ message: 'Fail to update date of birth!' })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}
