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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLW9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvbmUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwQ0FBdUM7QUFDdkMsc0NBQWtDO0FBRWxDLCtEQUEyRDtBQUMzRCwrQ0FBc0U7QUFDdEUsK0RBQW9EO0FBQ3BELDJEQUEwRDtBQVExRCxJQUFhLGVBQWU7SUFDMUIseUJBQW9CLE1BQWMsRUFDZCxXQUF3QixFQUN4QixNQUFjLEVBQ2QsR0FBbUI7UUFIbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFnQjtJQUN2QyxDQUFDO0lBRU0sa0NBQVEsR0FBZjtRQUNFLFFBQVE7SUFDVixDQUFDO0lBRU0sdUNBQWEsR0FBcEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDM0MsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0UsSUFBTSxXQUFXLEdBQUcsMEJBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFTSxtQ0FBUyxHQUFoQjtRQUFBLGlCQXFCQztRQXBCQyxJQUFNLFdBQVcsR0FBRywwQkFBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFNLFNBQU8sR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBTSxPQUFLLEdBQUcsQ0FBQyxJQUFJLGVBQVEsRUFBRSxFQUFFLElBQUksY0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzNELElBQU0sT0FBTyxHQUFHO2dCQUNkLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixnQkFBZ0IsRUFBRSxVQUFVO2dCQUM1QixPQUFPLFdBQUE7YUFDUixDQUFDO1lBQ0YsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUMxQixJQUFNLENBQUMsR0FBRyxTQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLElBQU0sSUFBSSxHQUFHLE9BQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBSSxXQUFXLENBQUMsUUFBUSxvQ0FBUSxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUF2RFksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7S0FDeEMsQ0FBQztxQ0FHNEIsZUFBTTtRQUNELDBCQUFXO1FBQ2hCLHVCQUFNO1FBQ1QsNkJBQWM7R0FKNUIsZUFBZSxDQXVEM0I7QUF2RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7YWN0aW9ufSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXIsIFpoZW5UaW5nLCBNdVNpV2VuLCBTaGlZdX0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi4vLi4vc2VydmljZS9sb2dnZXIuc2VydmljZVwiO1xuaW1wb3J0IHtOZXR3b3JrU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvbWFpbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJvbmUtb25lXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vb25lLW9uZS5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIE9uZU9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLFxuICAgICAgICAgICAgICBwcml2YXRlIG5ldDogTmV0d29ya1NlcnZpY2UpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyDmkJ7ngrnlpKfkuovmg4VcbiAgfVxuXG4gIHB1YmxpYyBnb1NlYXJjaEdvb2RzKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lLy9nb29kc1NlYXJjaFwiXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAga2V5d29yZDogXCLnvr3nu5LmnI1cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdGVzdExvZ2luKCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0TGlmZUJ1eUxpc3QoKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBVc2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgIGFsZXJ0KFwi6YCA5L2g5aa5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgYWxlcnQoXCLmiJDlip/pgIDlh7pcIik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3dMb2dpbigpIHtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IFVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IFtcIueUhOWpt1wiLCBcIueJn+aWr+aWh1wiLCBcIuefs+Wuh1wiXTtcbiAgICAgIGNvbnN0IHVzZXJzID0gW25ldyBaaGVuVGluZygpLCBuZXcgTXVTaVdlbigpLCBuZXcgU2hpWXUoKV07XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogXCLnmbvku4DkuYjlvZXvvJ9cIixcbiAgICAgICAgbWVzc2FnZTogXCLkvaDopoHmgI7kuYjnmbvlvZXvvJ/vvJ9cIixcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCLkuI3nmbvkuobvvIzpgJfkvaDnjqnlkaJcIixcbiAgICAgICAgYWN0aW9ucyxcbiAgICAgIH07XG4gICAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGkgPSBhY3Rpb25zLmluZGV4T2YocmVzdWx0KTtcbiAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IHVzZXJzW2ldO1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odXNlcikuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChgJHtjdXJyZW50VXNlci51c2VybmFtZX3lt7Lnu4/nmbvlvZXkuoYhYCk7XG4gICAgfVxuICB9XG59XG4iXX0=