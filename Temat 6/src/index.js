var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function StandardAccess(constructorFn) {
    constructorFn.prototype.role = Role.Standard;
}
function ModeratorAccess(constructorFn) {
    constructorFn.prototype.role = Role.Moderator;
}
function AdminAccess(constructorFn) {
    constructorFn.prototype.role = Role.Admin;
}
function watch(target, propKey, descriptor) {
    var originalFn = descriptor.value;
    descriptor.value = function (param) {
        console.log("User: " + param + " wants " + propKey);
        return originalFn.call(this, param);
    };
}
var Role;
(function (Role) {
    Role["Standard"] = "Standard";
    Role["Moderator"] = "Moderator";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.toString = function () {
        return this.name + " " + this.surname + " " + this.role;
    };
    return User;
}());
var StandardUser = /** @class */ (function (_super) {
    __extends(StandardUser, _super);
    function StandardUser(name, surname) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.surname = surname;
        return _this;
    }
    return StandardUser;
}(User));
var ModeratorUser = /** @class */ (function (_super) {
    __extends(ModeratorUser, _super);
    function ModeratorUser(name, surname) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.surname = surname;
        return _this;
    }
    return ModeratorUser;
}(User));
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(name, surname) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.surname = surname;
        return _this;
    }
    return AdminUser;
}(User));
var Resource = /** @class */ (function () {
    function Resource() {
        this.resourceValue = "resource value";
    }
    Resource.prototype.read = function (user) {
        if (user.role === Role.Moderator || user.role === Role.Admin) {
            console.log(this.resourceValue);
        }
    };
    Resource.prototype.change = function (user) {
        if (user.role === Role.Admin) {
            this.resourceValue = "changed resource value";
        }
    };
    return Resource;
}());
var user1 = new StandardUser("Luke", "Skywalker");
var user2 = new ModeratorUser("Han", "Solo");
var user3 = new AdminUser("Obi-Wan", "Kenobi");
var res = new Resource();
console.log(user1.toString());
console.log(user2.toString());
console.log(user3.toString());
console.log('User 1:');
res.read(user1);
res.change(user1);
console.log('User 2:');
res.read(user2);
res.change(user2);
res.read(user3);
console.log('User 3:');
res.change(user3);
res.read(user3);
