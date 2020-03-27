"use strict";
var pws = 'pws1234';
var Employee4 = /** @class */ (function () {
    function Employee4() {
        this._fullName = '';
    }
    Object.defineProperty(Employee4.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (pws && pws === 'pws134') {
                this._fullName = newName;
            }
            else {
                console.error('Error Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee4;
}());
var employee1 = new Employee4();
employee1.fullName = 'Bob Smith';
if (employee1.fullName) {
    console.log(employee1.fullName);
}
