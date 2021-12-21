const fs = require('fs')

const readStream = fs.createReadStream('big.txt')
//non flowing mode

//make it flowing
readStream.resume()

readStream.on('end', function () {
  console.log('end event')
})
