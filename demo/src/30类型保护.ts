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
/* ---------------- */

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