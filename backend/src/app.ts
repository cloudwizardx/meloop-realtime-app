import express from 'express'
import { globalErrorHandle } from '~/middlewares/error.middleware'
import authRoutes from '~/routes/auth.routes'
import userRoutes from '~/routes/user.routes'

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users/me', userRoutes)

app.use(globalErrorHandle)

// eslint-disable-next-line prettier/prettier
export default app