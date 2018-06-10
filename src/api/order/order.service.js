import db from '../../db/db'
import {
  PreparedStatement
} from 'pg-promise'
import ErrorHandler from '../../handlers/errorHandler'
import httpStatus from 'http-status'
import {
  CREATE_ORDER,
  FIND_ORDERS
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
  try {
    const createOrderq = new PreparedStatement('create-order', CREATE_ORDER, [order.id_provider, order.description])
    let ser = await db.oneOrNone(createOrderq)
    return ser
  } catch (error) {
    throw error
  }
}
