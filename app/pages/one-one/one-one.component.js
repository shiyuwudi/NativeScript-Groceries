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
    OneOneComponent.prototype.goSearchGoods = function () {
        this.router.navigate(["/home//goodsSearch"], {
            queryParams: {
                keyword: "羽绒服",
            },
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLW9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvbmUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwQ0FBdUM7QUFDdkMsc0NBQWtDO0FBRWxDLCtEQUEyRDtBQUMzRCwrQ0FBc0U7QUFDdEUsK0RBQW9EO0FBQ3BELDJEQUEwRDtBQVExRCxJQUFhLGVBQWU7SUFDMUIseUJBQW9CLE1BQWMsRUFDZCxXQUF3QixFQUN4QixNQUFjLEVBQ2QsR0FBbUI7UUFIbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFnQjtJQUN2QyxDQUFDO0lBRU0sa0NBQVEsR0FBZjtRQUNFLFFBQVE7SUFDVixDQUFDO0lBRU0sdUNBQWEsR0FBcEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDM0MsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0UsSUFBTSxXQUFXLEdBQUcsMEJBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFTSxtQ0FBUyxHQUFoQjtRQUFBLGlCQXFCQztRQXBCQyxJQUFNLFdBQVcsR0FBRywwQkFBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFNLFNBQU8sR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBTSxPQUFLLEdBQUcsQ0FBQyxJQUFJLGVBQVEsRUFBRSxFQUFFLElBQUksY0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzNELElBQU0sT0FBTyxHQUFHO2dCQUNkLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixnQkFBZ0IsRUFBRSxVQUFVO2dCQUM1QixPQUFPLFdBQUE7YUFDUixDQUFDO1lBQ0YsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUMxQixJQUFNLENBQUMsR0FBRyxTQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLElBQU0sSUFBSSxHQUFHLE9BQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBSSxXQUFXLENBQUMsUUFBUSxvQ0FBUSxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUF2RFksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7S0FDeEMsQ0FBQztxQ0FHNEIsZUFBTTtRQUNELDBCQUFXO1FBQ2hCLHVCQUFNO1FBQ1QsNkJBQWM7R0FKNUIsZUFBZSxDQXVEM0I7QUF2RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge2FjdGlvbn0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2VyLCBaaGVuVGluZywgTXVTaVdlbiwgU2hpWXV9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi4vLi4vc2VydmljZS9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge05ldHdvcmtTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZS9tYWluLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwib25lLW9uZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vb25lLW9uZS5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9uZU9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbmV0OiBOZXR3b3JrU2VydmljZSwpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIC8vIOaQnueCueWkp+S6i+aDhVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdvU2VhcmNoR29vZHMoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZS8vZ29vZHNTZWFyY2hcIl0sIHtcclxuICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICBrZXl3b3JkOiBcIue+vee7kuacjVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGVzdExvZ2luKCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRMaWZlQnV5TGlzdCgpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ291dCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gVXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgYWxlcnQoXCLpgIDkvaDlprlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICBhbGVydChcIuaIkOWKn+mAgOWHulwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93TG9naW4oKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IFVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXCLnlITlqbdcIiwgXCLniZ/mlq/mlodcIiwgXCLnn7PlrodcIl07XHJcbiAgICAgIGNvbnN0IHVzZXJzID0gW25ldyBaaGVuVGluZygpLCBuZXcgTXVTaVdlbigpLCBuZXcgU2hpWXUoKV07XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgdGl0bGU6IFwi55m75LuA5LmI5b2V77yfXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCLkvaDopoHmgI7kuYjnmbvlvZXvvJ/vvJ9cIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIuS4jeeZu+S6hu+8jOmAl+S9oOeOqeWRolwiLFxyXG4gICAgICAgIGFjdGlvbnMsXHJcbiAgICAgIH07XHJcbiAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zdCBpID0gYWN0aW9ucy5pbmRleE9mKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKGkgIT09IC0xKSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gdXNlcnNbaV07XHJcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHVzZXIpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChgJHtjdXJyZW50VXNlci51c2VybmFtZX3lt7Lnu4/nmbvlvZXkuoYhYCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==