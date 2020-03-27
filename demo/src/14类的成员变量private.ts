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