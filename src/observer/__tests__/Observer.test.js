import Observer from '../Observer'

describe('Observer', () => {
  const observer = new Observer()

  describe('Test existance of all public methods and attributes', () => {
    test('should assert than Observer has been defined', () => {
      expect(observer).toBeDefined()
    })

    test('should assert than on method has been defined', () => {
      expect(observer.on).toBeDefined()
    })

    test('should assert than emit method has been defined', () => {
      expect(observer.emit).toBeDefined()
    })

    test('should assert than addEvent method has been defined', () => {
      expect(observer.addEvent).toBeDefined()
    })
  })

  describe('Test Observer call methods', () => {
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
})
