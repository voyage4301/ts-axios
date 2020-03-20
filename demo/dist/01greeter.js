"use strict";
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
// let user: Person = {
//     firstName: 'Yee',
//     lastName: 'Huang'
// }
var user = new User('Yee', 'Huang');
console.log(greeter(user));
