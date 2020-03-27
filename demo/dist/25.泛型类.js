"use strict";
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var stringNumber = new GenericNumber();
stringNumber.zeroValue = '123';
stringNumber.add = function (x, y) {
    return x + y;
};
console.log(stringNumber.add(stringNumber.zeroValue, 'test'));
