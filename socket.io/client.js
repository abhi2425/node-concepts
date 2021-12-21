const client = require('socket.io-client')

const io = client.io('http://localhost:1234')

io.on('connection', (data) => {
  console.log('I am client')
  console.log(data)
})

io.emit('message', { name: 'Client', data: 'Fuck u server' })

io.on('message', (data) => {
  console.log(`This reply from server-:`, data)
})
