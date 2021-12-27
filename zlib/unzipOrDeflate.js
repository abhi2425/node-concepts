const { deflate, unzip } = require('zlib')

const input = '.................................'
deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err)
    process.exitCode = 1
  }
  console.log(buffer.toString('base64'))
})

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64')
unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err)
    process.exitCode = 1
  }
  console.log(buffer.toString())
})

// Or, Promisified

const { promisify } = require('util')
const do_unzip = promisify(unzip)

do_unzip(buffer)
  .then((buf) => console.log(buf.toString()))
  .catch((err) => {
    console.error('An error occurred:', err)
    process.exitCode = 1
  })
