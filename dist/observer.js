function runExample () {
  testObserver()
}

function testObserver () {
  console.log('[observer] ', 'test')
  const observer = new Observer()
  observer.on('test', (data) => console.log('[observer] ', data))
  observer.on('test', (data) => console.log('[observer] ', 'Test 2 > ', data))
  observer.emit('test', { status: 'Observer emit successful' })
}

document.addEventListener('DOMContentLoaded', runExample, false)
