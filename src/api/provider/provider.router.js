import {
  getProviders
} from './provider.controller'
import express from 'express'
const router = express.Router()

// router.get('/', getServices)
// router.get('/:id', getUserById)
router.get('/', getProviders)

export default router
