process.on('warning', (warning) => {
  console.warn(warning, '-warning')
})

process.emitWarning('I warned U bastard' || new Error(' I warned U bastard'))
