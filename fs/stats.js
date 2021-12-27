const fs = require('fs')
const fsPromises = require('fs/promises')
const { promisify } = require('util')

// const stats = new fs.Stats() //This is the Object Type returned from stat, lstat and fstat and their synchronous counterparts

// callback
fs.stat('text.txt', (err, stats) => {
  if (err) console.log(err)
  console.log('Stats by async using callback-:', stats)
})

//synchronous
try {
  const stats = fs.statSync('text.txt')
  console.log('Stats by sync method-:', stats)
} catch (error) {
  console.log(error)
}

//promise
;(async () => {
  try {
    const stats = await fsPromises.stat('text.txt')
    console.log('Stats by async using promises-:', stats)
  } catch (error) {
    console.log(error)
  }
})()

// fs.fstat(fd,(err,stats)=>{})  // same as fs.stat()  -> but it takes file descriptor in place of file path or name

// fs.fstatSync(fd,options)  // same as fs.statSync()  -> but it takes file descriptor in place of file path or name

// fsPromises.fstat()  --> not present in promises but we can use promisify
// ;(async () => {
//   try {
//  const fstat = promisify(fs.fstat)
//     const filehandle = await fsPromises.open('text.txt', 'r')
//     const stats = await fstat(filehandle.fd)
//     console.log(
//       'Stats using file descriptor by async using promisify -:',
//       stats
//     )
//   } catch (error) {
//     console.log(error)
//   }
// })()
