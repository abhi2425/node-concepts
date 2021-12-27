const EventEmitter = require('events')

class OnEmitter extends EventEmitter {}

const onEmitter = new OnEmitter()

// same as onEmitter.addEventListener('name',func)
onEmitter.on('newListener', (event, listener) => {
  // event name can be string or Symbol()
  console.log('New listener added with name-:', event)
  console.log('listener-:', listener)
})

onEmitter.on('event', (data) => {
  //   console.log(this)   // -> {}
  console.log('an event occurred!')
  console.log(data)
})

console.log('---------------------')
onEmitter.emit('event', { message: 'hello' })
console.log('---------------------')
onEmitter.emit('event', { message: 'bye' })
console.log('---------------------')
onEmitter.emit('event', 'func off')
