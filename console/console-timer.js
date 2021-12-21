console.time('print')
for (let i = 0; i < 10 ** 6; i += 1) {
  if (i >= 10000) {
    console.timeLog('print', i)
    break
  }
}

console.timeEnd('print')
console.timeStamp('timeStamp')
//This method does not display anything unless used in the inspector. Adds an event with the label to the Timeline panel of the inspector.
