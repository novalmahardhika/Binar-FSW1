class ApplicationError extends Error {
  constructor(message, statusErr) {
    super(message)
    this.statusCode = statusErr
  }
}

module.exports = ApplicationError
