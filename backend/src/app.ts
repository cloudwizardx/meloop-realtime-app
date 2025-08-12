import express from 'express'
import { globalErrorHandle } from './middlewares/error.middleware'

const app = express()

app.use(express.json())

app.use(globalErrorHandle)

// eslint-disable-next-line prettier/prettier
export default app