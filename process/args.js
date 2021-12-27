const { argv, argv0, execArgv } = require('process')

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`) /*
output-:
0: C:\Apps\nodejs\node.exe
1: D:\ComputerScience\Projects\Node_Projects\node-practice\process\argv.js
2: -flag-1
3: hello
4: 123
5: 567
*/
})

console.log(argv)

console.log(argv0) // node

console.log(execArgv) // ['--trace-warnings']  returns args specified to node and is not included in argv array

// run script as node --trace-warnings argv.js -flag-1 hello 123 567
