import Middleware from '../Middleware'

describe('Test Middleware call all methods', () => {
  const middleware = new Middleware()

  test('should assert method middleware.use was called', () => {
    jest.spyOn(middleware, 'use')
    middleware.use(() => {})
    expect(middleware.use).toHaveBeenCalled()
  })

  test('should assert method middleware.process was called', () => {
    jest.spyOn(middleware, 'process')
    middleware.process(() => {})
    expect(middleware.process).toHaveBeenCalled()
  })

  test('should assert method middleware.process was called', () => {
    jest.spyOn(middleware, 'process')
    middleware.process()
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
