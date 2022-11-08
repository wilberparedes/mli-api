import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes'
import { boomErrorHandler, errorHandler } from './middleware/error.handler'
import { config } from '../config'

const PORT = config.port
const app = express()
app.use(morgan('dev'))

app.use(cors())
app.use(express.json())
app.use(router)

app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
