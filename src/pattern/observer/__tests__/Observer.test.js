import Observer from '../Observer'


describe('Test Observer', () => {

  test('should assert result is OK', () => {
    const observer = new Observer()
    observer.on('jest-test-event', (data) => {
        expect(data).toEqual('OK')
    })
    observer.emit('jest-test-event', 'OK')
  })

  test('should assert observer.emit be called', () => {
    const observer2 = new Observer()

    jest.spyOn(observer2, 'emit')

    observer2.on('jest-test-event', () => {})
    observer2.on('jest-test-event', () => {})
    observer2.emit('jest-test-event', 'OK')

    expect(observer2.emit).toHaveBeenCalled()
  })
})
