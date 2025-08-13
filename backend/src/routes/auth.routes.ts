import { Router } from "express"
import * as authController from '~/controllers/auth.controller'

const router = Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/verify', authController.verifyEmailUser)
router.post('/refresh', authController.refresh)

export default router
