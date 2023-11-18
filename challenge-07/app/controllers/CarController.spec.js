const dayjs = require('dayjs')
const { Op } = require('sequelize')
const CarController = require('./CarController')
const { CarAlreadyRentedError } = require('../errors')

jest.mock('dayjs')
jest.mock('sequelize', () => ({ Op: { gte: jest.fn().mockReturnValue(true) } }))

const mockCar = {
  name: 'Ferrari',
  price: 500000,
  size: 'small',
  image: 'car.jpg',
  isCurrentlyRented: false,
}

const mockUserCar = {
  userId: 1,
  carId: 1,
  rentStartedAt: '2022-11-15',
  rentEndedAt: '2022-11-15',
}

describe('CarController', () => {
  describe('#handleListCars', () => {
    const carController = new CarController({
      carModel: {
        findAll: jest.fn().mockReturnValue(mockCar),
        count: jest.fn().mockReturnValue({
          where: { size: 'small' },
          include: {
            model: {
              userId: 1,
              carId: 1,
              rentStartedAt: '2023-11-17T06:53:25.103Z',
              rentEndedAt: '2023-11-17T06:53:25.103Z',
            },
          },
        }),
      },
      userCarModel: mockUserCar,
      dayjs: dayjs,
    })

    const mockReq = {
      query: {
        page: 1,
        pageSize: 10,
        size: 'small',
        availabelAt: new Date(),
      },
    }

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }

    it('should res.status 200 and return cars', async () => {
      const mockResData = {
        cars: {
          image: 'car.jpg',
          isCurrentlyRented: false,
          name: 'Ferrari',
          price: 500000,
          size: 'small',
        },
        meta: {
          pagination: {
            count: {
              include: {
                model: {
                  carId: 1,
                  rentEndedAt: '2023-11-17T06:53:25.103Z',
                  rentStartedAt: '2023-11-17T06:53:25.103Z',
                  userId: 1,
                },
              },
              where: { size: 'small' },
            },
            page: 1,
            pageCount: NaN,
            pageSize: 10,
          },
        },
      }

      await carController.handleListCars(mockReq, mockRes)

      expect(mockRes.status).toHaveBeenCalledWith(200)
      expect(mockRes.json).toHaveBeenCalledWith(mockResData)
    })
  })

  describe('#handleGetCar', () => {
    const mockReq = {
      params: {
        id: 1,
      },
    }

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }

    const carController = new CarController({
      carModel: {
        findByPk: jest.fn().mockReturnValue(mockCar),
      },
      userCarModel: mockUserCar,
      dayjs: dayjs,
    })

    it('should res.status 200 and return car', async () => {
      await carController.handleGetCar(mockReq, mockRes)

      expect(mockRes.status).toHaveBeenCalledWith(200)
      expect(mockRes.json).toHaveBeenCalledWith(mockCar)
    })
  })

  describe('#handleCreateCar', () => {
    const mockReq = {
      body: {
        name: mockCar.name,
        prize: mockCar.price,
        size: mockCar.size,
        image: mockCar.image,
      },
    }

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }

    it('should res.status 201 and return data car', async () => {
      const carController = new CarController({
        carModel: {
          create: jest.fn().mockReturnValue(mockCar),
        },
        userCarModel: mockUserCar,
        dayjs: dayjs,
      })

      await carController.handleCreateCar(mockReq, mockRes)

      expect(mockRes.status).toHaveBeenCalledWith(201)
      expect(mockRes.json).toHaveBeenCalledWith(mockCar)
    })

    it('should res.status 422 and return error', async () => {
      const err = new Error('Created Fail')

      const carController = new CarController({
        carModel: {
          create: jest.fn().mockReturnValue(Promise.reject(err)),
        },
        userCarModel: mockUserCar,
        dayjs: dayjs,
      })

      await carController.handleCreateCar(mockReq, mockRes)

      expect(mockRes.status).toHaveBeenCalledWith(422)
      expect(mockRes.json).toHaveBeenCalledWith({
        error: {
          name: err.name,
          message: err.message,
        },
      })
    })
  })

  describe('#handleRentCar', () => {
    const mockCreateData = {
      userId: 1,
      carId: 1,
      rentStartedAt: '2023-11-17T06:53:25.103Z',
      rentEndedAt: '2023-11-20T06:53:25.103',
    }

    const mockReq = {
      user: {
        id: 1,
      },
      body: {
        rentStartedAt: '2023-11-17T06:53:25.103Z',
        rentEndedAt: '2023-11-20T06:53:25.103',
      },
      params: {
        id: 1,
      },
    }

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }

    const mockNext = jest.fn()

    it('should res.status 201 and return userCar', async () => {
      const carController = new CarController({
        carModel: {
          findByPk: jest.fn().mockReturnValue({ id: 1, ...mockCar }),
        },
        userCarModel: {
          findOne: jest.fn().mockReturnValue(false),
          create: jest.fn().mockReturnValue(mockCreateData),
        },
        dayjs: dayjs,
      })

      await carController.handleRentCar(mockReq, mockRes, mockNext)

      expect(mockRes.status).toHaveBeenCalledWith(201)
      expect(mockRes.json).toHaveBeenCalledWith(mockCreateData)
    })

    it('should error status 422 and return error', async () => {
      const carController = new CarController({
        carModel: {
          findByPk: jest.fn().mockReturnValue({ id: 1, ...mockCar }),
        },
        userCarModel: {
          findOne: jest.fn().mockReturnValue(true),
        },
        dayjs: dayjs,
      })

      const err = new CarAlreadyRentedError({ id: 1, ...mockCar })

      await carController.handleRentCar(mockReq, mockRes, mockNext)

      expect(mockRes.status).toHaveBeenCalledWith(422)
      expect(mockRes.json).toHaveBeenCalledWith(err)
    })

    it('should next error', async () => {
      const err = new Error('Internal Server Error')

      const carController = new CarController({
        carModel: {
          findByPk: jest.fn().mockReturnValue(Promise.reject(err)),
        },
        userCarModel: {
          findOne: jest.fn().mockReturnValue(true),
        },
        dayjs: dayjs,
      })

      await carController.handleRentCar(mockReq, mockRes, mockNext)

      expect(mockNext).toHaveBeenCalled()
    })
  })

  describe('#handleUpdateCar', () => {
    const mockReq = {
      params: {
        id: 1,
      },
      body: {
        name: 'Ferrari',
        price: 9000000,
        size: 'small',
        image: 'image.png',
      },
    }

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }

    it('should res.status 200 and return car', async () => {
      const carController = new CarController({
        carModel: {
          findByPk: jest.fn().mockReturnValue({ id: 1, ...mockCar }),
          update: jest.fn().mockReturnValue({ id: 1, ...mockReq.body }),
        },
        userCarModel: {},
        dayjs: dayjs,
      })

      await carController.handleUpdateCar(mockReq, mockRes)

      expect(carController.carModel.update).toHaveBeenCalled()
      expect(mockRes.status).toHaveBeenCalledWith(200)
      expect(mockRes.json).toHaveBeenCalledWith({ id: 1, ...mockReq.body })
    })

    it('should res.status 200 and return car', async () => {
      const err = new Error('Updated Fail')
      const carController = new CarController({
        carModel: {
          findByPk: jest.fn().mockReturnValue({ id: 1, ...mockCar }),
          update: jest.fn().mockReturnValue(Promise.reject(err)),
        },
        userCarModel: {},
        dayjs: dayjs,
      })

      await carController.handleUpdateCar(mockReq, mockRes)

      expect(mockRes.status).toHaveBeenCalledWith(422)
      expect(mockRes.json).toHaveBeenCalledWith({
        error: {
          name: err.name,
          message: err.message,
        },
      })
    })
  })

  describe('#handleDelete', () => {
    const carController = new CarController({
      carModel: {
        destroy: jest.fn().mockReturnValue(),
      },
      userCarModel: {},
      dayjs: dayjs,
    })

    const mockReq = {
      params: {
        id: 1,
      },
    }

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      end: jest.fn(),
    }

    it('should res.status 204', async () => {
      await carController.handleDeleteCar(mockReq, mockRes)

      expect(mockRes.status).toHaveBeenCalledWith(204)
      expect(mockRes.end).toHaveBeenCalled()
    })
  })

  describe('getCarFromRequest', () => {
    const mockReq = {
      params: {
        id: 1,
      },
    }

    it('should return data car', () => {
      const carController = new CarController({
        carModel: {
          findByPk: jest.fn().mockReturnValue({ id: 1, ...mockCar }),
        },
        userCarModel: {},
        dayjs: dayjs,
      })

      carController.getCarFromRequest(mockReq)

      expect(carController.getCarFromRequest(mockReq)).toEqual({
        id: 1,
        ...mockCar,
      })
    })
  })

  describe('getListQueryFromRequest', () => {
    const carController = new CarController({
      carModel: {},
      userCarModel: mockUserCar,
      dayjs: dayjs,
    })
    const mockReq = {
      query: {
        size: 'small',
        availableAt: '2023-11-15',
        pageSize: 10,
        page: 1,
      },
    }

    const mockResultData = {
      include: {
        model: {
          userId: 1,
          carId: 1,
          rentStartedAt: '2022-11-15',
          rentEndedAt: '2022-11-15',
        },
        as: 'userCar',
        required: false,
        where: {
          rentEndedAt: {
            'function () {\n        return fn.apply(this, arguments);\n      }':
              '2023-11-15',
          },
        },
      },
      where: { size: 'small' },
      limit: 10,
      offset: 0,
    }

    it('should return query', () => {
      carController.getListQueryFromRequest(mockReq)

      expect(carController.getListQueryFromRequest(mockReq)).toEqual(
        mockResultData
      )
    })
  })
})
