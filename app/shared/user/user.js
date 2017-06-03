"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailValindator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return EmailValindator.validate(this.email);
    };
    return User;
}());
exports.User = User;
var MockUser = (function (_super) {
    __extends(MockUser, _super);
    function MockUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.email = "289052669@qq.com";
        _this.password = "123456";
        return _this;
    }
    return MockUser;
}(User));
exports.MockUser = MockUser;
var GroceriesUser = (function (_super) {
    __extends(GroceriesUser, _super);
    function GroceriesUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.email = "user@nativescript.org";
        _this.password = "password";
        return _this;
    }
    return GroceriesUser;
}(User));
exports.GroceriesUser = GroceriesUser;
var NotAUser = (function () {
    function NotAUser() {
    }
    return NotAUser;
}());
exports.NotAUser = NotAUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFFbkQ7SUFBQTtJQU1BLENBQUM7SUFIRywyQkFBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxvQkFBSTtBQVFqQjtJQUE4Qiw0QkFBSTtJQUFsQztRQUFBLHFFQUdDO1FBRkcsV0FBSyxHQUFHLGtCQUFrQixDQUFDO1FBQzNCLGNBQVEsR0FBRyxRQUFRLENBQUM7O0lBQ3hCLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUhELENBQThCLElBQUksR0FHakM7QUFIWSw0QkFBUTtBQUtyQjtJQUFtQyxpQ0FBSTtJQUF2QztRQUFBLHFFQUdDO1FBRkcsV0FBSyxHQUFHLHVCQUF1QixDQUFDO1FBQ2hDLGNBQVEsR0FBRyxVQUFVLENBQUM7O0lBQzFCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFIRCxDQUFtQyxJQUFJLEdBR3RDO0FBSFksc0NBQWE7QUFLMUI7SUFBQTtJQUF1QixDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFBeEIsSUFBd0I7QUFBWCw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEVtYWlsVmFsaW5kYXRvciBmcm9tIFwiZW1haWwtdmFsaWRhdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgaXNWYWxpZEVtYWlsKCkge1xuICAgICAgICByZXR1cm4gRW1haWxWYWxpbmRhdG9yLnZhbGlkYXRlKHRoaXMuZW1haWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vY2tVc2VyIGV4dGVuZHMgVXNlciB7XG4gICAgZW1haWwgPSBcIjI4OTA1MjY2OUBxcS5jb21cIjtcbiAgICBwYXNzd29yZCA9IFwiMTIzNDU2XCI7XG59XG5cbmV4cG9ydCBjbGFzcyBHcm9jZXJpZXNVc2VyIGV4dGVuZHMgVXNlciB7XG4gICAgZW1haWwgPSBcInVzZXJAbmF0aXZlc2NyaXB0Lm9yZ1wiO1xuICAgIHBhc3N3b3JkID0gXCJwYXNzd29yZFwiO1xufVxuXG5leHBvcnQgY2xhc3MgTm90QVVzZXIge30iXX0=