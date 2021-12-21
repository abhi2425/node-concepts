const fs = require('fs')

fs.readFile('text.txp', { encoding: 'utf8' }, (error, data) => {
  console.log(data)
})

console.log('before read')
