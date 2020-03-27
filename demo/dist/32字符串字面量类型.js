"use strict";
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === 'ease-in') {
        }
        else if (easing === 'ease-in-out') {
        }
        else if (easing === 'ease-out') {
        }
        else {
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, 'ease-in-out');
// button.animate(0, 0, null) // 类型“"unhealth"”的参数不能赋给类型“Easing”的参数。
// button.animate(0, 0, 'unhealth') // 类型“"unhealth"”的参数不能赋给类型“Easing”的参数。
