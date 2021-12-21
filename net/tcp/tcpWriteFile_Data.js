const fs = require('fs')
const net = require('net')

const tcpServer = net.createServer()

tcpServer.on('connection', (socket) => {
  console.log('connection established')

  socket.on('data', (data) => {
    fs.appendFile('data.txt', data, (error) => {
      console.log('data written')
    })
  })
})

tcpServer.listen(8000)
