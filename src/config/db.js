const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the MONGO_URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
  } catch (error) {
    // If connection fails, log the error and exit the process
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit with a non-zero code to indicate an error
  }
};

module.exports = connectDB;
