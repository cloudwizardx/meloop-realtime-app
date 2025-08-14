import { Router } from 'express'
import { protectRoute } from '~/middlewares/auth.middleware'
import { requirePermission } from '~/middlewares/permission.middleware'
import * as userController from '~/controllers/user.controller'

const router = Router()

router.patch('/photo', protectRoute, requirePermission('upload_photo_profile'), userController.uploadPhoto)

router.patch('/cover-photo', protectRoute, requirePermission('upload_photo_profile'), userController.uploadCoverPhoto)

export default router
