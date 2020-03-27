interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

interface Square extends Shape, PenStroke {
    sideLength: number
}

let square3 = {} as Square
square3.color = 'blue'
square3.sideLength = 10
square3.penWidth = 5