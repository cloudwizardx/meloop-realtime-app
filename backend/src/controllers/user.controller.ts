import { NextFunction, Request, Response } from "express";


export const uploadPhoto = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch(error) {
        console.log(error)
        next(error)
    }
}

export const uploadCoverPhoto = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch(error) {
        console.log(error)
        next(error)
    }
}