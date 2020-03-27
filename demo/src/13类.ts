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

/* ------ */
class Animal1 {
    move(distance: number = 0) {
        console.log(`animal moved ${distance}m`);
    }
}

class Dog1 extends Animal1 {
    back() {
        console.log('Woof! Woof!')
    }
}

const dog = new Dog1()
dog.back()
dog.move(20)

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
