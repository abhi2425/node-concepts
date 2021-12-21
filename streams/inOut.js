// process.stdin.pipe(process.stdout)
//or
const { pipeline } = require('stream')
pipeline(process.stdin, process.stdout, (err) => console.log(err))

// process.stdin.on('data', (data) => {
//   process.stdout.write(data.toString().toUpperCase())
// })

// console.log(process.argv)
