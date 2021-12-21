// Creating Custom Console Logger

// const { Console } = require('console')
const { Console } = console // either way can work
const { createWriteStream } = require('fs')
const path = require('path/win32')
const logStream = createWriteStream(path.join(__dirname, 'log.txt'))
const errStream = createWriteStream(path.join(__dirname, 'err.txt'))

const myConsole = new Console(logStream, errStream) // write stream is mandatory to provide

const data = [
  {
    date: new Date(),
    timestamp: new Date().getTime(),
    data: [1, 2, 3, 4, 5, 6],
    oneField: JSON.stringify({ a: 'hello', b: 'bye', c: 'fuck off' }),
  },
  {
    date: new Date(0),
    timestamp: new Date().getTime(),
    data: [1, 2, 3, 6, 'hello'],
  },
]
const obj = {
  a: 'hello',
  b: 'bye',
}
myConsole.log('Will Print on my logs')
myConsole.error('will print in my error log')
myConsole.table(['1', '2'])
myConsole.table(data)
myConsole.table(data, ['data'])
myConsole.table(obj)

myConsole.trace(obj) // will print the stack trace in error log
