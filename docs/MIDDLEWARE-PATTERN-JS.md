# Middleware Pattern
The Middleware standard creates an execution queue where a step has the power to call the next step or interrupt the execution

**Class structure**
```js
class Middleware() {
    use(callback: function)
    process(...data: object)
}
```

## Example

```js
  const middleware = new Middleware()

  middleware.use((param1, param2, param3, next) => {
    console.log('Execution 1', param1, param2, param3)

    if ( param1 !== 'param 1') {
      throw new Error('Param 1 is incorrect')
    }

    next()
  })

  middleware.use((param1, param2, param3, next) => {
    console.log('Execution 2', param1, param2, param3)

    next()
  })

  middleware.process('param 1', 'param 2', 'param 3')
```
