"use strict";
var mySearch;
/* 保证类型相同就行  */
mySearch = function (sou, sub) {
    var result = sou.search(sub);
    return result > -1;
};
/* 或者不写类型 利用定义好的函数类型接口 进行类型推断 */
var mySearch1;
mySearch1 = function (s, sub) {
    var result = s.search(sub);
    return result > -1;
};
