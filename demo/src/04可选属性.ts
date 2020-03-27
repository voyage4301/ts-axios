interface Square2 {
    color: string
    area: number
}

interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): Square2 {
    let newSquare2 = { color: 'white', area: 100 }
    if (config.color) {
        newSquare2.color = config.color
    }
    if (config.width) {
        newSquare2.area = config.width * config.width
    }
    return newSquare2
}

let mySquare = createSquare({ color: 'black' })
console.log(mySquare);


/* 父组件 */
const data = function () {
    return {
        buttonList: [
            {id: 'button1', value: ''},
            
        ]
    }
}



