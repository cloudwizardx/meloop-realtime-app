import type { EnvConfig } from '../interfaces/env.interface'

const envConfig: EnvConfig = {
  port: Number(process.env.PORT || '5001'),
  nodeEnv: process.env.NODE_ENV || 'unknown',
  mongoUri: process.env.MONGO_URI || ''
}

export default envConfig
