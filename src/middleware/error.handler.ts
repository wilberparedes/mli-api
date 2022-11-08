import { Boom } from '@hapi/boom'
import { NextFunction, Request, Response } from 'express'

function errorHandler (error: any, _req: Request, res: Response, _next: NextFunction): void {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

function boomErrorHandler (error: Boom<Error>, _req: Request, res: Response, next: NextFunction): void {
  if (error?.isBoom) {
    const { output } = error
    res.status(output.statusCode).json(output.payload)
  }
  next(error)
}

export { errorHandler, boomErrorHandler }
