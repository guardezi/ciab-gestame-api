import httpStatus from 'http-status'
import {
  createNewOrder,
  getAllOrders,
  updateOrder
} from './order.service'

export async function createOrder (req, res, next) {
  try {
    const serv = await createNewOrder(req.body)
    res.status(httpStatus.OK).json(serv)
  } catch (error) {
    console.log('error ', error)
    next(error)
  }
}

export async function getOrder (req, res, next) {
  try {
    const serv = await getAllOrders()
    res.status(httpStatus.OK).json(serv)
  } catch (error) {
    console.log('error ', error)
    next(error)
  }
}

export async function update (req, res, next) {
  try {
    const serv = await updateOrder(req.body)
    res.status(httpStatus.OK).json(serv)
  } catch (error) {
    console.log('error ', error)
    next(error)
  }
}
