const fs = require('fs')

const readStream = fs.createReadStream('big.txt')

readStream.setEncoding('utf8')

const readEventCount = 0

readStream.on('data', function (chunk) {
  console.log(chunk)
  readEventCount++
})

// count the total number of bytes read
readStream.on('end', function () {
  console.log('no more data to read')
  console.log(readEventCount)
  // or
  console.log('Prop used, read Bytes are', readStream.bytesRead)
})
