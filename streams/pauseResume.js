const fs = require('fs')

const readStream = fs.createReadStream('big.txt')

readStream.setEncoding('utf8')

readStream.on(
  'data',
  ((dataRead) => {
    return (chunk) => {
      dataRead += chunk.length
      console.log('data= ' + chunk.length)
      console.log('data read= ' + dataRead)
      readStream.pause()
      setTimeout(() => {
        readStream.resume()
      }, 100)
    }
  })(0)
)

readStream.on('end', () => {
  console.log('end event')
})
