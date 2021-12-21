const fs = require('fs')

const readStream = fs.createReadStream('read.txt')

readStream.setEncoding('utf8')

const dataEventHandler = (chunk) => {
  console.log(chunk.length)
}

readStream.on('data', dataEventHandler)

readStream.on('end', () => {
  console.log('no more data to read')
})
