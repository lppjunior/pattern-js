class Middleware {
  constructor () {
    this.middlewares = []
  }

  use (callback) {
    this.middlewares.push(callback)
    return this
  }

  process (...data) {
    let iterator = 0

    const next = () => {
      if (iterator < this.middlewares.length) {
        this.middlewares[iterator++](...data, next)
      }
    }

    next()
  }
}

export default Middleware
