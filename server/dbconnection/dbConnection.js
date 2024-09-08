const mongoose = require('mongoose');
require('dotenv').config();


// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URL;

    await mongoose.connect(mongoUri)

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process with failure
  }
};

// Export the connection function
module.exports = connectDB;
