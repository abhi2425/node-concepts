const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.once('log', (message) => console.log('log once-:', message))
emitter.once('log', (message) =>
  console.log('log once but different-:', message)
)

// returns Array of functions to particular "event name" but does not have wrapper like for "once"
const listeners = emitter.listeners('log')
console.log({ listeners }, 'count-:', emitter.listenerCount('log')) // (1)

// Logs "log once and print" to the console and they won't remove the "once listener" as they are retrieved from listeners() not rawListeners() so they don't carry the "once" wrapper

listeners[0]('and print, index-0\n')
listeners[1]('and print, index-1\n')

// emitter.emit('log') // if this line is uncommented then the "emit" will remove both the 'once' listeners after executing, so the next time when listenersCount() is called it will show 1 instead of 3 as total listener attached to that event.

/*----------------------------------------------------------------------------------------------------------------------- */

emitter.on('log', (message) => console.log('log persistently-:', message))

// returns Array of functions to particular "event name" but also with wrapper like for "once"
const newListeners = emitter.rawListeners('log')
console.log({ newListeners }, 'count-:', emitter.listenerCount('log'))

// will remove the first "once" listener after executing and now count is 2
newListeners[0]('print newListeners and remove-index-0')

// will remove the first "once" listener after executing and now count is 1
newListeners[1]('print newListeners and remove-index-1')

emitter.emit('log') // now when this is fired only 1 listener is attached that is "on"

console.log('\n')

console.log(
  { left: emitter.rawListeners('log') },
  'count-:',
  emitter.listenerCount('log')
)

console.log('\n')

emitter.emit('log', { hello: 'bye' })
