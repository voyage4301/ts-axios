"use strict";
var Person5 = /** @class */ (function () {
    function Person5(name) {
        this.name = name || '';
    }
    Person5.prototype.sayHello = function () {
        if (this.name) {
            return "hello my name is " + this.name;
        }
        else {
            return "hello my name is " + Person5.localname;
        }
    };
    Person5.localname = 'Jack Jones';
    return Person5;
}());
var p = new Person5();
console.log(p.sayHello());
var PersonMaker = Person5;
PersonMaker.localname = '张三';
var p2 = new PersonMaker();
console.log(p2.sayHello());
