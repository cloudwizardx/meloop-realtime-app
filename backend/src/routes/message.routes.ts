import { Router } from 'express'
import { protectRoute } from '~/middlewares/auth.middleware'
import { requirePermission } from '~/middlewares/permission.middleware'
import { upload } from '~/middlewares/upload.middleware'
import * as messageController from '~/controllers/message.controller'

const router = Router()

router.post(
  '/send',
  protectRoute,
  requirePermission('send_message'),
  upload.array('files'),
  messageController.sendMessage
)

export default router
