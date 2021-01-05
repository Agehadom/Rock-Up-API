const errorHandler = (error, req, res, next) => {

  console.log('\n', new Date().toTimeString())
  // print the error to the server log
  console.log(error)

  let statusCode = 500

  // if 404 error
  if (error.name === "DocumentNotFoundError") {
    statusCode = 404
  // if CastError, invalid mongodb ID format
} else if (error.name === "CastError" || error.name === "ValidationError") {
    statusCode = 422
    error.message = "Unprocessable Entity"
  }

  res.status(statusCode).json(error.message)
}

module.exports = errorHandler
