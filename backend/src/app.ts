import express from 'express'
import { globalErrorHandle } from '~/middlewares/error.middleware'
import authRoutes from '~/routes/auth.routes'
import userRoutes from '~/routes/user.routes'
import friendRoute from '~/routes/friend.routes'

const app = express()

app.use(express.json())

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users/me', userRoutes)
app.use('/api/v1/friends', friendRoute)

app.use(globalErrorHandle)

// eslint-disable-next-line prettier/prettier
export default app