let xxx = [0, 1, null]

class Animals {
    numLegs?: number
}

class Bees extends Animals {

}

class Lions extends Animals {

}

let zoo: Animals[] = [new Bees(), new Lions()]

