import { Router } from "express";
import * as friendController from '~/controllers/friend.controller'
import { protectRoute } from "~/middlewares/auth.middleware"
import { requirePermission } from "~/middlewares/permission.middleware"

const router = Router()

router.post('/:receiverId/invite', protectRoute, requirePermission('add_friend'), friendController.sendFriendInvitation)

router.get('/list', protectRoute, friendController.getListFriends)

export default router
