import { NextFunction, Request, Response } from 'express'
import { UnauthorizeException } from '~/exceptions/unauthorized.exception'
import * as notificationService from '~/services/notify.service'

export const getNotificationsListOfUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new UnauthorizeException('Unauthorize to access!')
    }

    const result = await notificationService.getNotificationsOfUser(req.user)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
