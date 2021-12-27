import { setInterval as setIntervalPromise } from 'timers/promises'

//------------------------------------Promise--------------------------------------//
console.log(
  '------------------------------------Promise-------------------------------------'
)

// blocking code
for await (const startTime of setIntervalPromise(100, Date.now())) {
  const now = Date.now()
  console.log(now)
  if (now - startTime > 1000) break
}
console.log('Date-->', Date.now())

//------------------------------------Callback--------------------------------------//
console.log(
  '------------------------------------Callback-------------------------------------'
)

// non-blocking code
const startTime = Date.now()
const timer = setInterval(() => {
  let now = Date.now()
  console.log(now)
  if (now - startTime > 1000) clearInterval(timer)
}, 100)

console.log('Date-->', Date.now())
