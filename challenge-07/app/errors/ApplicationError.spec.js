const ApplicationError = require('./ApplicationError')
// const CarAlreadyRentedError = require('./CarAlreadyRentedError')

describe('Error Handler', () => {
  describe('#ApplicationError', () => {
    it('should return error with property name,message, and details', () => {
      const applicationError = new ApplicationError()
      const err = applicationError.toJSON()

      expect(err).toMatchObject({
        error: {
          name: applicationError.name,
          message: applicationError.message,
          details: applicationError.details,
        },
      })
    })
  })

  describe('#CarAlreadyRentedError', () => {})
  describe('#EmailNotRegistered', () => {})
  describe('#InsufficientAccessError', () => {})
})
