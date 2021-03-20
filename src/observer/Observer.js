class Observer {
  constructor () {
    this.observer = []
  }

  on (event, callback) {
    this.addEvent(event)
    this.observer[event].push(callback)

    return this
  }

  emit (event, data) {
    this.addEvent(event)
    this.observer[event].forEach(callback => callback(data))
  }

  addEvent (event) {
    if (this.observer[event] === undefined) {
      this.observer[event] = []
    }
  }
}

export default Observer
