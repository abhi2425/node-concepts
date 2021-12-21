const { Console } = require('console')
// const { Console } = console // either way can work

// const myConsole = new Console()
const arr = new Array(7).fill('hello').map((str) => console.count(str))
const matrix = new Array(7).fill([10, 20, 30])

console.warn('warn-:')
console.error('Error-:')

console.trace(matrix) // prints the stack trace   uses process.stderr()

const obj = {
  a: {
    b: {
      c: '1',
      timeStamp: new Date().getTime(),
    },
    how: "don't know",
  },
  b: 'hello',
  c: {
    d: {
      e: {
        f: 'bye',
      },
    },
    text: {
      message: 'fuck off',
    },
  },
}

console.dir(obj, {
  depth: 0, // can decide the nesting level of object to be printed  0 means->first level properties only
})
console.dir('hello') // if iterable is not provided fall back to default console.log()

// console.debug(matrix)  // same as console.log() ->alias
// console.dirxml(matrix)  // same as console.log() ->alias
// console.info('matrix) // same as console.log() ->alias

// interface Console {
//   assert(condition?: boolean, ...data: any[]): void;
//   clear(): void;
//   count(label?: string): void;
//   countReset(label?: string): void;
//   debug(...data: any[]): void;
//   dir(item?: any, options?: any): void;
//   dirxml(...data: any[]): void;
//   error(...data: any[]): void;
//   group(...data: any[]): void;
//   groupCollapsed(...data: any[]): void;
//   groupEnd(): void;
//   info(...data: any[]): void;
//   log(...data: any[]): void;
//   table(tabularData?: any, properties?: string[]): void;
//   time(label?: string): void;
//   timeEnd(label?: string): void;
//   timeLog(label?: string, ...data: any[]): void;
//   timeStamp(label?: string): void;
//   trace(...data: any[]): void;
//   warn(...data: any[]): void;
// }
