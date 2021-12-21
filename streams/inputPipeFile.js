const fs = require('fs')

const ws = fs.createWriteStream('out.txt')

process.stdin.pipe(ws)
