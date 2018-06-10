import httpStatus from 'http-status'
import {
  getAllServices
} from './service.service'

export async function getServices (req, res, next) {
  try {
    const serv = await getAllServices()
    res.status(httpStatus.OK).json(serv)
  } catch (error) {
    console.log('error ', error)
    next(error)
  }
}
