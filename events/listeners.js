const EventEmitter = require('events')

const eventEmitter = new EventEmitter()
const sym = Symbol('symbol')

eventEmitter.once('foo', () => {})
eventEmitter.on('foo', (message) => {
  console.log(message)
}) // same as eventEmitter.addListener('foo', () => {})
eventEmitter.on('foo', (message) => {
  console.log(message)
}) // same as eventEmitter.addListener('foo', () => {})
eventEmitter.on('bar', () => {})
eventEmitter.on(sym, () => {})

console.log(eventEmitter.getMaxListeners()) //Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or defaults to defaultMaxListeners .

eventEmitter.setMaxListeners(2)
console.log(eventEmitter.getMaxListeners())

console.log(eventEmitter.listenerCount('foo')) // 2 listeners attached for "foo" event
console.log(eventEmitter.listeners('foo')) // [func, func]
// console.log(EventEmitter.getEventListeners(eventEmitter,'foo')); // [func, func] --> same as above log

// eventEmitter.emit('foo', 'hello')
// eventEmitter.emit('foo', 'bye')
