const net = require('net')

const sockets = []

const tcpServer = net.createServer()

tcpServer.on('connection', (socket) => {
  console.log('connection established')

  socket.setEncoding('utf8')

  sockets.push(socket)

  socket.on('data', (data) => {
    console.log(data)

    const clients = sockets.length

    for (const i = 0; i < clients; i++) {
      if (sockets[i] === socket) continue
      sockets[i].write(data)
    }
  })

  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1)
  })
})

tcpServer.listen(8000)
