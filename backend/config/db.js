import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb://127.0.0.1:27017/backend_database", {
			useNewUrlParser: true,
			
			
			useUnifiedTopology: true
		})

		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	} catch (err) {
		console.log(`Error:${err.message}`.red.underline.bold)
		process.exit(1)
	}
}

export default connectDB
