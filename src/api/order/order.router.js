import {
  createOrder,
  getOrder,
  update
} from './order.controller'
import express from 'express'
const router = express.Router()

router.post('/', createOrder)
router.post('/update', update)
router.get('/', getOrder)

export default router
