"use strict";
function createSquare1(config) {
    var newSquare1 = { color: 'white', area: 100 };
    if (config.color) {
        newSquare1.color = config.color;
    }
    if (config.width) {
        newSquare1.area = config.width * config.width;
    }
    return newSquare1;
}
// let mySquare1 = createSquare1({ colour: 'black' }) // 报错
// let mySquare1 = createSquare1({ colour: 'black' } as SquareConfig)  // 通过类型断言解决, 不推荐
// let mySquare1 = createSquare1({ colour: 'black' }) // 通过索引签名解决 声明接口的时候 加上一条  [propName: string]: any
var squareOptions = { colour: 'black' };
var mySquare1 = createSquare1(squareOptions); // 通过声明变量解决 不推荐
console.log(mySquare1);
