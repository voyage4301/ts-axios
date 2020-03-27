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
interface ClockInterface {
    tick(): void
}

interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('beep beep beep');
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('tick toc');
    }
}

let digital = createClock(DigitalClock, 12, 13)

let analog = createClock(AnalogClock, 10, 10)
```
8. 接口类型
```ts
interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

interface Square extends Shape, PenStroke {
    sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5
```
9. 混合类型
```ts
interface Counter {
    (start: number): string // 函数
    interval: number // 对象
    reset(): void // 函数
}

function getCounter(): Counter {
    let counter = function (start: number) {
        console.log(start);
    } as Counter

    counter.interval = 123

    counter.reset = function () { }

    return counter
}

let c = getCounter()
console.log(c);

c(10)
c.reset()
c.interval = 123
```
10. 接口继承类
```ts
class Control {
    private state: any
}

interface SelectableControl extends Control { // 接口继承类
    select(): void
}

class Button extends Control implements SelectableControl { // 要想实现接口接口, 必选先继承 
    select() { }
}

class TextBox extends Control { // 直接继承 是没问题的
    select() { }
}

// class ImageC implements SelectableControl { // 没继承 报错了!!!!
//     select() { }
// }
```

# 类
1. 基础
```ts
class Greeter {
    greeting: string
    constructor(msg: string) {
        this.greeting = msg
    }

    greet() {
        return `hello ${this.greeting}`
    }
}

let greeter1 = new Greeter('world')
console.log(greeter1.greet());
/* 0---------- */
class Animal1 {
    move(distance: number = 0) {
        console.log(`animal moved ${distance}m`);
    }
}

class Dog1 extends Animal1{
    back() {
        console.log('Woof! Woof!')
    }
}

const dog = new Dog1()
dog.back()
dog.move(20)
/* ---------------- */
class Animal2 {
    name: string
    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}

class Snake extends Animal2 {
    constructor(name: string) {
        super(name)
    }
    move(distance: number = 5) {
        console.log('Slithering...');
        super.move(distance)
    }
}

class Horse extends Animal2 {
    constructor(name: string) {
        super(name)
    }
    move(distance: number = 50) {
        console.log('Galloping...');
        super.move(distance)
    }
}

let snake = new Snake('Sammy')
let tom: Animal2 = new Horse('Tommy')

snake.move()
tom.move()
```
2. 公共私有受保护等成员变量
```ts
/* private */
class Animal3 {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`);
    }
}

class Rhino extends Animal3 {
    constructor() {
        super('Rhino')
    }
}

class Employee {
    private name: string
    constructor(name: string) {
        this.name = name
    }
}

let animal = new Animal3('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')

animal = rhino
// animal = employee // 报错

/* -----protected---- */
class Person1 {
    protected name: string

    protected constructor(name: string) {
        this.name = name
    }
}

class Employee1 extends Person1 {
    private department: string

    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}`
    }
}

let emp = new Employee1('Jack', '百度')
console.log(emp.getElevatorPitch());
// console.log(emp.name); // 报错 属性“name”受保护，只能在类“Person1”及其子类中访问

// let p = new Person1('张三') // 报错 类“Person1”的构造函数是受保护的，仅可在类声明中访问。
```
3. readonly 修饰符
```ts
class Person2 {
    readonly name: string
    constructor(name: string) { 
        this.name = name
    }
}

class Person3 {
    constructor(readonly name: string) { // 参数属性
    }
}

let john = new Person2('John')
// john.name = '123' // Cannot assign to 'name' because it is a read-only property

let jack = new Person3('Jack')
console.log(jack.name);
// jack.name = 'ack' // Cannot assign to 'name' because it is a read-only property
```
4. 类的存取器
```ts
let pws = 'pws1234'

class Employee4 {
    private _fullName: string = ''
    get fullName(): string {
        return this._fullName
    }
    set fullName(newName: string) {
        if (pws && pws === 'pws134') {
            this._fullName = newName
        } else {
            console.error('Error Unauthorized update of employee!')
        }
    }
}

let employee1 = new Employee4()
employee1.fullName = 'Bob Smith'

if(employee1.fullName) {
    console.log(employee1.fullName );
}
```
5. 类的静态成员
```ts
class Grid {
    static origin = { x: 0, y: 0 }
    scale: number
    constructor(scale: number) {
        this.scale = scale
    }

    getDistance(point: { x: number, y: number }) {
        let xD = point.x - Grid.origin.x
        let yD = point.y - Grid.origin.y

        return Math.sqrt(xD * xD + yD * yD) * this.scale
    }
}

let grid1 = new Grid(1)
let grid2 = new Grid(5)

console.log(grid1.getDistance({ x: 3, y: 4 }));
console.log(grid2.getDistance({ x: 3, y: 4 }));
```
6. 抽象类
```ts
abstract class Department {
    name: string
    constructor(name: string) {
        this.name = name
    }
    printName(): void {
        console.log(`department name ${this.name}`);
    }
    abstract printMeeting(): void
}

class AccountDepartment extends Department {
    constructor() {
        super('Account ad Auditing')
    }
    printMeeting(): void {
        console.log('the accounting department meets each Monday');
    }
    genterateReports(): void {
        console.log('本地方法');
    }
}

// let department: Department = new Department('123') // 无法创建抽象类的实例。
let department: Department = new AccountDepartment() // 可以创建派生类的实例
department.printName()
department.printMeeting()
// department.genterateReports() // Department 中没有注册 genterateReports 故报错
```
7. 类的高级技巧
```ts
class Person5 {
    static localname = 'Jack Jones'
    name: string
    constructor(name?: string) {
        this.name = name || ''
    }
    sayHello() {
        if (this.name) {
            return `hello my name is ${this.name}`
        } else {
            return `hello my name is ${Person5.localname}`
        }
    }
}

let p: Person5 = new Person5()
console.log(p.sayHello());

let PersonMaker: typeof Person5 = Person5 
PersonMaker.localname = '张三'

let p2: Person5 = new PersonMaker()
console.log(p2.sayHello());
```

# 函数
1. 基本概念
```ts
function add(x: number, y: number): number {
    return x + y
}

let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
} 
```
2. 可选参数
```ts
function fullName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + '' + lastName
    } else {
        return firstName
    }
}

let res1 = fullName('BOB') //报错 An argument for 'lastName' was not provided.
let res2 = fullName('BOB', 'KK', 'DD') //报错 应有 2 个参数，但获得 3 个。
let res3 = fullName('BOB', 'KK') 
/* ----------------- */
function fullName(firstName: string, ...restOfName: string[]): string {
    return firstName + ''

}

let res1 = fullName('BOB')
let res2 = fullName('BOB', 'KK', 'DD')
let res3 = fullName('BOB', 'KK') 
```
3. 函数的this和重载
```ts
interface Card {
    suit: string
    card: number
}
interface Deck {
    suits: string[]
    cards: number[]
    createCardPicker(this: Deck): () => Card
}

let deck = {
    suits: ['hearts', 'spandes', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log('card: ' + pickedCard.card + 'of' + pickedCard.suit);
```
```ts
interface UIElement {
    addClickListener(onClick: (this: void, e: Event) => void): void
}

class Handler {
    type: string = ''
    onClickBad = (e: Event) => { // 箭头函数
        this.type = e.type
    }
}

let h = new Handler()

let uiElement: UIElement = {
    addClickListener() {

    }
}

uiElement.addClickListener(h.onClickBad)
```

# 泛型
1. 基础示例
```ts
function identity<T>(arg: T): T {
    return arg
}

// let outPut = identity<string>('mystring')
let outPut = identity('mystring')
```
```ts
function identity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg
}

// let outPut = identity<string>('mystring')
let outPut = identity(['mystring'])
```
```ts
function identity<T>(arg: T): T {
    return arg
}
// let myIdentity: <T>(arg: T) => T = identity

/* interface GnericIdentityFn {
    <T>(arg: T): T
} 

let myIdentity: GnericIdentityFn = identity
*/

interface GnericIdentityFn<T> {
    (arg: T): T
}

let myIdentity: GnericIdentityFn<number> = identity
```
2. 泛型类
```ts
class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
    return x + y
}

let stringNumber = new GenericNumber<string>()
stringNumber.zeroValue = '123'
stringNumber.add = function (x, y) {
    return x + y
}

console.log(stringNumber.add(stringNumber.zeroValue, 'test'));
```
3. 泛型约束
```ts
interface Lengthwise {
    length: number
}


function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg
}

loggingIdentity([123])

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let x1 = { a: 1, b: 2, c: 3 }
getProperty(x1, 'a') // 没问题
// getProperty(x1, 'd') // 报错了 // 类型“"d"”的参数不能赋给类型“"a" | "b" | "c"”的参数。
/* ----------- */
function create<T>(c: { new(): T }): T {
    return new c()
}
```
```ts
class Beekeeper {
    hasMask?: boolean
}
class LionKeeper {
    nametag?: string
}
class Animal8 {
    numLengs?: number
}
class Bee extends Animal8 {
    keeper?: Beekeeper
}
class Lion extends Animal8 {
    keeper?: LionKeeper
}

function createInstance<T extends Animal8>(c: new () => T): T {
    return new c()
}

createInstance(Lion).keeper?.nametag
createInstance(Bee).keeper?.hasMask
```
4. 类型推断
```ts
let xxx = [0, 1, null]

class Animals {
    numLegs?: number
}

class Bees extends Animals {

}

class Lions extends Animals {

}

let zoo: Animals[] = [new Bees(), new Lions()]
```

# 高级类型
1. 交叉类型
```ts
function extend<T, U>(first: T, second: U): T & U {
    let res = {} as T & U
    for (let id in first) {
        res[id] = first[id] as any
    }
    for (let id in second) {
        if (!res.hasOwnProperty(id)) {
            res[id] = second[id] as any
        }
    }
    return res
}

class Person {
    constructor(public name: string) {

    }
}
interface Loggable {
    log(): void
}
class ConsoleLogger implements Loggable {
    log() {

    }
}

let jim = extend(new Person('jim'), new ConsoleLogger())
jim.name
jim.log()
```
2. 联合类型
```ts
function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    return new Error(`Expected string or number got ${padding}`)
}

// padLeft('hello world', true) // 类型“true”的参数不能赋给类型“string | number”的参数

/* ---------------------------------------- */

interface Brids {
    fly(): void
    layEggs(): void
}
interface Fishs {
    swim(): void
    layEggs(): void
}

function getSmallPet(): Fishs | Brids {
    // return 
}

let pet = getSmallPet()
pet.layEggs()
// pet.fly() // 类型“Fishs”上不存在属性“fly”。
// pet.swim() // 类型“Brids”上不存在属性“swim”。
```
3. 类型保护
- 类型位词(自定义)
```ts
interface Brids1 {
    fly(): void
    layEggs(): void
}
interface Fishs1 {
    swim(): void
    layEggs(): void
}

function getSmallPet(): Fishs1 | Brids1 {
    // return 
}

let pet1 = getSmallPet()
pet1.layEggs()
if (isFish(pet1)) {
    pet1.swim()
} else {
    pet1.fly()
}

function isFish(pet: Fishs1 | Brids1): pet is Fishs1 {
    return (pet as Fishs1).swim != undefined
}
```
- typeof
```ts
function isNumber(x: any): x is number {
    return typeof x === 'number'
}

function isString(x: any): x is string {
    return typeof x === 'string'
}

function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value
    }
    if (isString(padding)) {
        return padding + value
    }
    throw new Error(`Expected string or number, got ${padding}`)
}
```
- instanceof
```ts
class Chicken {
    run() { }
    layEggs() { }
}
class Snakes {
    hua() { }
    layEggs() { }
}

function getRandomPet(): Chicken | Snakes {
    return Math.random() > .5 ? new Chicken() : new Snakes()
}

let pt = getRandomPet()
if (pt instanceof Chicken) {
    pt.run()
}
if(pt instanceof Snakes) {
    pt.hua()
}
```
4. 可以为null的类型
```ts
function f(x: number, y?: number) {
    return x + (y || 0)
}

f(1, 2)
f(1)
f(1, undefined)
// f(1, null) // 类型“null”的参数不能赋给类型“number | undefined”的参数
/* -------------- */
class C {
    a: number = 0
    b?: number
}

let cc = new C()
cc.a = 12
// cc.a = undefined // 不能将类型“undefined”分配给类型“number”。
cc.b = undefined
// cc.b = null // 不能将类型“null”分配给类型“number | undefined”

/* ------------- */
function fx(sn: string | null): string {
    return sn! || 'default'
}
/* ------------- */
function broken(name: string | null): string {
    function postfix(epither: string) {
        return name!.charAt(0) + '. the' + epither // ! 表示肯定
    }
    name = name || 'Bob'
    return postfix(name)
}
```
5. 字符串字面量类型
```ts

```

# ts-axios
## 