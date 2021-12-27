import fs from 'fs'
import fsPromises from 'fs/promises'
import { promisify } from 'util'

const { fd } = await fsPromises.open('text.txt', 'a')

// All three codes are executing on same file so on closing the file in any code division will throw an error for other codes while closing the same file that's already open been closed.

//synchronous
try {
  console.log('----------Synchronously-----------')
  const text = '\nThis is a string that is writing synchronously \n'
  const buffer = Buffer.alloc(text.length, text)
  const bytesWritten = fs.writeSync(fd, buffer)
  console.log({ bytesWritten })
} catch (error) {
  console.log(error)
} finally {
  //   fs.close(fd, () => console.log('File closed Synchronously'))
  // If above line is uncommented then it will throw an error on line-21 coz file will be closed due to execution of this line so when line-21 is executed it will receive a bad or illegal file descriptor and will throw an error
}

// promise
;(async () => {
  try {
    console.log('----------Promise-----------')
    const write = promisify(fs.write)
    const text =
      '\nThis is a string that is writing asynchronously using promises \n'
    const buffer = Buffer.alloc(text.length, text)
    const result = await write(fd, buffer, 0, buffer.length, 0) //
    console.log({ ...result, buffer: result.buffer.toString() })
  } catch (error) {
    console.log(error)
  } finally {
    fs.close(fd, () => console.log('File closed Promise'))
  }
})()

//callback
fs.open('text.txt', 'a', (error, fd) => {
  console.log('----------Callback-----------')

  if (error) return console.error(error.message)
  const text =
    '\nThis is a string that is writing asynchronously using callbacks \n'
  const buffer = Buffer.alloc(text.length, text)

  fs.write(fd, buffer, 0, buffer.length, 0, (err, bytesWritten, buffer) => {
    // offset-> from where in buffer you would like to start writing,
    // length -> how much byte of buffer you want to write,
    // position -> from which position you want to start writing the buffer
    if (err) return console.log(err)
    console.log({ bytesWritten, buffer: buffer.toString() })
  })
  //   fs.close(fd, () => console.log('File closed Callback'))
})
