const process = require('process')

//The 'beforeExit' event is emitted when Node.js empties its event loop and has no additional work to schedule.
//The 'beforeExit' event is not emitted for conditions causing explicit termination, such as calling process.exit() or uncaught exceptions.

process.on('beforeExit', (code) => {
  console.log('------------------------')
  console.log('Process beforeExit event with code: ', code)
  console.log('------------------------')
  process.exitCode = 1 // changing exitCode

  // In Worker threads, this function (process.exit()) stops the current thread rather than the current process
  //   process.exit(1)
})

//Executed when the Node.js event loop no longer having any additional work to perform.
// The 'exit' event should be defined before the explicit process.exit() to get executed
// will not be executed for uncaught exceptions
process.on('exit', (code) => {
  // this callback should perform synchronous operation other wise async action won't be executed ever
  console.log('Process exit event with code: ', code)
})

process.on('exit', (code) => {
  //   setTimeout(() => {
  //     console.log('This will not run')
  //   }, 0)
  console.log('2nd exit event-:', code)
})

console.log('This message is displayed first.')

const raiseExp = () => {
  //   throw new Error('Exception')
}

raiseExp()
// process.exit(0)  // '0' means successFull execution of program, "1" means unsuccessful execution
