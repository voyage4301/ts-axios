function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    return new Error(`Expected string or number got ${padding}`)
}

// padLeft('hello world', true) // 类型“true”的参数不能赋给类型“string | number”的参数

/* ---------------------------------------- */

interface Brids {
    fly(): void
    layEggs(): void
}
interface Fishs {
    swim(): void
    layEggs(): void
}

function getSmallPet(): Fishs | Brids {
    // return 
}

let pet = getSmallPet()
pet.layEggs()
// pet.fly() // 类型“Fishs”上不存在属性“fly”。
// pet.swim() // 类型“Brids”上不存在属性“swim”。