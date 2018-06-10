import {
  createOrder,
  getOrder
} from './order.controller'
import express from 'express'
const router = express.Router()

router.post('/', createOrder)
router.get('/', getOrder)

export default router
