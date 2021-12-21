const { Readable } = require('stream')

async function printIterator(readable) {
  for await (const chunk of readable.iterator({ destroyOnReturn: false })) {
    console.log(chunk) // 1
    break
  }

  console.log(readable.destroyed) // false

  for await (const chunk of readable.iterator({ destroyOnReturn: false })) {
    console.log(chunk) // Will print 2 and then 3
  }

  console.log(readable.destroyed) // True, stream was totally consumed
}

async function printSymbolAsyncIterator(readable) {
  for await (const chunk of readable) {
    console.log(chunk) // 1
    break
  }

  console.log(readable.destroyed) // true
}

async function showBoth() {
  await printIterator(Readable.from([1, 2, 3]))
  await printSymbolAsyncIterator(Readable.from([1, 2, 3]))
}

showBoth()
