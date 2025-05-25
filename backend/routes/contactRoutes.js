// API Routes

const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');
const { validateContactInput } = require('../middleware/validator');
const rateLimiter = require('../middleware/rateLimiter');

router.post('/contact', rateLimiter, validateContactInput, sendContactEmail);

module.exports = router;
