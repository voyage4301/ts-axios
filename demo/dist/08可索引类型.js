"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myArray;
myArray = ['1', '2', '3'];
var myStr = myArray[0];
/* --------- */
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(n, b) {
        var _this = _super.call(this, b) || this;
        _this.name = n;
        _this.breed = b;
        return _this;
    }
    return Dog;
}(Animal));
var d = new Dog('name', 'age');
console.log(d.name);
console.log(d.breed);
var myArray1 = ['1', '2'];
// myArray1[0] = '123' // 报错! 类型“ReadonlyStringArray”中的索引签名仅允许读取。
