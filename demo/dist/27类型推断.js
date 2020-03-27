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
var xxx = [0, 1, null];
var Animals = /** @class */ (function () {
    function Animals() {
    }
    return Animals;
}());
var Bees = /** @class */ (function (_super) {
    __extends(Bees, _super);
    function Bees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bees;
}(Animals));
var Lions = /** @class */ (function (_super) {
    __extends(Lions, _super);
    function Lions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lions;
}(Animals));
var zoo = [new Bees(), new Lions()];
