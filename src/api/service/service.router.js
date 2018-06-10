import {
  getServices
} from './service.controller'
import express from 'express'
const router = express.Router()

router.get('/', getServices)
// router.get('/:id', getUserById)

export default router
