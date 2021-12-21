const fs = require('fs')

const rs = fs.createReadStream('big.txt')
const ws = fs.createWriteStream('big-copy.txt')

rs.pipe(ws, { end: false })

// end event in readStream
rs.on('end', () => {
  console.log('end event read stream')
  ws.end('Add New Something before ending')
})

// there if finish event in writeStream no end event
ws.on('finish', () => {
  console.log('finish event write stream')
})
