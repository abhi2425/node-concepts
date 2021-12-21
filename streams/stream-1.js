const fs = require('fs')

// const ws = fs.createWriteStream('write.txt')
// const ws = fs.createWriteStream('write.txt', { flags: 'a', encoding: 'utf8' }) // append mode

// ws.once('open', () => {
//   ws.write('open file \n')
//   console.log('opened')
// })

//ws._write('Hello buffer', 'utf-8')   // will throw Error, should be implemented by Internal.Writable Class

// ws.on('close', () => {
//   //   ws.write('closed on close')   // will throw an error write after end if u call ws.end(()=>{})
//   console.log('fired from emitter on closed')
// })

// ws.end(() => {
//   console.log('file closed')
// })

// ws.on('error', (error) => {
//   console.log(error?.message)
// })

// process.stdin.pipe(ws)   // take input from cli and pipe it down to write.txt file

// -----------------------------------------------------------------------------------------------//

// const rs = fs.createReadStream('read.txt')
// rs.on('data', (chunk) => {
//   console.log(chunk.toString())
// process.stdout(chunk)
// })

// rs.on('end', () => {
//     // emd the writable stream here as ws.end()
// })

// rs.pipe(process.stdout) // print the data in read.txt file to the terminal

/* rs.on('data', (chunk) => {}) and rs.pipe(ws) is same but first one is using the event emitter 
  
  Consuming (event) and piping stream is technically same thing
*/

const writeStream = fs.createWriteStream('big.txt', { flags: 'a' })

// will add approx 4gb of content in file
for (let i = 0; i < 10 ** 7; i++) {
  writeStream.write(
    'Abhinav Is Great, and good thing is he does not believe it.\n \nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n \n'
  )
}

// writeStream.on('pipe', (readableStream) => {
//   console.log('piping...')
// })
// process.stdin.pipe(writeStream)   // will fire the piping event

writeStream.end(() => process.stdout.write('Ended Writing'))
