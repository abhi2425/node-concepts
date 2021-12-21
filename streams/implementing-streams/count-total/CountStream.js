const { Writable } = require('stream')

class CountStream extends Writable {
  constructor(matchText, options) {
    super()
    Writable.call(this, options)
    this.count = 0
    this.matcher = new RegExp(matchText, 'ig')
  }
  _write(chunk, encoding, cb) {
    const matches = chunk.toString().match(this.matcher)
    const print = matches ? ['\x1b[36m%s\x1b[0m', matches] : []

    console.log(...print)

    if (matches) {
      this.count += matches.length
      this.end()
    }
    cb()
  }
  end() {
    this.emit('total', this.count)
  }
}
module.exports = CountStream
