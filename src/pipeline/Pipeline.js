class Pipeline {
  constructor () {
    this.pipelines = []
  }

  pipe (callback) {
    this.pipelines.push(callback)
    return this
  }

  process (data) {
    let result = data
    return this.pipelines.map(fn => (result = fn(result))).pop()
  }
}

export default Pipeline
