const fs = require('fs')
const fsPromises = require('fs/promises')
const { promisify } = require('util')

fs.open('text.txt', 'r', async (err, fd) => {
  const { size } = await fsPromises.stat('text.txt')
  const buffer = Buffer.alloc(size)

  //callback
  fs.read(fd, buffer, 0, size, 0, (err, bytesRead, buffer) => {
    if (err) return console.log(err)
    console.log('Bytes read async using callback-::', bytesRead)
    console.log(buffer.toString('utf-8'))
  })

  //synchronous
  const bytesRead = fs.readSync(fd, buffer, 0, size, 0)
  console.log('Bytes read synchronously::', bytesRead)

  // promises
  const read = promisify(fs.read)
  const result = await read(fd, buffer, 0, size, 0)
  console.log('Bytes read async using promises-::', result.bytesRead)
  console.log(result.buffer.toString('utf-8'))

  fs.close(fd, () => console.log('Files closed async'))
})
