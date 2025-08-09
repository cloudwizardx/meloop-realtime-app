import app from './app'
import envConfig from './configs/env.config'

app.listen(envConfig.port, () => {
  console.log(`Server is running on port ${envConfig.port} in ${envConfig.nodeEnv} mode`)
})
