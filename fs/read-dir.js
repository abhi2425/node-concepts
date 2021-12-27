const fs = require('fs')
const fsPromises = require('node:fs/promises')

//callback
fs.readdir('directory', 'utf-8', (err, files) => {
  if (err) return console.log(err.message)

  console.log('Directory Read asynchronously using callback-:')
  console.log(files)
})

//synchronously
try {
  const files = fs.readdirSync('directory', {
    encoding: 'utf-8',
  })
  console.log('Directory Read synchronously :')
  console.log(files)
} catch (error) {
  console.log(error)
}

//promises
;(async () => {
  try {
    const files = await fsPromises.readdir('directory', {
      encoding: 'base64',
    })
    console.log('Directory Read asynchronously using promises-:')
    console.log(files)
  } catch (error) {
    console.log(error)
  }
})()
