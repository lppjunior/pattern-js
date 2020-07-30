class Observer {
  constructor () {
    this.observer = []
  }

  on (event, callback) {
    this.checkParam('callback', callback)
    this.addEvent(event)
    this.observer[event].push(callback)

    return this
  }

  emit (event, data) {
    this.addEvent(event)
    this.observer[event].forEach(callback => callback(data))
  }

  addEvent(event) {
    this.checkParam('event', event)
    if (this.observer[event] === undefined) {
      this.observer[event] = []
    }
  }

  checkParam(param, value) {
    switch (param) {
      case 'event':
        if (!(typeof value === 'string' || value instanceof String)) {
          throw new Error('Event definition must be a string')
        }
        break;

        case 'callback':
          if (!(value && {}.toString.call(value) === '[object Function]')) {
            throw new Error('callback definition must be a function')
          }
          break;

      default:
        throw new Error('Inexistent parameter')
    }
  }
}

export default Observer
