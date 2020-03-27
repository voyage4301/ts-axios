"use strict";
function extend(first, second) {
    var res = {};
    for (var id in first) {
        res[id] = first[id];
    }
    for (var id in second) {
        if (!res.hasOwnProperty(id)) {
            res[id] = second[id];
        }
    }
    return res;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
    };
    return ConsoleLogger;
}());
var jim = extend(new Person('jim'), new ConsoleLogger());
jim.name;
jim.log();
