const fs = require('fs')
const fsPromises = require('fs/promises')

const abort = new AbortController() // for aborting any async process

//callback
fs.readFile(
  'text.txt',
  { encoding: 'utf8', flag: 'r', signal: abort.signal }, //also this arg can be simply encoding:string
  (err, content) => {
    if (err) return console.error('callback err:', err.message)
    console.log('Content Read Asynchronously using callback:', content)
  }
)

// synchronous
try {
  const content = fs.readFileSync('text.txt', {
    encoding: 'utf-8',
    flag: 'r',
  })

  console.log('Content Read Synchronously:', content)
} catch (error) {
  console.log(error.message)
}

//promises
;(async () => {
  try {
    const content = await fsPromises.readFile('text.txt', {
      encoding: 'utf-8',
      flag: 'r',
      signal: abort.signal,
    })
    console.log('Content Read Asynchronously using promises:', content)
  } catch (error) {
    console.log('promise error:', error.message)
  }
})()

// setTimeout(() => {
//   abort.abort()
//   console.log('Abort Called')
// }, 2)
