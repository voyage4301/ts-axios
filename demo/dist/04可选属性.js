"use strict";
function createSquare(config) {
    var newSquare2 = { color: 'white', area: 100 };
    if (config.color) {
        newSquare2.color = config.color;
    }
    if (config.width) {
        newSquare2.area = config.width * config.width;
    }
    return newSquare2;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
/* 父组件 */
var data = function () {
    return {
        buttonList: [
            { id: 'button1', value: '' },
        ]
    };
};
