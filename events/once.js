const { EventEmitter } = require('events')
class OnceEmitter extends EventEmitter {}

const onceEmitter = new OnceEmitter()

onceEmitter.on('print', (name) => {
  // Will be fired for all that have been emitted
  console.log('--------------On Event------------------')

  console.log('print-:', name)
})

onceEmitter.once('print', (name) => {
  // Will be fired only for the first that's been emitted i.e won't be fired for name="Samuel"
  console.log('--------------Once Event------------------')
  console.log('print-:', name)
})
onceEmitter.emit('print', 'Abhinav')
onceEmitter.emit('print', 'Samuel')

// const asyncIterator = OnceEmitter.on(onceEmitter, 'print')

// console.log(asyncIterator)
