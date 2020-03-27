class Grid {
    static origin = { x: 0, y: 0 }
    scale: number
    constructor(scale: number) {
        this.scale = scale
    }

    getDistance(point: { x: number, y: number }) {
        let xD = point.x - Grid.origin.x
        let yD = point.y - Grid.origin.y

        return Math.sqrt(xD * xD + yD * yD) * this.scale
    }
}

let grid1 = new Grid(1)
let grid2 = new Grid(5)

console.log(grid1.getDistance({ x: 3, y: 4 }));
console.log(grid2.getDistance({ x: 3, y: 4 }));
