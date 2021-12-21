const fs = require('fs')
const stream = require('stream')
const rs = fs.createReadStream('read.txt')
const ws = fs.createWriteStream('write.txt', { flags: 'a' })
const { promisify } = require('util')

ws.on('pipe', (source) => {
  console.log('pipe event fired')
  console.log(source === rs)
})

// rs.pipe(ws)

stream.pipeline(rs, ws, (err) => {
  console.log(err)
})
