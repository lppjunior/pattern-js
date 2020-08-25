function testPipeline () {
  const result = (new Pipeline())
    .pipe((data) => {
      console.log('[pipeline] ', data + ' + ' + 5)
      return data + 5
    })
    .pipe((data) => {
      console.log('[pipeline] ', data + ' * ' + 3)
      return data * 3
    })
    .pipe((data) => {
      console.log('[pipeline] ', data + ' + ' + 150)
      return data + 150
    })
    .process(5)

  console.log('[pipeline] result: ', result)
}

document.addEventListener('DOMContentLoaded', testPipeline, false)
