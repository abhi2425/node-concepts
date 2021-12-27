import { setImmediate } from 'timers/promises'
const result = await setImmediate('immediately')

console.log(result)
