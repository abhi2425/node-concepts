const process = require('process')
const fs = require('fs')
// comment out line 4-17 you will get what it does
process.on('uncaughtException', (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  )
})

process.on('uncaughtException', (err, origin) => {
  setTimeout(() => console.log('\nhello'), 700)
})

setTimeout(() => {
  console.log('\nThis will still run.')
}, 500)

console.log('will it run ??')

// Intentionally cause an exception, but don't catch it.
nonexistentFunc()
console.log('This will not run.')
