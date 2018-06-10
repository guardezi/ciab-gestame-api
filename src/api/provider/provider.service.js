import db from '../../db/db'
import {
  PreparedStatement
} from 'pg-promise'
import ErrorHandler from '../../handlers/errorHandler'
import httpStatus from 'http-status'
import {
  FIND_ALL_PROVIDERS
} from './provider.query'

export async function getAllProviders () {
  try {
    const findAllProviders = new PreparedStatement('find-all-providers', FIND_ALL_PROVIDERS, [])
    let ser = await db.manyOrNone(findAllProviders)
    return ser
  } catch (error) {
    throw error
  }
}

export async function getAllBySpecialty (specs) {
  try {
    const findAllProviders = new PreparedStatement('find-by-spec-providers', FIND_ALL_PROVIDERS, [])
    let ser = await db.manyOrNone(findAllProviders)
    return ser
  } catch (error) {
    throw error
  }
}
