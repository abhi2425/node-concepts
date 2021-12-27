const fs = require('fs')

fs.readFile('text.txp', { encoding: 'utf8' }, (error, data) => {
  console.log(data)
})

console.log('before read')

// class Solution {
//   static matchPairs(nuts = [''], bolts = [''], n) {
//     const _nuts = [],
//       _bolts = []
//     for (const nut of nuts) {
//       for (const bolt of bolts) {
//         if (nut === bolt) {
//           _nuts.push(nut)
//           _bolts.push(nut)
//         }
//       }
//     }

//     console.log({ _bolts, _nuts })
//   }
// }

// Solution.matchPairs(['@', '%', '$', '#', '^'], ['%', '@', '#', '$', '^'])
