const net = require('net')

const tcpServer = net.createServer((socket) => {
  console.log('connection established....')

  tcpServer.getConnections((error, count) => {
    console.log('number of concurrent tcp connections= ' + count)
  })

  socket.on('end', () => {
    console.log('server disconnected..')
  })

  socket.on('close', () => {
    console.log('closed event on socket fired')
  })

  socket.on('data', (data) => {
    console.log('data received from the tcp client')
    socket.write('Server Reply: ' + data)
    //socket.emit('error', new Error('forcefully injected error'));
  })

  socket.on('error', (error) => {
    console.log('something wrong happpened here')
    //socket.end('socket can send some more data but it will be ended');
    socket.destroy()
  })
})

setTimeout(() => {
  tcpServer.close(() => {
    console.log('server closed')
  })
}, 60000)

// close event fired
tcpServer.on('close', () => {
  console.log('second server close event handler')
})

tcpServer.listen(() => {
  const port = tcpServer.address().port
  console.log('server started listening on port: ' + port)
})
