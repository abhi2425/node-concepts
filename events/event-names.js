// const EventEmitter= require('events')
// const EventEmitter = require('events').EventEmitter
// const {EventEmitter} = require('events')
const { EventEmitter } = require('events').EventEmitter

// All of the require statements are correct

const myEE = new EventEmitter()
const sym = Symbol('symbol')

const cb = () => {}

myEE.on('foo', cb)
myEE.on('foo', cb)
myEE.on('bar', cb)
myEE.on(sym, cb)

// console.dir(myEE.eventNames(), {
//   showHidden: true,
// })

console.log(myEE.eventNames()) // Prints: [ 'foo', 'bar', Symbol(symbol) ]

myEE.removeAllListeners('foo')
myEE.removeListener('bar', cb)
myEE.removeListener(sym, cb)
