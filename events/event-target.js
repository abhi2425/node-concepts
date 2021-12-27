const { getEventListeners } = require('events')
// EventTarget doest not have emit methods so only this way we can extract the listeners in EventTarget
const target = new EventTarget()

const textMe = (message) => {
  console.log('Foo Event fired with message: ', message)
}

target.addEventListener('foo', textMe, {
  capture: false, // if true will not remove the listener
})
target.addEventListener('foo', (message) => {
  console.log('test-:', message)
})

const listeners = getEventListeners(target, 'foo')

console.log({ listeners })
listeners[0]('Hey Hey!! got your fucking listeners')
listeners[1]('Hey Hey!! got your fucking listeners 2nd time')

target.removeEventListener('foo', textMe) // you can probably guess what this does!! yeah removes the mentioned listener
const newListeners = getEventListeners(target, 'foo')

console.log({ newListeners })
