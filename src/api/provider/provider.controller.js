import httpStatus from 'http-status'
import {
  getAllProviders,
  getAllBySpecialty
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

export async function getBySpeccialty (req, res, next) {
  try {
    const providers = await getAllBySpecialty(req.body)
    res.status(httpStatus.OK).json(providers)
  } catch (error) {
    console.log('error ', error)
    next(error)
  }
}
