/* 布尔值 */
let isDone: boolean = false

/* number */
let decliteral: number = 20 // 十进制
let hexliteral: number = 0x14 // 十六进制
let binaryliteral: number = 0b10100 // 二进制
let octallliteral: number = 0o24 // 八进制

/* string */
let localname: string = 'jack'
let sentence: string = `Hello, my name is ${localname}

I'll go to BeiJing next month
`

/* array */
let list: number[] = [1, 2, 3]
let nextList: Array<number> = [1, 2, 3]

/* 元组 */
let x: [string, number] = ['1', 2]
// x = [10, 10] // 报错
// x[3] = 'world' // 报错

/* 枚举 */
enum Color {
    Red = 1,
    Green = 3,
    Blue
}

// let c: Color = Color.Green
let colorName: string = Color[3]
// console.log(colorName);

/* any */
let notSure: any = 4
notSure = 'not sure'
notSure = false

let array: any[] = [1, '', [], undefined]

/* void */
function warnUser(): void {

}
let unusable: void = undefined  // 无意义

/* null 和 undefined */
let u: undefined = undefined
let n: null = null

/* never */
function error(message: string): never {
    throw new Error(message)
}

function inifiniteLoop(): never {
    while (true) {
        // ...
    }
}

/* object */
declare function create(o: object | null): void
create({ prop: 0 })
create(null)

/* 强制转换 */
let someValue: any = 'this is a string'
// 1
let strLength: number = (<string>someValue).length
// 2
let strLength1: number = (someValue as string).length






