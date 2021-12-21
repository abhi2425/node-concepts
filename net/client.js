const net = require('net')
const port = 1234,
  host = 'localhost'

// Other ways of creating Socket Clients
// const client2 = net.connect(port,host)  // net.connect({port,host})
// const client3 = net.createConnection(port, host, () => {
//   console.log('Connected')
// })

const client = new net.Socket()

client.connect(port, host, () => {
  // const obj = {
  //   id: '9823yi2534532476r',
  //   clientAddress: client.address(),
  // }
  // client.write(JSON.stringify(obj))
  client.write('Hello everyone')
  console.log(client.address())
  console.log(client.listeners('message'))
})

client.on('data', (data) => {
  console.log(data.toString())
})

client.on('close', () => {
  client.write('fuck u Server')
})

client.on('error', (err) => {
  console.log(err)
})
