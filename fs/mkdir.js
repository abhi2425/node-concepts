const fs = require('fs')
const fsPromises = require('node:fs/promises')

//callback
fs.mkdir('mkdirCall', { mode: 0o776 }, () => {
  console.log('Directory Created asynchronously using callback')
})

//synchronously
try {
  fs.mkdirSync('mkdirSync', { mode: 0o776, recursive: true })
  console.log('Directory created synchronously')
} catch (error) {
  console.log(error)
}

//promises
;(async () => {
  try {
    await fsPromises.mkdir('mkdirAsync')
    console.log('Directory created asynchronously using promises')
  } catch (error) {
    console.log(error)
  }
})()
