"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailValindator = require("email-validator");
/* tslint:disable max-classes-per-file */
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return EmailValindator.validate(this.email);
    };
    return User;
}());
exports.User = User;
var ZhenTing = (function (_super) {
    __extends(ZhenTing, _super);
    function ZhenTing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = "zt";
        _this.password = "123456";
        return _this;
    }
    return ZhenTing;
}(User));
exports.ZhenTing = ZhenTing;
var MuSiWen = (function (_super) {
    __extends(MuSiWen, _super);
    function MuSiWen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = "msw";
        _this.password = "123456";
        return _this;
    }
    return MuSiWen;
}(User));
exports.MuSiWen = MuSiWen;
var ShiYu = (function (_super) {
    __extends(ShiYu, _super);
    function ShiYu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = "sy";
        _this.password = "123456";
        return _this;
    }
    return ShiYu;
}(User));
exports.ShiYu = ShiYu;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFFbkQseUNBQXlDO0FBQ3pDO0lBQUE7SUFXQSxDQUFDO0lBSFUsMkJBQVksR0FBbkI7UUFDSSxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLG9CQUFJO0FBYWpCO0lBQThCLDRCQUFJO0lBQWxDO1FBQUEscUVBR0M7UUFGVSxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxRQUFRLENBQUM7O0lBQy9CLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUhELENBQThCLElBQUksR0FHakM7QUFIWSw0QkFBUTtBQUtyQjtJQUE2QiwyQkFBSTtJQUFqQztRQUFBLHFFQUdDO1FBRlUsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFRLEdBQUcsUUFBUSxDQUFDOztJQUMvQixDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFIRCxDQUE2QixJQUFJLEdBR2hDO0FBSFksMEJBQU87QUFLcEI7SUFBMkIseUJBQUk7SUFBL0I7UUFBQSxxRUFHQztRQUZVLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLFFBQVEsQ0FBQzs7SUFDL0IsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBSEQsQ0FBMkIsSUFBSSxHQUc5QjtBQUhZLHNCQUFLO0FBS2xCO0lBQThCLDRCQUFJO0lBQWxDO1FBQUEscUVBR0M7UUFGVSxXQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDM0IsY0FBUSxHQUFHLFFBQVEsQ0FBQzs7SUFDL0IsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBSEQsQ0FBOEIsSUFBSSxHQUdqQztBQUhZLDRCQUFRO0FBS3JCO0lBQW1DLGlDQUFJO0lBQXZDO1FBQUEscUVBR0M7UUFGVSxXQUFLLEdBQUcsdUJBQXVCLENBQUM7UUFDaEMsY0FBUSxHQUFHLFVBQVUsQ0FBQzs7SUFDakMsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUhELENBQW1DLElBQUksR0FHdEM7QUFIWSxzQ0FBYTtBQUsxQjtJQUFBO0lBQXVCLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUF4QixJQUF3QjtBQUFYLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRW1haWxWYWxpbmRhdG9yIGZyb20gXCJlbWFpbC12YWxpZGF0b3JcIjtcblxuLyogdHNsaW50OmRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZztcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcblxuICAgIHB1YmxpYyB1c2VybmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nO1xuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiAgICBwdWJsaWMgdmVyaWZ5OiBzdHJpbmc7XG4gICAgcHVibGljIGlzVmFsaWRFbWFpbCgpIHtcbiAgICAgICAgcmV0dXJuIEVtYWlsVmFsaW5kYXRvci52YWxpZGF0ZSh0aGlzLmVtYWlsKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBaaGVuVGluZyBleHRlbmRzIFVzZXIge1xuICAgIHB1YmxpYyB1c2VybmFtZSA9IFwienRcIjtcbiAgICBwdWJsaWMgcGFzc3dvcmQgPSBcIjEyMzQ1NlwiO1xufVxuXG5leHBvcnQgY2xhc3MgTXVTaVdlbiBleHRlbmRzIFVzZXIge1xuICAgIHB1YmxpYyB1c2VybmFtZSA9IFwibXN3XCI7XG4gICAgcHVibGljIHBhc3N3b3JkID0gXCIxMjM0NTZcIjtcbn1cblxuZXhwb3J0IGNsYXNzIFNoaVl1IGV4dGVuZHMgVXNlciB7XG4gICAgcHVibGljIHVzZXJuYW1lID0gXCJzeVwiO1xuICAgIHB1YmxpYyBwYXNzd29yZCA9IFwiMTIzNDU2XCI7XG59XG5cbmV4cG9ydCBjbGFzcyBNb2NrVXNlciBleHRlbmRzIFVzZXIge1xuICAgIHB1YmxpYyBlbWFpbCA9IFwiMjg5MDUyNjY5QHFxLmNvbVwiO1xuICAgIHB1YmxpYyBwYXNzd29yZCA9IFwiMTIzNDU2XCI7XG59XG5cbmV4cG9ydCBjbGFzcyBHcm9jZXJpZXNVc2VyIGV4dGVuZHMgVXNlciB7XG4gICAgcHVibGljIGVtYWlsID0gXCJ1c2VyQG5hdGl2ZXNjcmlwdC5vcmdcIjtcbiAgICBwdWJsaWMgcGFzc3dvcmQgPSBcInBhc3N3b3JkXCI7XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RBVXNlciB7fVxuIl19