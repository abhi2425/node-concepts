const fs = require('fs')

const rs = fs.createReadStream('input.txt')
const ws = fs.createWriteStream('output.txt')

rs.pipe(ws)
