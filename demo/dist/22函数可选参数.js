"use strict";
function fullName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + '';
}
var res1 = fullName('BOB');
var res2 = fullName('BOB', 'KK', 'DD');
var res3 = fullName('BOB', 'KK');
