"use strict";
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.getDistance = function (point) {
        var xD = point.x - Grid.origin.x;
        var yD = point.y - Grid.origin.y;
        return Math.sqrt(xD * xD + yD * yD) * this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1);
var grid2 = new Grid(5);
console.log(grid1.getDistance({ x: 3, y: 4 }));
console.log(grid2.getDistance({ x: 3, y: 4 }));
