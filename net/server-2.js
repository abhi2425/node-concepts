const net = require('net')

const TcpServer = new net.Server()

TcpServer.on('connection', (socket) => {
  console.log(
    `Clint Connected with port ${socket.remotePort} address ${socket.remoteAddress}`
  )

  socket.on('data', (data) => {
    console.log('client sent', data.toString())
    socket.write('You Sent-: ' + data)
  })
})

TcpServer.listen(3000, () => {
  console.log(`Server Listening On Port`, 3000)
})
