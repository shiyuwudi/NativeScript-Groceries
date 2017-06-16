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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFLENBQUMsc0JBQXNCO0FBQ2hHLDBDQUF5QztBQUN6QywrQ0FBaUY7QUFDakYsK0RBQTZEO0FBRTdELGdDQUErQixDQUFDLHFCQUFxQjtBQUVyRCwrQkFBOEI7QUFHOUIsbURBQXFEO0FBUXJELElBQWEsY0FBYztJQVF6QixvQkFBb0I7SUFDcEIsa0RBQWtEO0lBQ2xELCtEQUErRDtJQUMvRCwyQ0FBMkM7SUFDM0Msd0JBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLElBQVU7UUFBcEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVR4RixnQkFBVyxHQUFHLElBQUksQ0FBQztRQVVqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQy9DLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDRSxJQUFNLGNBQWMsR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUMzRCxJQUFNLGlCQUFpQixHQUFjLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBRWpFLElBQU0sU0FBUyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLGNBQWMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxTQUFT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QUFPLENBQUM7OEJBQVEsaUJBQVU7NkNBQUM7QUFDZjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBVyxpQkFBVTtnREFBQztBQU5qQyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDckUsQ0FBQztxQ0FhaUMsMEJBQVcsRUFBa0IsZUFBTSxFQUFnQixXQUFJO0dBWjdFLGNBQWMsQ0FrRjFCO0FBbEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7IC8vIE9uSW5pdDogdHPnsbvmjqXlj6PvvIzpnIDopoHlrp7njrDjgIJcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyLCBNb2NrVXNlciwgTm90QVVzZXIsIEdyb2Nlcmllc1VzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjsgLy8gdHNjb25maWfphY3nva7nnIHnlaXkuobliY3pnaLnmoTot6/lvoRcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjsgLy8gdHNjb25maWfphY3nva7nnIHnlaXkuobliY3pnaLnmoTot6/lvoRcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuXHJcbmltcG9ydCB7IHNldEhpbnRDb2xvciB9IGZyb20gXCIuLi8uLi91dGlscy9oaW50LXV0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSwgLy8g5pyN5Yqh77yM5pWw57uE5Lit55qE5pyN5Yqh5Lya6KKr5b2T5oiQ56eB5pyJ5bGe5oCn5rOo5YWl5Yiw6KKr5L+u6aWw55qE57G755qE5p6E6YCg5Zmo6YeM44CCXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLCAvLyDmqKHmnb9odG1s77yM5Lmf5Y+v5Lul5YaF6IGU44CCXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdLCAvLyDmoLflvI9cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdXNlcjogVXNlcjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7IC8vIOi/nue6v+WEv+WRoi4uLlxyXG4gIEBWaWV3Q2hpbGQoXCJlbWFpbFwiKSBlbWFpbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8vIOaehOmAoOWZqO+8jOWcqOi/memHjOWunuS+i+WMluS4iumdouWjsOaYjueahOWxnuaAp1xyXG4gIC8vIOWmguaenOWxnuaAp+S9nOS4uuWPguaVsO+8jOS7o+ihqOWjsOaYju+8jOWunuS+i+WMluW3peS9nOS6pOe7meWklumDqO+8muWMheaLrOS+nei1luazqOWFpe+8iHR5cGVzY3JpcHTmnoTpgKDlmajor63ms5XvvIlcclxuICAvLyByb3V0ZXLkuI3pnIDopoHlnKjov5nkuKrnu4Tku7bnmoRwcm92aWRlcnPov5vooYzms6jlhaXvvIzljp/lm6DmmK/lt7Lnu4/lnKjkuIrlsYLnmoRhcHAubW9kdWxlLnRz6YeMaW1wb3J05LqG44CCXHJcbiAgLy8gcGFnZSDkuI3pnIDopoHms6jlhaXvvIzljp/lm6DmmK/lpKrluLjnlKjvvIxuYXRpdmVzY3JpcHTlt7Lnu4/lhajlsYDoh6rliqjms6jlhaXkuobjgIJcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgTW9ja1VzZXIoKTtcclxuICB9XHJcblxyXG4gIC8vIOeUn+WRveWRqOacn+mSqeWtkO+8jOWIneWni+WMluaXtuiwg+eUqOOAglxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xyXG4gIH1cclxuXHJcbiAgc2V0VGV4dEZpZWxkQ29sb3JzKCkge1xyXG4gICAgY29uc3QgZW1haWxUZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZW1haWwubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IHBhc3N3b3JkVGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgdGV4dENvbG9yID0gbmV3IENvbG9yKHRoaXMuaXNMb2dnaW5nSW4gPyBcImJsYWNrXCIgOiBcIiNDNEFGQjRcIik7XHJcbiAgICBlbWFpbFRleHRGaWVsZC5jb2xvciA9IHRleHRDb2xvcjtcclxuICAgIHBhc3N3b3JkVGV4dEZpZWxkLmNvbG9yID0gdGV4dENvbG9yO1xyXG5cclxuICAgIGNvbnN0IGhpbnRDb2xvciA9IG5ldyBDb2xvcih0aGlzLmlzTG9nZ2luZ0luID8gXCIjQUNBNkE3XCIgOiBcIiNDNEFGQjRcIik7XHJcbiAgICBzZXRIaW50Q29sb3IoeyB2aWV3OiBlbWFpbFRleHRGaWVsZCwgY29sb3I6IGhpbnRDb2xvciB9KTtcclxuICAgIHNldEhpbnRDb2xvcih7IHZpZXc6IHBhc3N3b3JkVGV4dEZpZWxkLCBjb2xvcjogaGludENvbG9yIH0pO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgLy8gYWxlcnQoXCJZb3XigJlyZSB1c2luZzogXCIgKyB0aGlzLnVzZXIuZW1haWwpO1xyXG4gICAgaWYgKCF0aGlzLnVzZXIuaXNWYWxpZEVtYWlsKCkpIHtcclxuICAgICAgYWxlcnQoXCLpgq7nrrHlnLDlnYDml6DmlYguLi5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgIHRoaXMuc2lnbkluKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2lnbkluKCkge1xyXG4gICAgY29uc3Qgb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25GYWlsdXJlID0gKGVycjogUmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVyci5qc29uKCkuZXJyb3JDb2RlID09PSAyMDUgPyBcIueUqOaIt+WQjeaIluWvhueggemUmeivr1wiIDogXCJcIjtcclxuICAgICAgYWxlcnQoXCLnmbvlvZXlpLHotKXvvIzor7fmo4Dmn6XovpPlhaV+77yM5Y6f5Zug77yaXCIgKyBtZXNzYWdlKTtcclxuICAgIH07XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcclxuICB9XHJcblxyXG4gIHNpZ25VcCgpIHtcclxuICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgYWxlcnQoXCLms6jlhozmiJDlip/vvIFcIik7XHJcbiAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uRmFpbHVyZSA9IChlcnI6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBlcnIuanNvbigpO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0ganNvbi5tZXNzYWdlO1xyXG4gICAgICBhbGVydChg5rOo5YaM5aSx6LSlLi4u5Y6f5Zug77yaJHttZXNzYWdlfWApO1xyXG4gICAgfTtcclxuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgIHRoaXMuc2V0VGV4dEZpZWxkQ29sb3JzKCk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50OyAvLyDlvLrovazmiJBWaWV3XHJcbiAgICBjb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpIDogbmV3IENvbG9yKFwiIzMwMTIxN1wiKSxcclxuICAgICAgZHVyYXRpb246IDQwMCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0iXX0=