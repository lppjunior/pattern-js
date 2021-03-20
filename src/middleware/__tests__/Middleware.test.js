import Middleware from '../Middleware'

describe('Middleware', () => {
  const middleware = new Middleware()

  describe('Test existance of all public methods and attributes', () => {
    test('should assert than Middleware has been defined', () => {
      expect(middleware).toBeDefined()
    })

    test('should assert than use method has been defined', () => {
      expect(middleware.use).toBeDefined()
    })

    test('should assert than process method has been defined', () => {
      expect(middleware.process).toBeDefined()
    })
  })

  describe('Test Middleware call methods', () => {
    const middleware = new Middleware()

    test('should assert use method has been called', () => {
      jest.spyOn(middleware, 'use')
      middleware.use(() => {})
      expect(middleware.use).toHaveBeenCalled()
    })

    test('should assert process method has been called', () => {
      jest.spyOn(middleware, 'process')
      middleware.process(() => {})
      expect(middleware.process).toHaveBeenCalled()
    })
  })

  describe('Test Middleware call perfect scenaries', () => {
    const middleware = new Middleware()

    const data = {
      fullName: 'Full Name',
      test: '1 2 3 4'
    }

    middleware.use((data1, data, next) => {
      test('should assert data is 1 2 3 4', () => {
        expect(data.test).toEqual('1 2 3 4')
      })

      test('should assert data type is an Object', () => {
        expect(data).toEqual(expect.any(Object))
      })

      next()
    })

    middleware.use((data1, data, next) => {
      test('should assert is added property "firstName" to data object', () => {
        expect(data.fullName).toBe('Full Name')
      })

      next()
    })

    middleware.process('Test param 1', data)
  })
})
