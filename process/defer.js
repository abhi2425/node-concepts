console.log('Start') // (1)

setImmediate(() => console.log('immediate')) // (7)

setTimeout(() => console.log('timeout'), 0) // (6)
const timer = setInterval(() => {
  console.log('interval') // before setImmediate but depends on setTimeout position if placed after then after "timeout" or vice-versa
  clearInterval(timer)
})

Promise.resolve().then(() => console.log('Promise')) // (4)  // Promise have more priority that timeouts and queueMicroTask

process.nextTick(() => console.log('Next Tick')) // (3)   // event queue will place this at First(Top) => (to enter in v8 stack for execution) for next cycle of loop

queueMicrotask(() => console.log('Queue MicroTask')) // (5)

process.on('beforeExit', (code) => console.log(`Before Exit code-: ${code}`)) //(8)

process.on('exit', (code) => console.log(`Process Exit with code-: ${code}`)) //(9)

console.log('end') // (2)
