interface Square {
    color: string
    area: number
}

interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any // 索引签名 表示 SquareConfig可以有任意数量的属性 只要不是color和width
}

function createSquare1(config: SquareConfig): Square {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

// let mySquare1 = createSquare1({ colour: 'black' }) // 报错
// let mySquare1 = createSquare1({ colour: 'black' } as SquareConfig)  // 通过类型断言解决, 不推荐
// let mySquare1 = createSquare1({ colour: 'black' }) // 通过索引签名解决 声明接口的时候 加上一条  [propName: string]: any

let squareOptions = { colour: 'black' }
let mySquare1 = createSquare1(squareOptions) // 通过声明变量解决 不推荐

console.log(mySquare1);
