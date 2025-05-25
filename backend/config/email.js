const nodemailer = require('nodemailer');

// Create function to initialize transporter
const createTransporter = () => {
    console.log('Creating transporter with:', {
        user: process.env.EMAIL_USER ? 'Set' : 'Not set',
        pass: process.env.EMAIL_PASS ? 'Set' : 'Not set'
    });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    transporter.verify(function(error, success) {
        if (error) {
            console.error('SMTP connection error:', {
                message: error.message,
                code: error.code,
                command: error.command
            });
        } else {
            console.log('Server is ready to take our messages');
        }
    });

    return transporter;
};

module.exports = {
    transporter: createTransporter()
};