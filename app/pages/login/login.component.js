"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    // 构造器，在这里实例化上面声明的属性
    // 如果属性作为参数，代表声明，实例化工作交给外部：包括依赖注入（typescript构造器语法）
    // router不需要在这个组件的providers进行注入，原因是已经在上层的app.module.ts里import了。
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isLoggingIn = true;
        this.user = new user_1.MockUser();
    }
    LoginComponent.prototype.submit = function () {
        // alert("You’re using: " + this.user.email);
        if (this.isLoggingIn) {
            this.signIn();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        var onSuccess = function () {
            _this.router.navigate(["/list"]);
        };
        var onFailure = function (err) {
            var message = err.json().errorCode === 205 ? "用户名或密码错误" : "";
            alert("登录失败，请检查输入~，原因：" + message);
        };
        this.userService.login(this.user).subscribe(onSuccess, onFailure);
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        var onSuccess = function () {
            alert("注册成功！");
            _this.toggleDisplay();
        };
        var onFailure = function (err) {
            var json = err.json();
            var message = json.message;
            alert("\u6CE8\u518C\u5931\u8D25...\u539F\u56E0\uFF1A" + message);
        };
        this.userService.register(this.user).subscribe(onSuccess, onFailure);
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QywrQ0FBa0U7QUFDbEUsK0RBQTZEO0FBUzdELElBQWEsY0FBYztJQUt6QixvQkFBb0I7SUFDcEIsa0RBQWtEO0lBQ2xELCtEQUErRDtJQUMvRCx3QkFBb0IsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxwRSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQU1qQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSw2Q0FBNkM7UUFDN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJDLElBQU0sU0FBUyxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFDRixJQUFNLFNBQVMsR0FBRyxVQUFDLEdBQWE7WUFDOUIsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsS0FBSyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUMvRCxLQUFLLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFXQztRQVZDLElBQU0sU0FBUyxHQUFHO1lBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNmLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUM7UUFDRixJQUFNLFNBQVMsR0FBRyxVQUFDLEdBQWE7WUFDOUIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsS0FBSyxDQUFDLGtEQUFhLE9BQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQztBQWpEWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDckUsQ0FBQztxQ0FTaUMsMEJBQVcsRUFBa0IsZUFBTTtHQVJ6RCxjQUFjLENBaUQxQjtBQWpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyLCBNb2NrVXNlciwgTm90QVVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSwgLy8g5pyN5Yqh77yM5pWw57uE5Lit55qE5pyN5Yqh5Lya6KKr5b2T5oiQ56eB5pyJ5bGe5oCn5rOo5YWl5Yiw6KKr5L+u6aWw55qE57G755qE5p6E6YCg5Zmo6YeM44CCXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIiwgLy8g5qih5p2/aHRtbO+8jOS5n+WPr+S7peWGheiBlOOAglxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl0sIC8vIOagt+W8j1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG5cbiAgdXNlcjogVXNlcjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuXG4gIC8vIOaehOmAoOWZqO+8jOWcqOi/memHjOWunuS+i+WMluS4iumdouWjsOaYjueahOWxnuaAp1xuICAvLyDlpoLmnpzlsZ7mgKfkvZzkuLrlj4LmlbDvvIzku6Pooajlo7DmmI7vvIzlrp7kvovljJblt6XkvZzkuqTnu5nlpJbpg6jvvJrljIXmi6zkvp3otZbms6jlhaXvvIh0eXBlc2NyaXB05p6E6YCg5Zmo6K+t5rOV77yJXG4gIC8vIHJvdXRlcuS4jemcgOimgeWcqOi/meS4que7hOS7tueahHByb3ZpZGVyc+i/m+ihjOazqOWFpe+8jOWOn+WboOaYr+W3sue7j+WcqOS4iuWxgueahGFwcC5tb2R1bGUudHPph4xpbXBvcnTkuobjgIJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgTW9ja1VzZXIoKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICAvLyBhbGVydChcIllvdeKAmXJlIHVzaW5nOiBcIiArIHRoaXMudXNlci5lbWFpbCk7XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMuc2lnbkluKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG5cbiAgc2lnbkluKCkge1xuICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uRmFpbHVyZSA9IChlcnI6IFJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyLmpzb24oKS5lcnJvckNvZGUgPT09IDIwNSA/IFwi55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vXCIgOiBcIlwiO1xuICAgICAgYWxlcnQoXCLnmbvlvZXlpLHotKXvvIzor7fmo4Dmn6XovpPlhaV+77yM5Y6f5Zug77yaXCIgKyBtZXNzYWdlKTtcbiAgICB9O1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuICB9XG5cbiAgc2lnblVwKCkge1xuICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIGFsZXJ0KFwi5rOo5YaM5oiQ5Yqf77yBXCIpO1xuICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgfTtcbiAgICBjb25zdCBvbkZhaWx1cmUgPSAoZXJyOiBSZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGVyci5qc29uKCk7XG4gICAgICBjb25zdCBtZXNzYWdlID0ganNvbi5tZXNzYWdlO1xuICAgICAgYWxlcnQoYOazqOWGjOWksei0pS4uLuWOn+WboO+8miR7bWVzc2FnZX1gKTtcbiAgICB9O1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuICB9XG5cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cblxufSJdfQ==