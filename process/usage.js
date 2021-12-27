const { cpuUsage, memoryUsage, resourceUsage } = require('process')

// ---------------------------------------Cpu Usage----------------------------------------------------//
const startUsage = cpuUsage()
console.log({ startUsage })

// spin the CPU for 3000 milliseconds
const now = Date.now()
while (Date.now() - now < 2000);

console.log(cpuUsage())

console.log(cpuUsage(startUsage)) // returns diff btw initial and final call
// { user: 514883, system: 11226 }

// ---------------------------------------Memory Usage----------------------------------------------------//
console.log({
  memUsage: memoryUsage(),
  rss: memoryUsage.rss(), //The Resident Set Size, is the amount of space occupied in the main memory device (that is a subset of the total allocated memory) for the process, including all C++ and JavaScript objects and code.
})

// ---------------------------------------Resource Usage----------------------------------------------------//

console.log({
  resourceUsage: resourceUsage(),
})
