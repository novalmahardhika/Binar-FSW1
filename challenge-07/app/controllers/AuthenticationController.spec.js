// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const AuthenticationController = require('./AuthenticationController')
// const { EmailNotRegisteredError, WrongPasswordError } = require('../errors')

// const userMock = {
//   id: 1,
//   name: 'Bob',
//   email: 'bob@mail.com',
//   encryptedPassword: 'bob123',
//   image: 'image.jpg',
// }

// const createUserMock = {
//   name: 'Bob',
//   email: 'bob@mail.com',
//   encryptedPassword: 'bob123',
//   role: roleMock.role.id,
// }

// const roleMock = {
//   role: {
//     id: 1,
//     name: 'ADMIN',
//   },
// }

// const mockUserModel = {
//   findOne: jest.fn().mockReturnValue({ ...userMock, id: 1, role: 'ADMIN' }),
//   create: jest.fn().mockReturnValue(createUserMock),
// }

// jest.mock('jsonwebtoken', () => ({
//   verify: jest.fn().mockReturnValue(roleMock),
//   sign: jest.fn().mockReturnValue('MOCKTOKEN'),
// }))

// jest.mock('bcryptjs', () => ({
//   hashSync: jest.fn().mockReturnValue('bob123'),
//   compareSync: jest.fn().mockReturnValue(true),
// }))

// // const authController = new AuthenticationController({
// //   userModel: mockUserModel,
// //   roleModel: roleMock,
// //   jwt: jwt,
// //   bcrypt: bcrypt,
// // })

// describe('AuthController', () => {
//   describe('authorize', () => {
//     const authController = new AuthenticationController({
//       userModel: mockUserModel,
//       roleModel: roleMock,
//       jwt: jwt,
//       bcrypt: bcrypt,
//     })

//     it('should no Error and next ', () => {
//       const mockReq = {
//         headers: {
//           authorization: 'Bearer MOCKTOKEN',
//         },
//       }
//       const mockRes = {}
//       const mockNext = jest.fn()

//       const auth = authController.authorize(authController.accessControl.ADMIN)
//       auth(mockReq, mockRes, mockNext)

//       expect(mockNext).toHaveBeenCalled()
//     })

//     it('should return error status 401 and res.json error', () => {
//       const mockReq = {
//         headers: {
//           authorization: 'Bearer MOCKTOKEN',
//         },
//       }
//       const mockRes = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn().mockReturnThis(),
//       }
//       const mockNext = jest.fn()

//       const auth = authController.authorize(authController.accessControl.PUBLIC)
//       auth(mockReq, mockRes, mockNext)

//       expect(mockRes.status).toHaveBeenCalledWith(401)
//       expect(mockRes.json).toHaveBeenCalledWith({
//         error: {
//           name: 'Error',
//           message: 'Access forbidden!',
//           details: {
//             role: 'ADMIN',
//             reason: 'ADMIN is not allowed to perform this operation.',
//           },
//         },
//       })
//     })
//   })

//   describe('#handleLogin', () => {
//     it('should res.status 201 and return accessToken', async () => {
//       const authController = new AuthenticationController({
//         userModel: mockUserModel,
//         roleModel: roleMock,
//         jwt: jwt,
//         bcrypt: bcrypt,
//       })

//       const mockReq = {
//         body: {
//           email: 'bob@mail.com',
//           password: 'bob123',
//         },
//       }

//       const mockRes = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn().mockReturnThis(),
//       }

//       const mockNext = jest.fn()

//       await authController.handleLogin(mockReq, mockRes, mockNext)

//       expect(authController.userModel.findOne).toHaveBeenCalled()
//       expect(mockRes.status).toHaveBeenCalledWith(201)
//       expect(mockRes.json).toHaveBeenCalledWith({ accessToken: 'MOCKTOKEN' })
//     })

//     it('should return error status 404', async () => {
//       const authController = new AuthenticationController({
//         userModel: { findOne: jest.fn() },
//         roleModel: roleMock,
//         jwt: jwt,
//         bcrypt: bcrypt,
//       })

//       const mockReq = {
//         body: {
//           email: 'bob@mail.com',
//           password: 'bob123',
//         },
//       }

//       const error = new EmailNotRegisteredError(mockReq.body.email)

//       const mockRes = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn().mockReturnThis(),
//       }

//       const mockNext = jest.fn()

//       await authController.handleLogin(mockReq, mockRes, mockNext)
//       expect(authController.userModel.findOne).toHaveBeenCalled()
//       expect(mockRes.status).toHaveBeenCalledWith(404)
//       expect(mockRes.json).toHaveBeenCalledWith(error)
//     })

//     it('should return error status 401', async () => {
//       const authController = new AuthenticationController({
//         userModel: mockUserModel,
//         roleModel: roleMock,
//         jwt: jwt,
//         bcrypt: {
//           compareSync: jest.fn().mockReturnValue(false),
//         },
//       })

//       const mockReq = {
//         body: {
//           email: 'bob@mail.com',
//           password: 'bob123',
//         },
//       }

//       const error = new WrongPasswordError()

//       const mockRes = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn().mockReturnThis(),
//       }

//       const mockNext = jest.fn()

//       await authController.handleLogin(mockReq, mockRes, mockNext)

//       expect(authController.userModel.findOne).toHaveBeenCalled()
//       expect(mockRes.status).toHaveBeenCalledWith(401)
//       expect(mockRes.json).toHaveBeenCalledWith(error)
//     })

//     it('should return next with error', async () => {
//       const error = new Error('Internal Server Error')

//       const authController = new AuthenticationController({
//         userModel: {
//           findOne: jest.fn().mockReturnValue(Promise.reject(error)),
//         },
//         roleModel: roleMock,
//         jwt: jwt,
//         bcrypt: bcrypt,
//       })

//       const mockReq = {
//         body: {
//           email: 'bob@mail.com',
//           password: 'bob123',
//         },
//       }

//       const mockRes = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn().mockReturnThis(),
//       }

//       const mockNext = jest.fn()

//       await authController.handleLogin(mockReq, mockRes, mockNext)

//       expect(mockNext).toHaveBeenCalled()
//     })
//   })

//   describe('#handleRegister', () => {
//     it('should status respon 201 create user and accesssToken', async () => {
//       const authController = new AuthenticationController({
//         userModel: {
//           findOne: jest.fn().mockReturnValue(false),
//           create: jest.fn().mockReturnValue(createUserMock),
//         },
//         roleModel: {
//           findOne: jest
//             .fn()
//             .mockReturnValue({ role: { id: 2, name: 'CUSTOMER' } }),
//         },
//         jwt: jwt,
//         bcrypt: bcrypt,
//       })
//       const mockReq = {
//         body: {
//           name: 'Bob',
//           email: 'bob@mail.com',
//           password: 'bob123',
//         },
//       }
//       const mockRes = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn().mockReturnThis(),
//       }
//       const mockNext = jest.fn()
//       await authController.handleRegister(mockReq, mockRes, mockNext)
//       expect(authController.userModel.create).toHaveBeenCalled()
//       expect(mockRes.status).toHaveBeenCalledWith(201)
//       expect(mockRes.json).toHaveBeenCalledWith({ accessToken: 'MOCKTOKEN' })
//     })

//     it('should status respon 201 create user and accesssToken', async () => {
//       const authController = new AuthenticationController({
//         userModel: mockUserModel,
//         roleModel: roleMock,
//         jwt: jwt,
//         bcrypt: bcrypt,
//       })

//       const mockReq = {
//         body: {
//           name: 'Bob',
//           email: 'bob@mail.com',
//           password: 'bob123',
//         },
//       }
//       const mockRes = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn().mockReturnThis(),
//       }
//       const mockNext = jest.fn()
//       await authController.handleRegister(mockReq, mockRes, mockNext)

//       expect(mockRes.status).toHaveBeenCalledWith(201)
//       // expect(mockRes.json).toHaveBeenCalledWith({
//       //   accessToken: 'MOCKTOKEN',
//       // })
//     })
//   })
// })

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AuthenticationController = require('./AuthenticationController')
const {
  InsufficientAccessError,
  EmailNotRegisteredError,
  WrongPasswordError,
} = require('../errors')
const EmailAlreadyTakenError = require('../errors/EmailAlreadyTakenError')
const RecordNotFoundError = require('../errors/RecordNotFoundError')

jest.mock('jsonwebtoken')
jest.mock('bcryptjs')

// jest.mock('jsonwebtoken', () => ({
//   verify: jest.fn().mockReturnValue(roleMock),
//   sign: jest.fn().mockReturnValue('MOCKTOKEN'),
// }))

// jest.mock('bcryptjs', () => ({
//   hashSync: jest.fn().mockReturnValue('bob123'),
//   compareSync: jest.fn().mockReturnValue(true),
// }))

const mockUser = {
  id: 1,
  name: 'Bob',
  email: 'bob@mail.com',
  role: 'ADMIN',
}

const mockRole = {
  id: 1,
  name: 'ADMIN',
}

describe('AuthController', () => {
  describe('#authorize', () => {
    const authController = new AuthenticationController({
      userModel: mockUser,
      roleModel: mockRole,
      jwt: {
        verify: jest
          .fn()
          .mockReturnValue({ ...mockUser, role: { name: 'ADMIN' } }),
      },
      bcrypt: bcrypt,
    })

    const mockReq = {
      headers: {
        authorization: 'Bearer TOKEN',
      },
    }
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }
    const mockNext = jest.fn()

    it('should next and not error', () => {
      const auth = authController.authorize(authController.accessControl.ADMIN)
      auth(mockReq, mockRes, mockNext)
    })

    it('should res.status 401 and show error message', () => {
      const err = new InsufficientAccessError('ADMIN')
      const mockErr = {
        error: {
          details: err.details || null,
          name: err.name,
          message: err.message,
        },
      }

      const auth = authController.authorize(
        authController.accessControl.CUSTOMER
      )
      auth(mockReq, mockRes, mockNext)

      expect(mockRes.status).toHaveBeenCalledWith(401)
      expect(mockRes.json).toHaveBeenCalledWith(mockErr)
    })
  })

  describe('#handleLogin', () => {
    const mockReq = {
      body: {
        email: 'bob@mail.com',
        password: 'bob123',
      },
    }

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }

    const mockNext = jest.fn()
    it('should res.status 201 and return accessToken', async () => {
      const authController = new AuthenticationController({
        userModel: {
          findOne: jest
            .fn()
            .mockReturnValue({ ...mockUser, Role: { id: 1, name: 'ADMIN' } }),
        },
        roleModel: mockRole,
        jwt: { sign: jest.fn().mockReturnValue('TOKEN') },
        bcrypt: { compareSync: jest.fn().mockReturnValue(true) },
      })

      await authController.handleLogin(mockReq, mockRes, mockNext)

      expect(authController.userModel.findOne).toHaveBeenCalled()
      expect(mockRes.status).toHaveBeenCalledWith(201)
      expect(mockRes.json).toHaveBeenCalledWith({ accessToken: 'TOKEN' })
    })

    it('should res.status 404 and return error', async () => {
      const authController = new AuthenticationController({
        userModel: {
          findOne: jest.fn().mockReturnValue(null),
        },
        roleModel: mockRole,
        jwt: jwt,
        bcrypt: bcrypt,
      })

      const err = new EmailNotRegisteredError(mockReq.body.email)

      await authController.handleLogin(mockReq, mockRes, mockNext)

      expect(mockRes.status).toHaveBeenCalledWith(404)
      expect(mockRes.json).toHaveBeenCalledWith(err)
    })

    it('should res.status 401 and return error', async () => {
      const authController = new AuthenticationController({
        userModel: {
          findOne: jest
            .fn()
            .mockReturnValue({ ...mockUser, role: { id: 1, name: 'ADMIN' } }),
        },
        roleModel: mockRole,
        jwt: jwt,
        bcrypt: { compareSync: jest.fn().mockReturnValue(false) },
      })

      const err = new WrongPasswordError('Password Invalid')

      await authController.handleLogin(mockReq, mockRes, mockNext)

      expect(mockRes.status).toHaveBeenCalledWith(401)
      expect(mockRes.json).toHaveBeenCalledWith(err)
    })

    it('should next(error)', async () => {
      const err = new Error('Internal Server Error')

      const authController = new AuthenticationController({
        userModel: {
          findOne: jest.fn().mockReturnValue(Promise.reject(err)),
        },
        roleModel: mockRole,
        jwt: jwt,
        bcrypt: bcrypt,
      })

      await authController.handleLogin(mockReq, mockRes, mockNext)

      expect(mockNext).toHaveBeenCalled()
    })
  })

  describe('#handleRegister', () => {
    const mockReq = {
      body: {
        name: 'Bob',
        email: 'bob@mail.com',
        password: 'bob123',
      },
    }

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }

    const mockNext = jest.fn()

    it('should res.status 201 and return accessToken', async () => {
      const { email, name, password } = mockReq.body
      const authController = new AuthenticationController({
        userModel: {
          findOne: jest.fn().mockReturnValue(false),
          create: jest.fn().mockReturnValue({
            name: name,
            email: email,
            encryptedPassword: password,
            roleId: 2,
          }),
        },
        roleModel: {
          findOne: jest
            .fn()
            .mockReturnValue({ role: { id: 2, name: 'CUSTOMER' } }),
        },
        jwt: { sign: jest.fn().mockReturnValue('TOKEN') },
        bcrypt: { hashSync: jest.fn().mockReturnValue('bob123') },
      })

      await authController.handleRegister(mockReq, mockRes, mockNext)

      expect(authController.userModel.create).toHaveBeenCalled()
      expect(mockRes.status).toHaveBeenCalledWith(201)
      expect(mockRes.json).toHaveBeenCalledWith({ accessToken: 'TOKEN' })
    })

    it('should res.status 422 and return json err', async () => {
      const authController = new AuthenticationController({
        userModel: {
          findOne: jest.fn().mockReturnValue(mockUser),
        },
        roleModel: mockRole,
        jwt: jwt,
        bcrypt: bcrypt,
      })

      const err = new EmailAlreadyTakenError(mockReq.body.email)

      await authController.handleRegister(mockReq, mockRes, mockNext)

      expect(mockRes.status).toHaveBeenCalledWith(422)
      expect(mockRes.json).toHaveBeenCalledWith(err)
    })

    it('should res.status 422 and return json err', async () => {
      const err = new Error('Internal Server Error')

      const authController = new AuthenticationController({
        userModel: {
          findOne: jest.fn().mockReturnValue(Promise.reject(jest.fn(err))),
        },
        roleModel: mockRole,
        jwt: jwt,
        bcrypt: bcrypt,
      })

      await authController.handleRegister(mockReq, mockRes, mockNext)

      expect(mockNext).toHaveBeenCalled()
    })
  })

  describe('#handleGetUser', () => {
    const mockReq = {
      user: {
        id: 1,
      },
    }

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }

    const mockNext = jest.fn()

    it('should res.status 200 and return user', async () => {
      const authController = new AuthenticationController({
        userModel: {
          findByPk: jest.fn().mockReturnValue({
            ...mockUser,
            role: { id: 1, name: 'ADMIN' },
          }),
        },
        roleModel: { findByPk: jest.fn().mockReturnValue(mockReq.user.id) },
        jwt: jwt,
        bcrypt: bcrypt,
      })

      await authController.handleGetUser(mockReq, mockRes, mockNext)

      expect(mockRes.status).toHaveBeenCalledWith(200)
      expect(mockRes.json).toHaveBeenCalledWith({
        ...mockUser,
        role: { id: 1, name: 'ADMIN' },
      })
    })

    it('should res.status 404 and return error user', async () => {
      const authController = new AuthenticationController({
        userModel: {
          findByPk: jest.fn().mockReturnValue(null),
        },
        roleModel: mockRole,
        bcrypt: bcrypt,
        jwt: jwt,
      })

      await authController.handleGetUser(mockReq, mockRes)
      const err = new RecordNotFoundError(authController.userModel.role)

      expect(mockRes.status).toHaveBeenCalledWith(404)
      expect(mockRes.json).toHaveBeenCalledWith(err)
    })

    it('should res.status 404 and return error role', async () => {
      const authController = new AuthenticationController({
        userModel: {
          findByPk: jest.fn().mockReturnValue({
            ...mockUser,
            role: { id: 1, name: 'ADMIN' },
          }),
        },
        roleModel: {
          findByPk: jest.fn().mockReturnValue(null),
        },
        bcrypt: bcrypt,
        jwt: jwt,
      })

      await authController.handleGetUser(mockReq, mockRes)
      const err = new RecordNotFoundError(authController.roleModel.role)

      expect(mockRes.status).toHaveBeenCalledWith(404)
      expect(mockRes.json).toHaveBeenCalledWith(err)
    })
  })
})
