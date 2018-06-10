import httpStatus from 'http-status'
import {
  getAllProviders
} from './provider.service'

export async function getProviders (req, res, next) {
  try {
    const providers = await getAllProviders()
    res.status(httpStatus.OK).json(providers)
  } catch (error) {
    console.log('error ', error)
    next(error)
  }
}
