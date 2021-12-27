const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

const callbackA = () => {
  console.log('Callback-A')
  myEmitter.removeListener('event', callbackB) // same as myEmitter.off('event',callback)
}

const callbackB = () => {
  console.log('Callback-B')
}

myEmitter.on('event', callbackA)

myEmitter.on('event', callbackB)

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event')
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event')
// Prints:
//   A
