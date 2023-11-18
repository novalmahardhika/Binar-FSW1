const { NotFoundError } = require('../errors')
const ApplicationError = require('../errors/ApplicationError')
const ApplicationController = require('./ApplicationController')

const applicationController = new ApplicationController()
const mock = jest.fn()

describe('Application controllers', () => {
  describe('#handleGetRoot', () => {
    test('should return res.status(200), and res.json() with handleGetRoot instance', () => {
      const mockReq = {}
      const mockRes = {
        status: mock.mockReturnThis(),
        json: mock.mockReturnThis(),
      }

      applicationController.handleGetRoot(mockReq, mockRes)

      expect(mockRes.status).toHaveBeenCalledWith(200)
      expect(mockRes.json).toHaveBeenCalledWith({
        status: 'OK',
        message: 'BCR API is up and running!',
      })
    })
  })

  describe('#handleNotFound', () => {
    it('should return res.status(404), and res.json() with handleNotFound instance', () => {
      const mockReq = {
        method: 'GET',
        url: '/testNotFound',
      }

      const mockRes = {
        status: mock.mockReturnThis(),
        json: mock.mockReturnThis(),
      }

      const error = new NotFoundError(mockReq.method, mockReq.url)

      applicationController.handleNotFound(mockReq, mockRes)

      expect(mockRes.status).toHaveBeenCalledWith(404)
      expect(mockRes.json).toHaveBeenCalledWith({
        error: {
          name: error.name,
          message: error.message,
          details: error.details,
        },
      })
    })
  })

  describe('#handleError', () => {
    it('should return res.status(500), and res.json() with handleError instance', () => {
      const mockErr = new Error()
      const mockReq = {}
      const mockRes = {
        status: mock.mockReturnThis(),
        json: mock.mockReturnThis(),
      }
      applicationController.handleError(mockErr, mockReq, mockRes)
      expect(mockRes.status).toHaveBeenCalledWith(500)
      expect(mockRes.json).toHaveBeenCalledWith({
        error: {
          name: mockErr.name,
          message: mockErr.message,
          details: mockErr.details || null,
        },
      })
    })
  })

  describe('#getOffsetFromRequest', () => {
    it('should return offset from req.query', () => {
      const mockReq = {
        query: {
          page: 1,
          pageSize: 10,
        },
      }

      applicationController.getOffsetFromRequest(mockReq)
      const { page, pageSize } = mockReq.query
      const offset = (page - 1) * pageSize

      expect(offset).toBe(0)
    })
  })

  describe('#buildPaginationObject', () => {
    it('should return {page,pageCount,pageSize,count} from req.query and parameter count', () => {
      const mockReq = {
        query: {
          page: 1,
          pageSize: 10,
        },
      }

      const { page, pageSize } = mockReq.query
      const mockCount = 50
      const pageCount = Math.ceil(mockCount / pageSize)

      const appPagination = applicationController.buildPaginationObject(
        mockReq,
        mockCount
      )

      expect(appPagination).toMatchObject({
        page: page,
        pageCount: pageCount,
        pageSize: pageSize,
        count: mockCount,
      })
    })
  })
})
