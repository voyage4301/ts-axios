"use strict";
var p1 = { x: 10, y: 20 };
// p1.x = 100 // 报错! Cannot assign to 'x' because it is a read-only property
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 2 // 报错! 类型“readonly number[]”中的索引签名仅允许读取。
// ro.length = 3 // 报错! Cannot assign to 'length' because it is a read-only property.
