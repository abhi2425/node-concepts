const http = require('http')
const CountStream = require('./CountStream')

const countStream = new CountStream('google')

http.get('http://www.google.com', function (res) {
  res.setEncoding('utf-8')
  //   res.on('data', (chunk) => {
  //   })

  res.pipe(countStream)
})
countStream.on('total', function (count) {
  console.log('\x1b[36m%s\x1b[0m', 'Total matches:', count)
})
