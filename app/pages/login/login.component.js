"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core"); // OnInit: ts类接口，需要实现。
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var page_1 = require("ui/page"); // tsconfig配置省略了前面的路径
var color_1 = require("color");
var hint_util_1 = require("../../utils/hint-util");
var LoginComponent = (function () {
    // 构造器，在这里实例化上面声明的属性
    // 如果属性作为参数，代表声明，实例化工作交给外部：包括依赖注入（typescript构造器语法）
    // router不需要在这个组件的providers进行注入，原因是已经在上层的app.module.ts里import了。
    // page 不需要注入，原因是太常用，nativescript已经全局自动注入了。
    function LoginComponent(userService, router, page) {
        this.userService = userService;
        this.router = router;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.MockUser();
    }
    // 生命周期钩子，初始化时调用。
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var textColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = textColor;
        passwordTextField.color = textColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    LoginComponent.prototype.submit = function () {
        // alert("You’re using: " + this.user.email);
        if (!this.user.isValidEmail()) {
            alert("邮箱地址无效...");
            return;
        }
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
        this.setTextFieldColors();
        var container = this.container.nativeElement; // 强转成View
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 400,
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild("email"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "email", void 0);
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFLENBQUMsc0JBQXNCO0FBQ2hHLDBDQUF5QztBQUN6QywrQ0FBaUY7QUFDakYsK0RBQTZEO0FBRTdELGdDQUErQixDQUFDLHFCQUFxQjtBQUVyRCwrQkFBOEI7QUFHOUIsbURBQXFEO0FBUXJELElBQWEsY0FBYztJQVF6QixvQkFBb0I7SUFDcEIsa0RBQWtEO0lBQ2xELCtEQUErRDtJQUMvRCwyQ0FBMkM7SUFDM0Msd0JBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLElBQVU7UUFBcEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVR4RixnQkFBVyxHQUFHLElBQUksQ0FBQztRQVVqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQy9DLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDRSxJQUFNLGNBQWMsR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUMzRCxJQUFNLGlCQUFpQixHQUFjLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBRWpFLElBQU0sU0FBUyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLGNBQWMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxTQUFT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QUFPLENBQUM7OEJBQVEsaUJBQVU7NkNBQUM7QUFDZjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBVyxpQkFBVTtnREFBQztBQU5qQyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDckUsQ0FBQztxQ0FhaUMsMEJBQVcsRUFBa0IsZUFBTSxFQUFnQixXQUFJO0dBWjdFLGNBQWMsQ0FrRjFCO0FBbEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7IC8vIE9uSW5pdDogdHPnsbvmjqXlj6PvvIzpnIDopoHlrp7njrDjgIJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXIsIE1vY2tVc2VyLCBOb3RBVXNlciwgR3JvY2VyaWVzVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiOyAvLyB0c2NvbmZpZ+mFjee9ruecgeeVpeS6huWJjemdoueahOi3r+W+hFxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjsgLy8gdHNjb25maWfphY3nva7nnIHnlaXkuobliY3pnaLnmoTot6/lvoRcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5pbXBvcnQgeyBzZXRIaW50Q29sb3IgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGludC11dGlsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLCAvLyDmnI3liqHvvIzmlbDnu4TkuK3nmoTmnI3liqHkvJrooqvlvZPmiJDnp4HmnInlsZ7mgKfms6jlhaXliLDooqvkv67ppbDnmoTnsbvnmoTmnoTpgKDlmajph4zjgIJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLCAvLyDmqKHmnb9odG1s77yM5Lmf5Y+v5Lul5YaF6IGU44CCXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXSwgLy8g5qC35byPXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmOyAvLyDov57nur/lhL/lkaIuLi5cbiAgQFZpZXdDaGlsZChcImVtYWlsXCIpIGVtYWlsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgLy8g5p6E6YCg5Zmo77yM5Zyo6L+Z6YeM5a6e5L6L5YyW5LiK6Z2i5aOw5piO55qE5bGe5oCnXG4gIC8vIOWmguaenOWxnuaAp+S9nOS4uuWPguaVsO+8jOS7o+ihqOWjsOaYju+8jOWunuS+i+WMluW3peS9nOS6pOe7meWklumDqO+8muWMheaLrOS+nei1luazqOWFpe+8iHR5cGVzY3JpcHTmnoTpgKDlmajor63ms5XvvIlcbiAgLy8gcm91dGVy5LiN6ZyA6KaB5Zyo6L+Z5Liq57uE5Lu255qEcHJvdmlkZXJz6L+b6KGM5rOo5YWl77yM5Y6f5Zug5piv5bey57uP5Zyo5LiK5bGC55qEYXBwLm1vZHVsZS50c+mHjGltcG9ydOS6huOAglxuICAvLyBwYWdlIOS4jemcgOimgeazqOWFpe+8jOWOn+WboOaYr+WkquW4uOeUqO+8jG5hdGl2ZXNjcmlwdOW3sue7j+WFqOWxgOiHquWKqOazqOWFpeS6huOAglxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IE1vY2tVc2VyKCk7XG4gIH1cblxuICAvLyDnlJ/lkb3lkajmnJ/pkqnlrZDvvIzliJ3lp4vljJbml7bosIPnlKjjgIJcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcbiAgfVxuXG4gIHNldFRleHRGaWVsZENvbG9ycygpIHtcbiAgICBjb25zdCBlbWFpbFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHBhc3N3b3JkVGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0ZXh0Q29sb3IgPSBuZXcgQ29sb3IodGhpcy5pc0xvZ2dpbmdJbiA/IFwiYmxhY2tcIiA6IFwiI0M0QUZCNFwiKTtcbiAgICBlbWFpbFRleHRGaWVsZC5jb2xvciA9IHRleHRDb2xvcjtcbiAgICBwYXNzd29yZFRleHRGaWVsZC5jb2xvciA9IHRleHRDb2xvcjtcblxuICAgIGNvbnN0IGhpbnRDb2xvciA9IG5ldyBDb2xvcih0aGlzLmlzTG9nZ2luZ0luID8gXCIjQUNBNkE3XCIgOiBcIiNDNEFGQjRcIik7XG4gICAgc2V0SGludENvbG9yKHsgdmlldzogZW1haWxUZXh0RmllbGQsIGNvbG9yOiBoaW50Q29sb3IgfSk7XG4gICAgc2V0SGludENvbG9yKHsgdmlldzogcGFzc3dvcmRUZXh0RmllbGQsIGNvbG9yOiBoaW50Q29sb3IgfSk7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgLy8gYWxlcnQoXCJZb3XigJlyZSB1c2luZzogXCIgKyB0aGlzLnVzZXIuZW1haWwpO1xuICAgIGlmICghdGhpcy51c2VyLmlzVmFsaWRFbWFpbCgpKSB7XG4gICAgICBhbGVydChcIumCrueuseWcsOWdgOaXoOaViC4uLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMuc2lnbkluKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG5cbiAgc2lnbkluKCkge1xuICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uRmFpbHVyZSA9IChlcnI6IFJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyLmpzb24oKS5lcnJvckNvZGUgPT09IDIwNSA/IFwi55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vXCIgOiBcIlwiO1xuICAgICAgYWxlcnQoXCLnmbvlvZXlpLHotKXvvIzor7fmo4Dmn6XovpPlhaV+77yM5Y6f5Zug77yaXCIgKyBtZXNzYWdlKTtcbiAgICB9O1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuICB9XG5cbiAgc2lnblVwKCkge1xuICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIGFsZXJ0KFwi5rOo5YaM5oiQ5Yqf77yBXCIpO1xuICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgfTtcbiAgICBjb25zdCBvbkZhaWx1cmUgPSAoZXJyOiBSZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGVyci5qc29uKCk7XG4gICAgICBjb25zdCBtZXNzYWdlID0ganNvbi5tZXNzYWdlO1xuICAgICAgYWxlcnQoYOazqOWGjOWksei0pS4uLuWOn+WboO+8miR7bWVzc2FnZX1gKTtcbiAgICB9O1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuICB9XG5cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgdGhpcy5zZXRUZXh0RmllbGRDb2xvcnMoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50OyAvLyDlvLrovazmiJBWaWV3XG4gICAgY29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxuICAgICAgZHVyYXRpb246IDQwMCxcbiAgICB9KTtcbiAgfVxuXG59Il19