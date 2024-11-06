const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limits each IP to 5 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests, please try again later.'
    }
});

module.exports = rateLimiter;