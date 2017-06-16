"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by barney on 2017/6/10.
 */
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var message_list_service_1 = require("../../shared/message/message-list.service");
var router_2 = require("@angular/router");
var ScanLoginComponent = (function () {
    function ScanLoginComponent(activatedRoute, routerExtensions, messageListService) {
        this.activatedRoute = activatedRoute;
        this.routerExtensions = routerExtensions;
        this.messageListService = messageListService;
    }
    // OnInit 必须实现
    ScanLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 暂无
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.loginStr = params.loginStr;
        });
    };
    ScanLoginComponent.prototype.centerLogin = function () {
        var _this = this;
        var str = this.loginStr.split("qr_session_id=")[1].split(",")[0];
        this.messageListService.request("/app/buyer/app_qr_login.htm", { qr_id: str })
            .subscribe(function (data) {
            if (data.ret === 100) {
                alert("电脑端登录成功");
                _this.routerExtensions.back();
            }
            else {
                alert("电脑端登录失败");
            }
        });
    };
    ScanLoginComponent.prototype.cancle = function () {
        this.routerExtensions.back();
    };
    return ScanLoginComponent;
}());
ScanLoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "scan-login",
        templateUrl: "./scan-login.html",
        styleUrls: ["./scan-login-common.css", "./scan-login.css"],
        providers: [message_list_service_1.MessageListService],
    }),
    __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.RouterExtensions, message_list_service_1.MessageListService])
], ScanLoginComponent);
exports.ScanLoginComponent = ScanLoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FuLWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQXVEO0FBQ3ZELHNEQUE2RDtBQUM3RCxrRkFBNkU7QUFDN0UsMENBQStDO0FBUS9DLElBQWEsa0JBQWtCO0lBRTNCLDRCQUEyQixjQUE4QixFQUFVLGdCQUFrQyxFQUFVLGtCQUFzQztRQUExSCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFHLENBQUM7SUFDekosY0FBYztJQUNQLHFDQUFRLEdBQWY7UUFBQSxpQkFPQztRQU5HLEtBQUs7UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ3JDLFVBQUMsTUFBTTtZQUNILEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDTyx3Q0FBVyxHQUFuQjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQzthQUN2RSxTQUFTLENBQ04sVUFBQyxJQUFJO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFDTyxtQ0FBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3Qlksa0JBQWtCO0lBUDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLG1CQUFtQjtRQUNoQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQztRQUMxRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztLQUNsQyxDQUFDO3FDQUc2Qyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBOEIseUNBQWtCO0dBRjVJLGtCQUFrQixDQTZCOUI7QUE3QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYmFybmV5IG9uIDIwMTcvNi8xMC5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtNZXNzYWdlTGlzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVzc2FnZS9tZXNzYWdlLWxpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCwgLy8g5Yqg6L+Z5Liq77yM5Lul5LiL6Lev5b6E5Li655u45a+56Lev5b6EXHJcbiAgICBzZWxlY3RvcjogXCJzY2FuLWxvZ2luXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NjYW4tbG9naW4uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NjYW4tbG9naW4tY29tbW9uLmNzc1wiLCBcIi4vc2Nhbi1sb2dpbi5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtNZXNzYWdlTGlzdFNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2NhbkxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgbG9naW5TdHI6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIG1lc3NhZ2VMaXN0U2VydmljZTogTWVzc2FnZUxpc3RTZXJ2aWNlKSB7fVxyXG4gICAgLy8gT25Jbml0IOW/hemhu+WunueOsFxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIOaaguaXoFxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3RyID0gcGFyYW1zLmxvZ2luU3RyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNlbnRlckxvZ2luKCkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHRoaXMubG9naW5TdHIuc3BsaXQoXCJxcl9zZXNzaW9uX2lkPVwiKVsxXS5zcGxpdChcIixcIilbMF07XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlTGlzdFNlcnZpY2UucmVxdWVzdChcIi9hcHAvYnV5ZXIvYXBwX3FyX2xvZ2luLmh0bVwiLCB7cXJfaWQ6IHN0cn0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJldCA9PT0gMTAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIueUteiEkeerr+eZu+W9leaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwi55S16ISR56uv55m75b2V5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhbmNsZSgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==