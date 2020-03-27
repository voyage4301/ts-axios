interface Lengthwise {
    length: number
}


function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg
}

loggingIdentity([123])

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let x1 = { a: 1, b: 2, c: 3 }
getProperty(x1, 'a') // 没问题
// getProperty(x1, 'd') // 报错了 // 类型“"d"”的参数不能赋给类型“"a" | "b" | "c"”的参数。
/* ----------- */
function create<T>(c: { new(): T }): T {
    return new c()
}

/* ------- */
class Beekeeper {
    hasMask?: boolean
}
class LionKeeper {
    nametag?: string
}
class Animal8 {
    numLengs?: number
}
class Bee extends Animal8 {
    keeper?: Beekeeper
}
class Lion extends Animal8 {
    keeper?: LionKeeper
}

function createInstance<T extends Animal8>(c: new () => T): T {
    return new c()
}

createInstance(Lion).keeper?.nametag
createInstance(Bee).keeper?.hasMask