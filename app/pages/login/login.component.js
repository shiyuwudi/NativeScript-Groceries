"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core"); // OnInit: ts类接口，需要实现。
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var page_1 = require("ui/page"); // tsconfig配置省略了前面的路径
var color_1 = require("color");
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
        this.user = new user_1.GroceriesUser();
    }
    // 生命周期钩子，初始化时调用。
    LoginComponent.prototype.ngOnInit = function () {
        this.page.statusBarStyle = "light";
        this.page.backgroundImage = "res://bg_login";
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFLENBQUMsc0JBQXNCO0FBQ2hHLDBDQUF5QztBQUN6QywrQ0FBaUY7QUFDakYsK0RBQTZEO0FBRTdELGdDQUErQixDQUFDLHFCQUFxQjtBQUNyRCwrQkFBOEI7QUFTOUIsSUFBYSxjQUFjO0lBTXpCLG9CQUFvQjtJQUNwQixrREFBa0Q7SUFDbEQsK0RBQStEO0lBQy9ELDJDQUEyQztJQUMzQyx3QkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsSUFBVTtRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBUHhGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBUWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxvQkFBYSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQy9DLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsNkNBQTZDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQyxJQUFNLFNBQVMsR0FBRztZQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDO1FBQ0YsSUFBTSxTQUFTLEdBQUcsVUFBQyxHQUFhO1lBQzlCLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEtBQUssR0FBRyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDL0QsS0FBSyxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBV0M7UUFWQyxJQUFNLFNBQVMsR0FBRztZQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBQ0YsSUFBTSxTQUFTLEdBQUcsVUFBQyxHQUFhO1lBQzlCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLEtBQUssQ0FBQyxrREFBYSxPQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQU0sU0FBUyxHQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVTtRQUNoRSxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2hCLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUM3RSxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxxQkFBQztBQUFELENBQUMsQUE5REQsSUE4REM7QUExRHlCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2lEQUFDO0FBSm5DLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNyRSxDQUFDO3FDQVdpQywwQkFBVyxFQUFrQixlQUFNLEVBQWdCLFdBQUk7R0FWN0UsY0FBYyxDQThEMUI7QUE5RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjsgLy8gT25Jbml0OiB0c+exu+aOpeWPo++8jOmcgOimgeWunueOsOOAglxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciwgTW9ja1VzZXIsIE5vdEFVc2VyLCBHcm9jZXJpZXNVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7IC8vIHRzY29uZmln6YWN572u55yB55Wl5LqG5YmN6Z2i55qE6Lev5b6EXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sIC8vIOacjeWKoe+8jOaVsOe7hOS4reeahOacjeWKoeS8muiiq+W9k+aIkOengeacieWxnuaAp+azqOWFpeWIsOiiq+S/rumlsOeahOexu+eahOaehOmAoOWZqOmHjOOAglxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsIC8vIOaooeadv2h0bWzvvIzkuZ/lj6/ku6XlhoXogZTjgIJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdLCAvLyDmoLflvI9cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7IC8vIOi/nue6v+WEv+WRoi4uLlxuXG4gIC8vIOaehOmAoOWZqO+8jOWcqOi/memHjOWunuS+i+WMluS4iumdouWjsOaYjueahOWxnuaAp1xuICAvLyDlpoLmnpzlsZ7mgKfkvZzkuLrlj4LmlbDvvIzku6Pooajlo7DmmI7vvIzlrp7kvovljJblt6XkvZzkuqTnu5nlpJbpg6jvvJrljIXmi6zkvp3otZbms6jlhaXvvIh0eXBlc2NyaXB05p6E6YCg5Zmo6K+t5rOV77yJXG4gIC8vIHJvdXRlcuS4jemcgOimgeWcqOi/meS4que7hOS7tueahHByb3ZpZGVyc+i/m+ihjOazqOWFpe+8jOWOn+WboOaYr+W3sue7j+WcqOS4iuWxgueahGFwcC5tb2R1bGUudHPph4xpbXBvcnTkuobjgIJcbiAgLy8gcGFnZSDkuI3pnIDopoHms6jlhaXvvIzljp/lm6DmmK/lpKrluLjnlKjvvIxuYXRpdmVzY3JpcHTlt7Lnu4/lhajlsYDoh6rliqjms6jlhaXkuobjgIJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBHcm9jZXJpZXNVc2VyKCk7XG4gIH1cblxuICAvLyDnlJ/lkb3lkajmnJ/pkqnlrZDvvIzliJ3lp4vljJbml7bosIPnlKjjgIJcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLnN0YXR1c0JhclN0eWxlID0gXCJsaWdodFwiO1xuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgLy8gYWxlcnQoXCJZb3XigJlyZSB1c2luZzogXCIgKyB0aGlzLnVzZXIuZW1haWwpO1xuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICB0aGlzLnNpZ25JbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpZ25VcCgpO1xuICAgIH1cbiAgfVxuXG4gIHNpZ25JbigpIHtcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7XG4gICAgfTtcbiAgICBjb25zdCBvbkZhaWx1cmUgPSAoZXJyOiBSZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVyci5qc29uKCkuZXJyb3JDb2RlID09PSAyMDUgPyBcIueUqOaIt+WQjeaIluWvhueggemUmeivr1wiIDogXCJcIjtcbiAgICAgIGFsZXJ0KFwi55m75b2V5aSx6LSl77yM6K+35qOA5p+l6L6T5YWlfu+8jOWOn+WboO+8mlwiICsgbWVzc2FnZSk7XG4gICAgfTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICBhbGVydChcIuazqOWGjOaIkOWKn++8gVwiKTtcbiAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgIH07XG4gICAgY29uc3Qgb25GYWlsdXJlID0gKGVycjogUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBlcnIuanNvbigpO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGpzb24ubWVzc2FnZTtcbiAgICAgIGFsZXJ0KGDms6jlhozlpLHotKUuLi7ljp/lm6DvvJoke21lc3NhZ2V9YCk7XG4gICAgfTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikuc3Vic2NyaWJlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcbiAgfVxuXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IDxWaWV3PnRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7IC8vIOW8uui9rOaIkFZpZXdcbiAgICBjb250YWluZXIuYW5pbWF0ZSh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSA6IG5ldyBDb2xvcihcIiMzMDEyMTdcIiksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgIH0pO1xuICB9XG5cbn0iXX0=