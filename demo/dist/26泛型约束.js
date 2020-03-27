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
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity([123]);
function getProperty(obj, key) {
    return obj[key];
}
var x1 = { a: 1, b: 2, c: 3 };
getProperty(x1, 'a'); // 没问题
// getProperty(x1, 'd') // 报错了 // 类型“"d"”的参数不能赋给类型“"a" | "b" | "c"”的参数。
/* ----------- */
function create(c) {
    return new c();
}
/* ------- */
var Beekeeper = /** @class */ (function () {
    function Beekeeper() {
    }
    return Beekeeper;
}());
var LionKeeper = /** @class */ (function () {
    function LionKeeper() {
    }
    return LionKeeper;
}());
var Animal8 = /** @class */ (function () {
    function Animal8() {
    }
    return Animal8;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal8));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal8));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper ? .nametag
    :
;
createInstance(Bee).keeper ? .hasMask : ;
