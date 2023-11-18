const ApplicationError = require('./ApplicationError')
const CarAlreadyRentedError = require('./CarAlreadyRentedError')
const EmailAlreadyTakenError = require('./EmailAlreadyTakenError')
const EmailNotRegisteredError = require('./EmailNotRegisteredError')

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

  describe('#CarAlreadyRentedError', () => {
    const mockCar = {
      name: 'Ferrari',
      price: 500000,
      size: 'small',
      image: 'car.jpg',
      isCurrentlyRented: false,
    }

    it('should return error car is already and details cars', () => {
      const error = new CarAlreadyRentedError(mockCar)

      expect(error.details.car).toEqual(mockCar)
    })
  })

  describe('#EmailNotRegistered', () => {
    const mockEmail = 'bob@mail.com'

    it('should return error car is already and details cars', () => {
      const error = new EmailNotRegisteredError(mockEmail)

      expect(error.details.email).toEqual(mockEmail)
    })
  })

  describe('#EmailAlreadyTakenError', () => {
    const mockEmail = 'bob@mail.com'

    it('should return error car is already and details cars', () => {
      const error = new EmailAlreadyTakenError(mockEmail)

      expect(error.details.email).toEqual(mockEmail)
    })
  })
})
