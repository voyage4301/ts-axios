# tsc 常用命令
`tsc --init`
`tsc -w`

# 基础类型
1. 布尔值
```ts
let isDone: boolean = false
```
2. number
```ts
let decliteral: number = 20 // 十进制
let hexliteral: number = 0x14 // 十六进制
let binaryliteral: number = 0b10100 // 二进制
let octallliteral: number = 0o24 // 八进制
```
3. string
```ts
let localname: string = 'jack'
let sentence: string = `Hello, my name is ${localname}

I'll go to BeiJing next month
`
```
4. array
```ts
let list: number[] = [1, 2, 3]
let nextList: Array<number> = [1, 2, 3]
```
5. 元组
```ts
let x: [string, number] = ['1', 2]
// x = [10, 10] // 报错
// x[3] = 'world' // 报错
```
6. 枚举
```ts
enum Color {
    Red = 1,
    Green = 3,
    Blue
}

let c: string = Color.Red // 1
let cc: string = Color[3] // Green 
```
7. any (使用any后, ts不会对该数据进行类型检查, 相当于写js)
```ts
let notSure: any = 4
notSure = 'not sure'
notSure = false

let array: any[] = [1, '', [], undefined]
```
8. void
```ts
function warnUser(): void {

}
let unusable: void = undefined  // 无意义
```
9. null 和 undefined
```ts
let u: undefined = undefined
let n: null = null
```
10. never 
```ts
function error(message: string): never {
    throw new Error(message)
}

function inifiniteLoop(): never {
    while (true) {
        // ...
    }
}
```
11. object
```ts
declare function create(o: object | null): void
create({ prop: 0 })
create(null)
```
12. 强制转换
```ts
let someValue: any = 'this is a string'
// 1
let strLength: number = (<string>someValue).length
// 2
let strLength1: number = (someValue as string).length
```

# 接口
1. 使用场景
```ts
interface LabelValue {
    label: string
}

// function printlabel(labelObj: { label: string }) {
function printlabel(labelObj: LabelValue) {
    console.log(labelObj.label);
}

let labelObj = { label: 'hello world', size: 10 } 

printlabel(labelObj)
```
2. 可选属性
```ts
interface Square {
    color: string
    area: number
}

interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): Square {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({ color: 'black' })
console.log(mySquare);
```
3. 只读属性
```ts
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }

p1.x = 100 // 报错! Cannot assign to 'x' because it is a read-only property

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

ro[0] = 2 // 报错! 类型“readonly number[]”中的索引签名仅允许读取。
ro.length = 3 // 报错! Cannot assign to 'length' because it is a read-only property.
```
4. 额外属性检查
```ts
interface Square {
    color: string
    area: number
}

interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any // 索引签名 表示 SquareConfig可以有任意数量的属性 只要不是color和width
}

function createSquare(config: SquareConfig): Square {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

// let mySquare1 = createSquare({ colour: 'black' }) // 报错
// let mySquare1 = createSquare({ colour: 'black' } as SquareConfig)  // 通过类型断言解决, 不推荐
// let mySquare1 = createSquare({ colour: 'black' }) // 通过索引签名解决 声明接口的时候 加上一条  [propName: string]: any

let squareOptions = { colour: 'black' }
let mySquare1 = createSquare(squareOptions) // 通过声明变量解决 不推荐

console.log(mySquare1);
```
5. 函数类型
```ts
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc

/* 保证类型相同就行  */
mySearch = function (sou: string, sub: string): boolean {
    let result = sou.search(sub)
    return result > -1
}
/* 或者不写类型 利用定义好的函数类型接口 进行类型推断 */
let mySearch1: SearchFunc
mySearch1 = function (s, sub) {
    let result = s.search(sub)
    return result > -1
}
```
6. 可索引类型
```ts
/* -------索引签名------- */
interface StingArray {
    [index: number]: string
}
let myArray: StingArray
myArray = ['1', '2', '3']

let myStr: string = myArray[0]

/* --------- */
class Animal {
    name: string
    constructor(n: string) {
        this.name = n
    }

}
class Dog extends Animal {
    breed: string
    constructor(n: string, b: string) {
        super(b)
        this.name = n
        this.breed = b
    }
}

let d = new Dog('name', 'age')
console.log(d.name);
console.log(d.breed);

interface NotOkay {
    [x: number]: Animal
    // [x: string]: Dog // 报错!
}

/* ----- */

interface NumberDictionnary {
    [index: string]: number,
    length: number,
    // name: string //报错 和索引类型不匹配
}

/* --- */
interface ReadonlyStringArray {
    readonly [index: number]: string
}

let myArray1: ReadonlyStringArray = ['1', '2']
// myArray1[0] = '123' // 报错! 类型“ReadonlyStringArray”中的索引签名仅允许读取。
```
7. 类类型
```ts


```