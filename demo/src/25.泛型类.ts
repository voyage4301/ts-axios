class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
    return x + y
}

let stringNumber = new GenericNumber<string>()
stringNumber.zeroValue = '123'
stringNumber.add = function (x, y) {
    return x + y
}

console.log(stringNumber.add(stringNumber.zeroValue, 'test'));
