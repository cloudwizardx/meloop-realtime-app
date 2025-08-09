import dotenv from 'dotenv'
import type { EnvConfig } from '../interfaces/env.interface'

dotenv.config()

const envConfig: EnvConfig = {
  port: Number(process.env.PORT || '5001'),
  nodeEnv: process.env.NODE_ENV || 'unknown'
}

export default envConfig
