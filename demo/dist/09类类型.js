"use strict";
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = h;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
