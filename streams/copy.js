const fs = require('fs')

const rs = fs.createReadStream('read.txt')

const ws = fs.createWriteStream('read-copy.txt')

rs.pipe(ws)
// or
// rs.setEncoding('utf-8')
// rs.on('data', (chuck) => {
//   ws.write(chuck)
// })

// rs.on('end', () => {
//   ws.end()
// })
