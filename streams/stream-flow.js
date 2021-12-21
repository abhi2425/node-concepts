const { Readable } = require('stream')
const fs = require('fs')

const rs = fs.createReadStream('ppt/ppt.content.txt')
const ws = fs.createWriteStream('ppt.contents.txt')
rs.setEncoding('utf8')
rs.on('data', (chunk) => {
  ws.write(chunk)
  console.log(rs.bytesRead / 1000)
})

ws.on('drain', () => {
  console.log('drained')
})

// ws.on('pipe', (readable) => {
//   console.log('piping')                // won't be fired if data event is present
// })

rs.on('end', () => {
  console.log('reading finished /end')
})
rs.on('close', () => {
  console.log('reader closed')
})

ws.on('close', () => {
  console.log('writer closed')
})

ws.on('finish', () => {
  console.log(' writing finished')
})
// rs.destroy() // rs.on('close') will run after destroyed
// ws.destroy() // ws.on('close') will run after destroyed

ws.end(() => {
  console.log('end event fired')
})

// readStream.setEncoding('utf-8')
// readStream.pipe(ws)

// readStream.on('data', (chunk) => {
//   console.log(chunk)
// })

// fs.unlink('array.txt', (error) => {})
