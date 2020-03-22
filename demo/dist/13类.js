"use strict";
var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        return "hello " + this.greeting;
    };
    return Greeter;
}());
var greeter1 = new Greeter('world');
console.log(greeter1.greet());
/* ------ */
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("animal moved " + distance);
    };
    return Animal1;
}());
