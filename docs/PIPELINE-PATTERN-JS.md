# Pipeline Pattern
The pipeline pattern make a execution queue passing processed result to next step.

**Class structure**
```js
class Pipeline() {
    pipe(callback: function)
    process(data: object)
}
```

## Example

```js
  const result = (new Pipeline())
    .pipe((data) => data + 5)
    .pipe((data) => data * 20)
    .pipe((data) => data / 2)
    .process(5) // result 100

```
