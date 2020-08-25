function testMiddleware () {
  const middleware = new Middleware()
  middleware.use((param1, param2, next) => {
    param1.test += ' UPDATED'
    console.log('[middleware] ', param1, param2)
    next(param1, param2)
  })

  middleware.use((param1, param2, next) => {
    param2 = param2 + ' UPDATED'
    console.log('[middleware] ', param1, param2)
    next(param1, param2)
  })

  middleware.use((param1, param2, next) => {
    console.log('[middleware] ', param1, param2)
    next(param1, param2)
  })

  middleware.process({ test: 123, value: 'aaa' }, 'test')
}

document.addEventListener('DOMContentLoaded', testMiddleware, false)
