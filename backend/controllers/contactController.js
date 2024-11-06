// Handles contact form logic

const emailConfig = require('../config/email');
const emailTemplate = require('../utils/emailTemplate');


const sendContactEmail = async(req, res, next) => {
    try{
        console.log('Received request body:', req.body);
        const { name, email, subject, message } = req.body;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${subject}`,
            html: emailTemplate({ name, email, subject, message })
        };
        
        console.log('Mail options:', mailOptions);
        
        try {
            await emailConfig.transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            res.status(500).json({ success: false, message: 'Failed to send email' });
        }
    } catch (error) {
        console.error('Controller error:', error);
        next(error);
    }
};

module.exports = {
    sendContactEmail
}