# pattern-js

Pattern js was created to supply the need to centralize all types of patterns that i will use in my projects.

See many characteristics of this library:
- All pattern hav 100% coverage unity tests and confiability.
- Use 100% native javascript to write this code

| Available Patterns       |
|--------------------------|
| [Observer](Observer)     |
| [Middleware](Middleware) |

## Observer
The instance (or model) maintains a collection of objects (observers) and will notify them of any changes in their state.

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

## Middleware
A single implementation of Middleware pattern

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
    param1 = 'param 1 UPDATED'
    console.log('Execution 1', param1, param2, param3)
    next()
  })

  middleware.use((param1, param2, param3, next) => {
    console.log('Execution 2', param1, param2, param3) // param1 = 'param 1 UPDATED'
    next()
  })

  middleware.process('param 1', 'param 2', 'param 3')
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/lppjunior/pattern-js/tags).

## Authors

* **Luiz Paulo** - *Total project development* - [Github](https://github.com/lppjunior) | [Site](http://lppjunior.com) | [Instagram](https://instagram.com/lppjunior)

## Project Updates

See the [CHANGELOG](CHANGELOG.md) for all version update details

## References

Here are some documents that can help you:

* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [ES6](http://es6-features.org/)
* [standard](https://standardjs.com/)
* [Eslint](https://eslint.org/)
* [jest](https://jestjs.io/)
* [babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
