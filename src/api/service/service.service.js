import db from '../../db/db'
import {
  PreparedStatement
} from 'pg-promise'
import ErrorHandler from '../../handlers/errorHandler'
import httpStatus from 'http-status'
import {
  FIND_SERVICE
} from './service.query'

export async function getAllServices () {
  try {
    const findService = new PreparedStatement('find-service', FIND_SERVICE, [])
    let ser = await db.manyOrNone(findService)
    return ser
  } catch (error) {
    throw error
  }
}
