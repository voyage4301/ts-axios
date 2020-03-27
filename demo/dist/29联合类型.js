"use strict";
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    return new Error("Expected string or number got " + padding);
}
function getSmallPet() {
    // return 
}
var pet = getSmallPet();
pet.layEggs();
// pet.fly() // 类型“Fishs”上不存在属性“fly”。
// pet.swim() // 类型“Brids”上不存在属性“swim”。
