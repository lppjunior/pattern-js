class Observer {
  constructor () {
    this.observer = []
  }

  on (event, callback) {
    if (this.observer[event] === undefined) {
      this.observer[event] = []
    }

    this.observer[event].push(callback)

    return this
  }

  emit (event, value) {
    this.observer[event].forEach(callback => callback(value))
  }
}

export default Observer
