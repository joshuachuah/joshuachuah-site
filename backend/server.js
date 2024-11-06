const dotenv = require('dotenv');
// Load env variables first
dotenv.config();

const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

console.log('Environment variables loaded:', {
    EMAIL_USER: process.env.EMAIL_USER,
    PORT: process.env.PORT
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});