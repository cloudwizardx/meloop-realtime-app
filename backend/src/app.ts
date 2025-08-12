import express from 'express'
import { globalErrorHandle } from '~/middlewares/error.middleware'
import authRoutes from '~/routes/auth.routes'

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)

app.use(globalErrorHandle)

// eslint-disable-next-line prettier/prettier
export default app