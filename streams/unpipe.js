const fs = require('fs')

const rs = fs.createReadStream('big.txt')
const ws = fs.createWriteStream('output.txt')

ws.on('pipe', (source) => {
  console.log('pipe event fired')
  console.log(source === rs)

  setTimeout(() => {
    rs.unpipe(ws) // unpipe (do not write to output.txt) after 20sec
    ws.end()
  }, 20000)
})

rs.pipe(ws) // will fire the pipe event on ws
