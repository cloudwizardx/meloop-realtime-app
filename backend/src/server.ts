import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import envConfig from './configs/env.config'
import connectToDatabase from './libs/db.connection'

app.listen(envConfig.port, () => {
  console.log(`Server is running on port ${envConfig.port} in ${envConfig.nodeEnv} mode`)
  connectToDatabase(envConfig.mongoUri)
})
