const net = require('net')
const tcpServer = net.createServer()

tcpServer.on('connection', (socket) => {
  /* ----------------------------------*/

  socket.on('data', (data) => {
    socket.emit('message', data.toString())
    tcpServer.emit('message', data, socket.remotePort)
  })

  /* ----------------------------------*/

  //  Custom Event it will be send to only the socket that is connected at a time
  socket.on('message', (data) => {
    console.log(data, socket.remotePort)
    // socket.write(data)
  })

  socket.on('close', () => {
    console.log('Connection Closed', `Port-: ${socket.remotePort}`)
    tcpServer.emit('message', 'Left the chat room \t \n', socket.remotePort)
  })

  socket.on('error', (error) => console.log(error))

  tcpServer.getConnections((err, count) =>
    console.log(count, 'Numbers of Connection')
  )

  // console.log(socket.bytesWritten, 'bytes written to client')
  // console.log(socket.address(), 'Server Address')
  // console.log(
  //   { address: socket.remoteAddress(), port: socket.remotePort() },
  //   'client Address'
  // )
  // console.log(tcpServer.listeners('message'))
  // console.log(socket.listeners('message'))

  // When Client joins the Server
  tcpServer.emit('message', 'joined the chat room \t', socket.remotePort)

  // Custom Event -> It will broadcast to all the clients connected to Tcp Server
  tcpServer.on('message', (data, port) => {
    if (socket.remotePort !== port) {
      // Don't send the same message to the client which has broadcasted the message
      socket.write(`Message from port-: ${port}, ${data} \t \n`)
      console.log('if', socket.remotePort, port)
    } else {
      console.log('else', socket.remotePort, port)
      socket.write('Message Sent! \n')
    }
  })
})

tcpServer.listen(1234, () => {
  console.log('tcpServer listening on port', 1234)
})
