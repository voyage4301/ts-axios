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
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("department name " + this.name);
    };
    return Department;
}());
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        return _super.call(this, 'Account ad Auditing') || this;
    }
    AccountDepartment.prototype.printMeeting = function () {
        console.log('the accounting department meets each Monday');
    };
    AccountDepartment.prototype.genterateReports = function () {
        console.log('本地方法');
    };
    return AccountDepartment;
}(Department));
// let department: Department = new Department('123') // 无法创建抽象类的实例。
var department = new AccountDepartment(); // 可以创建派生类的实例
department.printName();
department.printMeeting();
// department.genterateReports() // Department 中没有注册 genterateReports 故报错
