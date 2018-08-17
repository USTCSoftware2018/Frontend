var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var a = new User();
a.id = 5;
var b = new User();
b.id = 1;
var c = { data: [a,], info: b };
console.log(JSON.stringify(c));
