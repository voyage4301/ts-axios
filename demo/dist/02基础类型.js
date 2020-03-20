"use strict";
/* 布尔值 */
var isDone = false;
/* number */
var decliteral = 20; // 十进制
var hexliteral = 0x14; // 十六进制
var binaryliteral = 20; // 二进制
var octallliteral = 20; // 八进制
/* string */
var localname = 'jack';
var sentence = "Hello, my name is " + localname + "\n\nI'll go to BeiJing next month\n";
/* array */
var list = [1, 2, 3];
var nextList = [1, 2, 3];
/* 元组 */
var x = ['1', 2];
// x = [10, 10] // 报错
// x[3] = 'world' // 报错
/* 枚举 */
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
// let c: Color = Color.Green
var colorName = Color[3];
// console.log(colorName);
/* any */
var notSure = 4;
notSure = 'not sure';
notSure = false;
var array = [1, '', [], undefined];
/* void */
function warnUser() {
}
var unusable = undefined; // 无意义
/* null 和 undefined */
var u = undefined;
var n = null;
/* never */
function error(message) {
    throw new Error(message);
}
function inifiniteLoop() {
    while (true) {
        // ...
    }
}
create({ prop: 0 });
create(null);
/* 强制转换 */
var someValue = 'this is a string';
// 1
var strLength = someValue.length;
// 2
var strLength1 = someValue.length;
