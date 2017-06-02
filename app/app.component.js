"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var user_service_1 = require("./shared/user/user.service");
var AppComponent = (function () {
    // 构造器，在这里实例化上面声明的属性
    // 如果属性作为参数，代表声明，实例化工作交给外部：包括依赖注入（typescript构造器语法）
    function AppComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.MockUser();
    }
    AppComponent.prototype.submit = function () {
        // alert("You’re using: " + this.user.email);
        if (this.isLoggingIn) {
            this.signIn();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.signIn = function () {
        // TODO: 111
    };
    AppComponent.prototype.signUp = function () {
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
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQThEO0FBQzlELDJEQUF5RDtBQVN6RCxJQUFhLFlBQVk7SUFLdkIsb0JBQW9CO0lBQ3BCLGtEQUFrRDtJQUNsRCxzQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKNUMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFLakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsNkNBQTZDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsWUFBWTtJQUNkLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQUEsaUJBV0M7UUFWQyxJQUFNLFNBQVMsR0FBRztZQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBQ0YsSUFBTSxTQUFTLEdBQUcsVUFBQyxHQUFhO1lBQzlCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLEtBQUssQ0FBQyxrREFBYSxPQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFFSCxtQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7cUNBUWlDLDBCQUFXO0dBUGpDLFlBQVksQ0F5Q3hCO0FBekNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIsIE1vY2tVc2VyLCBOb3RBVXNlciB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSwgLy8g5pyN5Yqh77yM5pWw57uE5Lit55qE5pyN5Yqh5Lya6KKr5b2T5oiQ56eB5pyJ5bGe5oCn5rOo5YWl5Yiw6KKr5L+u6aWw55qE57G755qE5p6E6YCg5Zmo6YeM44CCXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIiwgLy8g5qih5p2/aHRtbO+8jOS5n+WPr+S7peWGheiBlOOAglxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl0sIC8vIOagt+W8j1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICAvLyDmnoTpgKDlmajvvIzlnKjov5nph4zlrp7kvovljJbkuIrpnaLlo7DmmI7nmoTlsZ7mgKdcbiAgLy8g5aaC5p6c5bGe5oCn5L2c5Li65Y+C5pWw77yM5Luj6KGo5aOw5piO77yM5a6e5L6L5YyW5bel5L2c5Lqk57uZ5aSW6YOo77ya5YyF5ous5L6d6LWW5rOo5YWl77yIdHlwZXNjcmlwdOaehOmAoOWZqOivreazle+8iVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBNb2NrVXNlcigpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIC8vIGFsZXJ0KFwiWW914oCZcmUgdXNpbmc6IFwiICsgdGhpcy51c2VyLmVtYWlsKTtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5zaWduSW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cblxuICBzaWduSW4oKSB7XG4gICAgLy8gVE9ETzogMTExXG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgY29uc3Qgb25TdWNjZXNzID0gKCkgPT4ge1xuICAgICAgYWxlcnQoXCLms6jlhozmiJDlip/vvIFcIik7XG4gICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uRmFpbHVyZSA9IChlcnI6IFJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZXJyLmpzb24oKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBqc29uLm1lc3NhZ2U7XG4gICAgICBhbGVydChg5rOo5YaM5aSx6LSlLi4u5Y6f5Zug77yaJHttZXNzYWdlfWApO1xuICAgIH07XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG4gIH1cblxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxuXG59Il19