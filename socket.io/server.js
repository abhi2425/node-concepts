import { Server } from 'socket.io'
import http from 'http'

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('okay')
})

// httpServer.on('connection', (socket) => {
//   console.log('someone connected')
// })
const ChatServer = new Server(httpServer)

ChatServer.on('connection', (socket) => {
  console.log('someone Connected-->')

  socket.write('hello world')

  socket.on('message', (dataFromClient) => {
    console.log({ dataFromClient })
  })

  socket.emit('message', { name: 'server', data: 'fuck you client' })
})

httpServer.listen(1234, () => console.log('server listening at', 1234))
