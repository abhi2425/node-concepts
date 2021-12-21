const fs = require('fs')

const rs = fs.createReadStream('temp.txt')

rs.pipe(process.stdout)
