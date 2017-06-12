"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var user_service_1 = require("../../shared/user/user.service");
var user_1 = require("../../shared/user/user");
var logger_service_1 = require("../../service/logger.service");
var main_service_1 = require("../../service/main.service");
var OneOneComponent = (function () {
    function OneOneComponent(router, userService, logger, net) {
        this.router = router;
        this.userService = userService;
        this.logger = logger;
        this.net = net;
    }
    OneOneComponent.prototype.ngOnInit = function () {
        // 搞点大事情
    };
    OneOneComponent.prototype.testLogin = function () {
        this.userService.getLifeBuyList().subscribe();
    };
    OneOneComponent.prototype.logout = function () {
        var currentUser = user_service_1.UserService.getCurrentUser();
        if (!currentUser) {
            alert("退你妹");
        }
        else {
            this.userService.logout();
            alert("成功退出");
        }
    };
    OneOneComponent.prototype.showLogin = function () {
        var _this = this;
        var currentUser = user_service_1.UserService.getCurrentUser();
        if (!currentUser) {
            var actions_1 = ["甄婷", "牟斯文", "石宇"];
            var users_1 = [new user_1.ZhenTing(), new user_1.MuSiWen(), new user_1.ShiYu()];
            var options = {
                title: "登什么录？",
                message: "你要怎么登录？？",
                cancelButtonText: "不登了，逗你玩呢",
                actions: actions_1,
            };
            dialogs_1.action(options).then(function (result) {
                var i = actions_1.indexOf(result);
                if (i !== -1) {
                    var user = users_1[i];
                    _this.userService.login(user).subscribe();
                }
            });
        }
        else {
            alert(currentUser.username + "\u5DF2\u7ECF\u767B\u5F55\u4E86!");
        }
    };
    return OneOneComponent;
}());
OneOneComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "one-one",
        templateUrl: "./one-one.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        logger_service_1.Logger,
        main_service_1.NetworkService])
], OneOneComponent);
exports.OneOneComponent = OneOneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLW9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvbmUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwQ0FBdUM7QUFDdkMsc0NBQWtDO0FBRWxDLCtEQUE2RDtBQUM3RCwrQ0FBd0U7QUFDeEUsK0RBQXNEO0FBQ3RELDJEQUE0RDtBQVE1RCxJQUFhLGVBQWU7SUFDMUIseUJBQ1UsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLE1BQWMsRUFDZCxHQUFtQjtRQUhuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQWdCO0lBQ3hCLENBQUM7SUFDQyxrQ0FBUSxHQUFmO1FBQ0UsUUFBUTtJQUNWLENBQUM7SUFDTSxtQ0FBUyxHQUFoQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNNLGdDQUFNLEdBQWI7UUFDRSxJQUFNLFdBQVcsR0FBRywwQkFBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUNNLG1DQUFTLEdBQWhCO1FBQUEsaUJBcUJDO1FBcEJDLElBQU0sV0FBVyxHQUFHLDBCQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQU0sU0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFNLE9BQUssR0FBRyxDQUFDLElBQUksZUFBUSxFQUFFLEVBQUUsSUFBSSxjQUFPLEVBQUUsRUFBRSxJQUFJLFlBQUssRUFBRSxDQUFDLENBQUM7WUFDM0QsSUFBTSxPQUFPLEdBQUc7Z0JBQ2QsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLGdCQUFnQixFQUFFLFVBQVU7Z0JBQzVCLE9BQU8sV0FBQTthQUNSLENBQUM7WUFDRixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQzFCLElBQU0sQ0FBQyxHQUFHLFNBQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0MsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sS0FBSyxDQUFJLFdBQVcsQ0FBQyxRQUFRLG9DQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQztBQTVDWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtLQUN4QyxDQUFDO3FDQUlrQixlQUFNO1FBQ0QsMEJBQVc7UUFDaEIsdUJBQU07UUFDVCw2QkFBYztHQUxsQixlQUFlLENBNEMzQjtBQTVDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHthY3Rpb259IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciwgWmhlblRpbmcsIE11U2lXZW4sIFNoaVl1IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2xvZ2dlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOZXR3b3JrU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL21haW4uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwib25lLW9uZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL29uZS1vbmUuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBPbmVPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIsXG4gICAgcHJpdmF0ZSBuZXQ6IE5ldHdvcmtTZXJ2aWNlLFxuICAgICkge31cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIOaQnueCueWkp+S6i+aDhVxuICB9XG4gIHB1YmxpYyB0ZXN0TG9naW4oKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRMaWZlQnV5TGlzdCgpLnN1YnNjcmliZSgpO1xuICB9XG4gIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBVc2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgIGFsZXJ0KFwi6YCA5L2g5aa5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgYWxlcnQoXCLmiJDlip/pgIDlh7pcIik7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzaG93TG9naW4oKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBVc2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXCLnlITlqbdcIiwgXCLniZ/mlq/mlodcIiwgXCLnn7PlrodcIl07XG4gICAgICBjb25zdCB1c2VycyA9IFtuZXcgWmhlblRpbmcoKSwgbmV3IE11U2lXZW4oKSwgbmV3IFNoaVl1KCldO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwi55m75LuA5LmI5b2V77yfXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwi5L2g6KaB5oCO5LmI55m75b2V77yf77yfXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwi5LiN55m75LqG77yM6YCX5L2g546p5ZGiXCIsXG4gICAgICAgIGFjdGlvbnMsXG4gICAgICB9O1xuICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBpID0gYWN0aW9ucy5pbmRleE9mKHJlc3VsdCk7XG4gICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vyc1tpXTtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHVzZXIpLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoYCR7Y3VycmVudFVzZXIudXNlcm5hbWV95bey57uP55m75b2V5LqGIWApO1xuICAgIH1cbiAgfVxufVxuIl19