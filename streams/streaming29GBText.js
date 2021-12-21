const net = require('net')
const fs = require('fs')
const { pipeline } = require('stream')
const tcpServer = net.createServer()

tcpServer.on('connection', (socket) => {
  const rs = fs.createReadStream('big.txt')
  rs.setEncoding('utf8')
  //   rs.pipe(socket)
  // or
  // Better way of wring the stream is to use pipeline prevents memory leaks
  pipeline(rs, socket, (err) => console.log(err))
})

tcpServer.listen(8000)
