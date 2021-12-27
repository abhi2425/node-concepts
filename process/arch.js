//The operating system CPU architecture for which the Node.js binary was compiled. Possible values are: 'arm', 'arm64', 'ia32', 'mips','mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'.
console.log(`This processor architecture is ${process.arch}`)

console.log('Platform-:', process.platform)

console.log('release', process.release)
