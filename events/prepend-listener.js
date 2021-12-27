const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.once('message', (message) =>
  console.log('Once Event message-:', message)
)

emitter.prependOnceListener(
  'message',
  (message) => console.log(`Prepend Once Listener message-:`, message) //(2) will run only "once" at start before 'on' is fired
)
emitter.on('message', (message) => console.log('On message:-', message, '\n'))

emitter.prependListener('message', (message) => {
  console.log('Prepend listener message-:', message) //(1) will run before 'on' is fired "every time"
  // emitter.emit('message', 'From Prepend Listener')  // exceeds max stack size and it's quite obvious why does it so.
})

emitter.emit('message', 'Hello Bastards')
emitter.emit('message', 'How r u')
emitter.emit('message', 'Peaky Blinders ghost is haunting me')
