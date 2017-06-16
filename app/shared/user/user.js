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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFFbkQseUNBQXlDO0FBQ3pDO0lBQUE7SUFXQSxDQUFDO0lBSFUsMkJBQVksR0FBbkI7UUFDSSxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLG9CQUFJO0FBYWpCO0lBQThCLDRCQUFJO0lBQWxDO1FBQUEscUVBR0M7UUFGVSxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxRQUFRLENBQUM7O0lBQy9CLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUhELENBQThCLElBQUksR0FHakM7QUFIWSw0QkFBUTtBQUtyQjtJQUE2QiwyQkFBSTtJQUFqQztRQUFBLHFFQUdDO1FBRlUsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFRLEdBQUcsUUFBUSxDQUFDOztJQUMvQixDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFIRCxDQUE2QixJQUFJLEdBR2hDO0FBSFksMEJBQU87QUFLcEI7SUFBMkIseUJBQUk7SUFBL0I7UUFBQSxxRUFHQztRQUZVLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLFFBQVEsQ0FBQzs7SUFDL0IsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBSEQsQ0FBMkIsSUFBSSxHQUc5QjtBQUhZLHNCQUFLO0FBS2xCO0lBQThCLDRCQUFJO0lBQWxDO1FBQUEscUVBR0M7UUFGVSxXQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDM0IsY0FBUSxHQUFHLFFBQVEsQ0FBQzs7SUFDL0IsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBSEQsQ0FBOEIsSUFBSSxHQUdqQztBQUhZLDRCQUFRO0FBS3JCO0lBQW1DLGlDQUFJO0lBQXZDO1FBQUEscUVBR0M7UUFGVSxXQUFLLEdBQUcsdUJBQXVCLENBQUM7UUFDaEMsY0FBUSxHQUFHLFVBQVUsQ0FBQzs7SUFDakMsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUhELENBQW1DLElBQUksR0FHdEM7QUFIWSxzQ0FBYTtBQUsxQjtJQUFBO0lBQXVCLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUF4QixJQUF3QjtBQUFYLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRW1haWxWYWxpbmRhdG9yIGZyb20gXCJlbWFpbC12YWxpZGF0b3JcIjtcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xyXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyB2ZXJpZnk6IHN0cmluZztcclxuICAgIHB1YmxpYyBpc1ZhbGlkRW1haWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIEVtYWlsVmFsaW5kYXRvci52YWxpZGF0ZSh0aGlzLmVtYWlsKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFpoZW5UaW5nIGV4dGVuZHMgVXNlciB7XHJcbiAgICBwdWJsaWMgdXNlcm5hbWUgPSBcInp0XCI7XHJcbiAgICBwdWJsaWMgcGFzc3dvcmQgPSBcIjEyMzQ1NlwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXVTaVdlbiBleHRlbmRzIFVzZXIge1xyXG4gICAgcHVibGljIHVzZXJuYW1lID0gXCJtc3dcIjtcclxuICAgIHB1YmxpYyBwYXNzd29yZCA9IFwiMTIzNDU2XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGlZdSBleHRlbmRzIFVzZXIge1xyXG4gICAgcHVibGljIHVzZXJuYW1lID0gXCJzeVwiO1xyXG4gICAgcHVibGljIHBhc3N3b3JkID0gXCIxMjM0NTZcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vY2tVc2VyIGV4dGVuZHMgVXNlciB7XHJcbiAgICBwdWJsaWMgZW1haWwgPSBcIjI4OTA1MjY2OUBxcS5jb21cIjtcclxuICAgIHB1YmxpYyBwYXNzd29yZCA9IFwiMTIzNDU2XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcm9jZXJpZXNVc2VyIGV4dGVuZHMgVXNlciB7XHJcbiAgICBwdWJsaWMgZW1haWwgPSBcInVzZXJAbmF0aXZlc2NyaXB0Lm9yZ1wiO1xyXG4gICAgcHVibGljIHBhc3N3b3JkID0gXCJwYXNzd29yZFwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90QVVzZXIge31cclxuIl19