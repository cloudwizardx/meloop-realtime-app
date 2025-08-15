import { NextFunction, Request, Response } from 'express'
import { Types } from 'mongoose'
import { UnauthorizeException } from '~/exceptions/unauthorized.exception'
import * as friendServices from '~/services/friend.service'

export const sendFriendInvitation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access!')
    }

    const { receiverId } = req.params // if query can be one or more than one value
    const receiverObjectId = new Types.ObjectId(receiverId)
    const { status, message } = await friendServices.createNewFriendInvitation(receiverObjectId, req.user)
    if (status) {
      res.status(201).json({ message: message })
    } else {
      res.status(400).json({ message: message })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const acceptFriendInvitation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access!')
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const deletedFriendInvitation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access!')
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const getListFriends = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user || !req.user._id) {
      throw new UnauthorizeException('User ID is missing!')
    }

    const myFriends = await friendServices.getMyFriends(req.user._id)
    res.status(200).json({ data: myFriends })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
