# Observer Pattern
The Observer pattern is powerfull resource to emit and receive notifications.

**Class structure**
```js
class Observer() {
    on(event: string, callback: function)
    emit(event: string, data: object)
}
```

## Example

```js
  const observer = new Observer()

  observer.on('test', (data) => console.log(data)) // result: Observer emit successful
  observer.on('test', (data) => console.log('Test 2 > ', data)) // result: Test 2 > Observer emit successful

  observer.emit('test', { status: 'Observer emit successful' })
```
