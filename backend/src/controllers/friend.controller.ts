import { NextFunction, Request, Response } from 'express'
import { Types } from 'mongoose'
import { UnauthorizeException } from '~/exceptions/unauthorized.exception'
import { getIo } from '~/libs/socket'
import * as friendServices from '~/services/friend.service'

export const sendFriendInvitation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access!')
    }

    const { receiverId } = req.params // if query can be one or more than one value
    const receiverObjectId = new Types.ObjectId(receiverId)
    const result = await friendServices.createNewFriendInvitation(receiverObjectId, req.user)
    if (result.status) {
      const io = getIo()
      if (result.data?.receiverId) {
        io.to(result.data.receiverId).emit('receiveFriendInvitation', result.data.sender)
      }
      res.status(200).json({ message: 'Invitation sent successfully' })
    } else {
      res.status(400).json({ message: 'Fail to send invitation' })
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

    const { inviteId } = req.params

    const result = await friendServices.updateStatusFriendInvitation(new Types.ObjectId(inviteId), 'Accepted')
    if (result.status) {
      return res.status(201).json({ message: result.message })
    } else {
      return res.status(400).json({ message: result.message })
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

    const { inviteId } = req.params

    const result = await friendServices.updateStatusFriendInvitation(new Types.ObjectId(inviteId), 'Deleted')
    if (result.status) {
      res.status(201).json({ message: result.message })
    } else {
      res.status(400).json({ message: result.message })
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

export const getInvitationList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access!')
    }

    const result = await friendServices.getFriendRequestsList(req.user)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const getFriendSuggestionList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access!')
    }

    const result = await friendServices.getFriendSuggestion(req.user)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
