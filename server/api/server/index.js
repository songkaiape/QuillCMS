import { Router } from 'express'
import postCategory from './postCategory'
import postTag from './postTag'
import post from './post'
import user from './user'

const router = Router()
router.use(postCategory)
router.use(user)
router.use(postTag)
router.use(post)

export default router
