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
        console.log(`animal moved ${distance}`);

    }
}
