class Middleware {
  constructor () {
    this.middlewares = []
  }

  use (callback) {
    this.middlewares.push(callback)
    return this
  }

  process (...data) {
    const next = (iterator) => {
      this.middlewares[iterator] && this.middlewares[iterator].apply(null, [...data, () => next(iterator + 1)])
    }

    next(0)
  }
}

export default Middleware
