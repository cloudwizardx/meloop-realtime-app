import { Router } from 'express'
import { protectRoute } from '~/middlewares/auth.middleware'
import { requirePermission } from '~/middlewares/permission.middleware'
import * as userController from '~/controllers/user.controller'
import { upload } from '~/middlewares/upload.middleware'

const router = Router()

router.patch(
  '/photo',
  protectRoute,
  requirePermission('upload_photo_profile'),
  upload.single('image'),
  userController.uploadPhoto
)

router.patch(
  '/cover-photo',
  protectRoute,
  requirePermission('upload_photo_profile'),
  upload.single('image'),
  userController.uploadCoverPhoto
)

router.patch('/name', protectRoute, requirePermission('update_contact_profile'), userController.editName)

router.patch('/gender', protectRoute, requirePermission('update_contact_profile'), userController.editGender)

router.patch(
  '/social-contacts',
  protectRoute,
  requirePermission('update_contact_profile'),
  userController.editSocialUrlContact
)

export default router
