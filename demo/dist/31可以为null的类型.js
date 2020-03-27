"use strict";
function f(x, y) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
// f(1, null) // 类型“null”的参数不能赋给类型“number | undefined”的参数
/* -------------- */
var C = /** @class */ (function () {
    function C() {
        this.a = 0;
    }
    return C;
}());
var cc = new C();
cc.a = 12;
// cc.a = undefined // 不能将类型“undefined”分配给类型“number”。
cc.b = undefined;
// cc.b = null // 不能将类型“null”分配给类型“number | undefined”
function fx(sn) {
    return sn || 'default';
}
function broken(name) {
    function postfix(epither) {
        return name.charAt(0) + '. the' + epither; // ! 表示肯定
    }
    name = name || 'Bob';
    return postfix(name);
}
