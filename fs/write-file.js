const fs = require('fs')
const fsPromises = require('node:fs/promises')

// callback
const data = '\nThis is writing asynchronously using callback function\n'
fs.writeFile('write.txt', data, { flag: 'a' }, (err) => {
  // same as fs.appendFile()
  if (err) return console.error(err)
  console.log('Data written asynchronously using callback')
})

//synchronous
try {
  const _data = '\nThis is writing synchronously \n'
  fs.writeFileSync('write.txt', _data, { flag: 'a' }) // same as-> fs.appendFileSync()
  console.log('Data written synchronously ')
} catch (error) {
  console.log(error)
}

// promises
;(async () => {
  try {
    const data = '\nThis is writing asynchronously using promises\n'
    await fsPromises.writeFile('write.txt', data, { flag: 'a' }) // same as -> fsPromises.appendFile()
    console.log('Data written asynchronously using promises')
  } catch (error) {
    console.log(error)
  }
})()
