import mongoose from 'mongoose'

const connectToDatabase = async (mongoUri: string) => {
  try {
    const connection = await mongoose.connect(mongoUri)
    console.log(`Connected to MongoDB at host: ${connection.connection.host}, port: ${connection.connection.port}`)
  } catch (error) {
    console.log(`Error connecting to the database: ${error}`)
  }
}

export default connectToDatabase
