import { Router } from 'express'
import { protectRoute } from '~/middlewares/auth.middleware'
import { requirePermission } from '~/middlewares/permission.middleware'
import * as notificationController from '~/controllers/notify.controller'

const router = Router()

router.get(
  '/',
  protectRoute,
  requirePermission('view_my_notifications'),
  notificationController.getNotificationsListOfUser
)

export default router
