import { NextFunction, Request, Response } from 'express'
import { getItem, getItems } from '../services/items'

const find = async ({ query: { q } }: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const response = await getItems(q)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const findOne = async ({ params: { id } }: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const response = await getItem(id)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

export { find, findOne }
