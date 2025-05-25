const errorHandler = (err, req, res, next) => {
  console.error('Error details:', {
      message: err.message,
      stack: err.stack,
      code: err.code
  });

  res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong! Please try again later.'
  });
};

module.exports = errorHandler;