const { chdir, cwd, execPath } = require('process')

console.log(
  `Starting directory or (current working directory): ${cwd()} `, // returns command line active directory
  '\n',
  __dirname // returns directory name of the script that is being executed
)

console.log({ execPath }) //{ execPath: 'C:\\Apps\\nodejs\\node.exe' } // node executable path

try {
  //The process.chdir() method changes the current working directory of the Node.js process or throws an exception if doing so fails (for instance, if the specified directory does not exist).

  // This feature is not available in Worker threads.

  chdir('process') //New directory: D:\ComputerScience\Projects\Node_Projects\node-practice\process
  console.log(`New directory: ${cwd()}`)
} catch (err) {
  console.error(`chdir: ${err}`)
}
