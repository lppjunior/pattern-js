import Observer from '../Observer'

const observer = new Observer()

describe('Test Observer call all methods', () => {
  test('should assert method observer.addEvent was called', () => {
    jest.spyOn(observer, 'addEvent')
    observer.addEvent('jest-test-event')
    expect(observer.addEvent).toHaveBeenCalled()
  })

  test('should assert method observer.emit was called', () => {
    jest.spyOn(observer, 'emit')
    observer.emit('jest-test-event', 'OK')
    expect(observer.emit).toHaveBeenCalled()
  })

  test('should assert method observer.on was called', () => {
    jest.spyOn(observer, 'on')
    observer.on('jest-test-event', () => {})
    expect(observer.on).toHaveBeenCalled()
  })
})

describe('Test Observer call perfect scenaries', () => {
  test('should assert result is OK', () => {
    observer.on('jest-test-event', (data) => {
      expect(data).toEqual('OK')
    })
    observer.emit('jest-test-event', 'OK')
  })

  test('should assert observer.emit 2 subscribes', () => {
    observer.on('jest-test-event-two', (data) => {
      expect(data).toEqual('OK 2')
    })

    observer.on('jest-test-event-two', (data) => {
      expect(data).toEqual('OK 2')
    })
    observer.emit('jest-test-event-two', 'OK 2')
  })
})
