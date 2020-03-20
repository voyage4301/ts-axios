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