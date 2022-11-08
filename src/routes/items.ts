import { Router } from 'express'
import { find, findOne } from '../controllers/items'

const router = Router()
router.get('/', find)
router.get('/:id', findOne)

export { router }
