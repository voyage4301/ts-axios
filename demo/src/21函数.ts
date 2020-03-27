function add(x: number, y: number): number {
    return x + y
}

let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
} 