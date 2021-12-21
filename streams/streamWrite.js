const fs = require('fs')
const ws = fs.createWriteStream('test')

const isDrained = ws.write('some data', 'utf8', () => {
  console.log('write is done')
})
console.log(isDrained) // returns boolean for the completion of writing the stream
