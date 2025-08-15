import { NextFunction, Request, Response } from "express"
import { UnauthorizeException } from "~/exceptions/unauthorized.exception"

export const sendFriendInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.user) {
            throw new UnauthorizeException('Unauthorize to access!')
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

export const getListFriendInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.user) {
            throw new UnauthorizeException('Unauthorize to access!')
        }
        


    } catch (error) {
        console.log(error)
        next(error)
    }
}