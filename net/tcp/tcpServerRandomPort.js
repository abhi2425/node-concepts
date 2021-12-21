const net = require('net')

const tcpServer = net.createServer((socket) => {
  console.log('connection established....')

  socket.on('end', () => {
    console.log('server disconnected..')
  })

  socket.on('data', (data) => {
    console.log('data received from the tcp client')
    socket.write('Server Reply: ' + data)
  })
})

tcpServer.listen(() => {
  const port = tcpServer.address().port
  console.log('server started listening on port: ' + port)
})
