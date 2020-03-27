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
