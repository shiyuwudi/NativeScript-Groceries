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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FuLWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQXVEO0FBQ3ZELHNEQUE2RDtBQUM3RCxrRkFBNkU7QUFDN0UsMENBQStDO0FBUS9DLElBQWEsa0JBQWtCO0lBRTNCLDRCQUEyQixjQUE4QixFQUFVLGdCQUFrQyxFQUFVLGtCQUFzQztRQUExSCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFHLENBQUM7SUFDekosY0FBYztJQUNQLHFDQUFRLEdBQWY7UUFBQSxpQkFPQztRQU5HLEtBQUs7UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ3JDLFVBQUMsTUFBTTtZQUNILEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDTyx3Q0FBVyxHQUFuQjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQzthQUN2RSxTQUFTLENBQ04sVUFBQyxJQUFJO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFDTyxtQ0FBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3Qlksa0JBQWtCO0lBUDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLG1CQUFtQjtRQUNoQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQztRQUMxRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztLQUNsQyxDQUFDO3FDQUc2Qyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBOEIseUNBQWtCO0dBRjVJLGtCQUFrQixDQTZCOUI7QUE3QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGJhcm5leSBvbiAyMDE3LzYvMTAuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01lc3NhZ2VMaXN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZXNzYWdlL21lc3NhZ2UtbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLCAvLyDliqDov5nkuKrvvIzku6XkuIvot6/lvoTkuLrnm7jlr7not6/lvoRcbiAgICBzZWxlY3RvcjogXCJzY2FuLWxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zY2FuLWxvZ2luLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc2Nhbi1sb2dpbi1jb21tb24uY3NzXCIsIFwiLi9zY2FuLWxvZ2luLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtNZXNzYWdlTGlzdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBTY2FuTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgbG9naW5TdHI6IHN0cmluZztcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBtZXNzYWdlTGlzdFNlcnZpY2U6IE1lc3NhZ2VMaXN0U2VydmljZSkge31cbiAgICAvLyBPbkluaXQg5b+F6aG75a6e546wXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICAvLyDmmoLml6BcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblN0ciA9IHBhcmFtcy5sb2dpblN0cjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuICAgIHByaXZhdGUgY2VudGVyTG9naW4oKSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IHRoaXMubG9naW5TdHIuc3BsaXQoXCJxcl9zZXNzaW9uX2lkPVwiKVsxXS5zcGxpdChcIixcIilbMF07XG4gICAgICAgIHRoaXMubWVzc2FnZUxpc3RTZXJ2aWNlLnJlcXVlc3QoXCIvYXBwL2J1eWVyL2FwcF9xcl9sb2dpbi5odG1cIiwge3FyX2lkOiBzdHJ9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXQgPT09IDEwMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwi55S16ISR56uv55m75b2V5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCLnlLXohJHnq6/nmbvlvZXlpLHotKVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjYW5jbGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxufVxuIl19