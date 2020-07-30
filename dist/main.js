function runExample () {
  testObserver()
}

function testObserver () {
  const observer = new Observer()
  observer.on('test', (data) => console.log(data))
  observer.on('test', (data) => console.log('Test 2 > ', data))
  observer.emit('test', { status: 'Observer emit successful' })
}

document.addEventListener('DOMContentLoaded', runExample, false)
