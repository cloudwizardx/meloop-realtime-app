import { User } from '~/interfaces/schema/user.schema'
import { uploadToCloudinary } from './upload.service'
import profileModel from '~/models/database/profile.model'
import { ResourceNotFoundException } from '~/exceptions/resource.not.found.exception'

export const updatePhoto = async (folder: string, fileBuffer: Buffer, user: User): Promise<boolean> => {
  const result = await uploadToCloudinary(fileBuffer, folder)

  if (!result) {
    return false
  }

  const loadedProfileUser = await profileModel.findById(user.profile)
  if (!loadedProfileUser) {
    throw new ResourceNotFoundException('Profile user not exist!')
  }

  await profileModel.updateOne({ _id: loadedProfileUser._id }, { $set: { avatar: (result as any).secure_url } })
  return true
}

export const updateCoverPhoto = async (folder: string, fileBuffer: Buffer, user: User): Promise<boolean> => {
  const result = await uploadToCloudinary(fileBuffer, folder)

  if (!result) {
    return false
  }

  const loadedProfileUser = await profileModel.findById(user.profile)
  if (!loadedProfileUser) {
    throw new ResourceNotFoundException('Profile user not exist!')
  }
  await profileModel.updateOne({ _id: loadedProfileUser._id }, { $set: { coverPhoto: (result as any).secure_url } })

  return false
}

export const updateName = async (keyName: string, editName: string, user: User): Promise<boolean> => {
  try {
    if (keyName === 'FirstName') {
      await profileModel.updateOne(
        {
          _id: user._id
        },
        { $set: { firstName: editName } }
      )
    } else {
      await profileModel.updateOne(
        {
          _id: user._id
        },
        { $set: { lastName: editName } }
      )
    }
    return true
  } catch {
    return false
  }
}

export const updateGender = async (gender: string, user: User): Promise<boolean> => {
  try {
    await profileModel.updateOne({ _id: user._id }, { $set: { gender: gender } })
    return true
  } catch {
    return false
  }
}

export const updateSocialUrl = async (data: { name: string; url: string }[], user: User): Promise<boolean> => {
  try {
    await profileModel.updateOne({ _id: user._id }, { $set: { socialUrl: data } })
    return true
  } catch {
    return false
  }
}

export const updateDateOfBirth = async (dateOfBirth: Date, user: User): Promise<boolean> => {
  try {
    await profileModel.updateOne({ _id: user._id }, { $set: { dateOfBirth: dateOfBirth } })
    return true
  } catch {
    return false
  }
}

export const updateDetails = async (fieldName: string, text: string, user: User): Promise<boolean> => {
  try {
    if (fieldName === 'Bio') {
      await profileModel.updateOne({ _id: user._id }, { $set: { bio: text } })
    } else if (fieldName === 'Nickname') {
      await profileModel.updateOne({ _id: user._id }, { $set: { nickName: text } })
    } else {
      await profileModel.updateOne({ _id: user._id }, { $set: { introSelf: text } })
    }
    return true
  } catch {
    return false
  }
}
