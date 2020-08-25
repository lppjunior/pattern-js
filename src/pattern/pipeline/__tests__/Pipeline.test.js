import Pipeline from '../Pipeline'

describe('Test Pipeline call all methods', () => {
  const pipeline = new Pipeline()

  test('should assert method pipeline.pipe was called', () => {
    jest.spyOn(pipeline, 'pipe')
    pipeline.pipe(() => {})
    expect(pipeline.pipe).toHaveBeenCalled()
  })

  test('should assert method pipeline.process was called', () => {
    jest.spyOn(pipeline, 'process')
    pipeline.process(() => {})
    expect(pipeline.process).toHaveBeenCalled()
  })
})

describe('Test Pipeline call perfect scenaries', () => {
  const result = (new Pipeline())
    .pipe((data) => {
      test('Data should be 5', () => {
        expect(data).toBe(5)
      })

      return data + 5
    })
    .pipe((data) => {
      test('Data should  be 10', () => {
        expect(data).toBe(10)
      })

      return data * 2
    })
    .process(5)

  test('Result should be 20', () => {
    expect(result).toBe(20)
  })
})
