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