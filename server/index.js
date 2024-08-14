// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


// Connect to MongoDB
connectDB();

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('CodeTrio API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
