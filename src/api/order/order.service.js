import db from '../../db/db'
import {
  PreparedStatement
} from 'pg-promise'
import ErrorHandler from '../../handlers/errorHandler'
import httpStatus from 'http-status'
import {
  CREATE_ORDER,
  FIND_ORDERS,
  UPDATE_ORDER
} from './order.query'

export async function getAllOrders () {
  try {
    const findOr = new PreparedStatement('find-order', FIND_ORDERS, [])
    let ser = await db.manyOrNone(findOr)
    return ser
  } catch (error) {
    throw error
  }
}

export async function createNewOrder (order) {
  console.log('data -> ', order)
  try {
    const createOrderq = new PreparedStatement('create-order', CREATE_ORDER, [order.id_provider, order.description, order.date_delivery, order.title, 'pending'])
    let ser = await db.oneOrNone(createOrderq)
    return ser
  } catch (error) {
    throw error
  }
}

export async function updateOrder (order) {
  console.log('data -> ', order)
  try {
    const updateOrderq = new PreparedStatement('update-order', UPDATE_ORDER, [order.status, order.id])
    let ser = await db.oneOrNone(updateOrderq)
    return ser
  } catch (error) {
    throw error
  }
}
