"use strict";
function getSmallPet() {
    // return 
}
var pet1 = getSmallPet();
pet1.layEggs();
if (isFish(pet1)) {
    pet1.swim();
}
else {
    pet1.fly();
}
function isFish(pet) {
    return pet.swim != undefined;
}
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error("Expected string or number, got " + padding);
}
/* ---------------- */
var Chicken = /** @class */ (function () {
    function Chicken() {
    }
    Chicken.prototype.run = function () { };
    Chicken.prototype.layEggs = function () { };
    return Chicken;
}());
var Snakes = /** @class */ (function () {
    function Snakes() {
    }
    Snakes.prototype.hua = function () { };
    Snakes.prototype.layEggs = function () { };
    return Snakes;
}());
function getRandomPet() {
    return Math.random() > .5 ? new Chicken() : new Snakes();
}
var pt = getRandomPet();
if (pt instanceof Chicken) {
    pt.run();
}
if (pt instanceof Snakes) {
    pt.hua();
}
