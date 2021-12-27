const fs = require('fs')
const fsPromises = require('node:fs/promises')

//promises
;(async () => {
  try {
    const filehandle = await fsPromises.open('text.txt', 'r+')
    console.log(
      'File Opened Asynchronously with promises  Successfully-:',
      filehandle
    )
  } catch (error) {
    console.log(error)
  }
})()

// synchronous
try {
  const fd = fs.openSync('text.txt', 'r+')
  console.log('File Opened Synchronously Successfully-:', fd)
  fs.close(fd, () => console.log('File Closed in Sync Mode'))
} catch (error) {
  console.log(error)
}

// callback
fs.open('text.txt', 'r+', (err, fd) => {
  if (err) console.log(err)
  else {
    console.log('File Opened Asynchronously Successfully-:', fd)
    fs.close(fd, () => console.log('File Closed in Async Mode'))
  }
})
