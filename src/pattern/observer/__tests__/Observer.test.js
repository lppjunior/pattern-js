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

  test('should assert method observer.checkParam was called', () => {
    jest.spyOn(observer, 'checkParam')
    observer.checkParam('event', 'a')
    expect(observer.checkParam).toHaveBeenCalled()
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

describe('Test Observer call wrong observer.on', () => {

  test('should assert is observer.on', () => {
    expect(() => observer.on(null, () => {})).toThrow(Error)
    expect(() => observer.on(1, () => {})).toThrow(Error)
    expect(() => observer.on(null, () => {})).toThrow(Error)
    expect(() => observer.on(undefined, () => {})).toThrow(Error)
    expect(() => observer.on('a', '')).toThrow(Error)
    expect(() => observer.on('a', null)).toThrow(Error)
    expect(() => observer.on('a', undefined)).toThrow(Error)
    expect(() => observer.on('a', 123)).toThrow(Error)
  })

  test('should assert observer.emit be called', () => {
    observer.on('test-emit-with-error', () => {})
    expect(() => observer.on(null, () => {})).toThrow(Error)
    expect(() => observer.on(1, () => {})).toThrow(Error)
    expect(() => observer.on(null, () => {})).toThrow(Error)
    expect(() => observer.on(undefined, () => {})).toThrow(Error)
  })

  test('should assert is observer.checkParam', () => {
    expect(() => observer.checkParam('notExists', '1')).toThrow(Error)
    expect(() => observer.checkParam(null, () => {})).toThrow(Error)
    expect(() => observer.checkParam(1, () => {})).toThrow(Error)
    expect(() => observer.checkParam(null, () => {})).toThrow(Error)
    expect(() => observer.checkParam(undefined, () => {})).toThrow(Error)
  })
})

