"use strict";
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var john = new Person2('John');
// john.name = '123' // Cannot assign to 'name' because it is a read-only property
var jack = new Person3('Jack');
console.log(jack.name);
// jack.name = 'ack' // Cannot assign to 'name' because it is a read-only property
