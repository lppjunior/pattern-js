function testMiddleware () {
  const middleware = new Middleware()
  middleware.use((param1, param2, next) => {
    console.log('[middleware] 1 ', param1, param2)
    next()
  })

  middleware.use((param1, param2, next) => {
    console.log('[middleware] 2 ', param1, param2)
    next()
  })

  middleware.use((param1, param2, next) => {
    console.log('[middleware] 3 ', param1, param2)
    next()
  })

  middleware.process({ test: 123, value: 'aaa' }, 'test')
}

document.addEventListener('DOMContentLoaded', testMiddleware, false)
