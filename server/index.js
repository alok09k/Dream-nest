const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = require('./dbconnection/dbConnection.js'); // Adjust the path as necessary

const app = express();

const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)

// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Set the port from .env or default to 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
