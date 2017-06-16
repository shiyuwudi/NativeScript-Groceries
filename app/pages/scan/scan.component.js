"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by barney on 2017/6/10.
 */
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var router_1 = require("@angular/router");
var ScanComponent = (function () {
    function ScanComponent(router) {
        this.router = router;
        this.barcodescanner = new nativescript_barcodescanner_1.BarcodeScanner();
    }
    // OnInit 必须实现
    ScanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.barcodescanner.scan({
            formats: "QR_CODE, EAN_13",
            beepOnScan: true,
            openSettingsIfPermissionWasPreviouslyDenied: true,
        }).then(function (result) {
            if (result.format === "org.iso.QRCode") {
                var scanStr = result.text;
                // 二维码
                // 判断是否包含 头'http:'
                var regex = "http";
                // 判断是否包含 头'ssid:'
                var ssid = "ssid";
                if (scanStr.indexOf(regex) === 0) {
                    // 不用写
                }
                else if (scanStr.indexOf(ssid) === 0) {
                    var arr = scanStr.split(";");
                    var arrInfoHead = arr[0].split(":");
                    var arrInfoFoot = arr[1].split(":");
                    scanStr = "ssid: " + arrInfoHead[1] + " \n password:"
                        + arrInfoFoot[1];
                }
                // 首先 判断是扫码登陆还是商品跳转
                if (scanStr.includes("qr_session_id=")) {
                    var arr = scanStr.split("qr_session_id=");
                    if (arr.length === 0) {
                        // 空数组 不用写
                    }
                    else if (arr.length === 1) {
                        // 商品分支
                    }
                    else {
                        // 登录分支
                        _this.scanLogin(scanStr);
                    }
                }
                else if (scanStr.includes("goods_")) {
                    // 商品分支
                }
            }
            else {
                // 条形码
                alert({
                    title: "Scan result",
                    message: "Format: " + result.format + ",Value: " + result.text,
                    okButtonText: "OK",
                });
            }
        });
    };
    // 登录分支
    ScanComponent.prototype.scanLogin = function (loginStr) {
        var loginRegex = "iskyshop_login\\.htm\\?qr_session_id=([A-Za-z0-9_-])+";
        // 这个判断的正则表达式待定
        if (loginStr.match(loginRegex) === null) {
            alert(loginStr.match(loginRegex));
        }
        else {
            this.router.navigate(["/scan-login"], { queryParams: { loginStr: loginStr } });
            // this.router.navigate(["/scan-login"]);
        }
    };
    return ScanComponent;
}());
ScanComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "scan",
        templateUrl: "./scan.html",
        styleUrls: ["./scan-common.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ScanComponent);
exports.ScanComponent = ScanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQWtEO0FBQ2xELDJFQUE2RDtBQUM3RCwwQ0FBeUM7QUFRekMsSUFBYSxhQUFhO0lBRXRCLHVCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQURqQyxtQkFBYyxHQUFHLElBQUksNENBQWMsRUFBRSxDQUFDO0lBQ0YsQ0FBQztJQUM3QyxjQUFjO0lBQ1AsZ0NBQVEsR0FBZjtRQUFBLGlCQThDQztRQTdDRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLDJDQUEyQyxFQUFFLElBQUk7U0FDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDUCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDMUIsTUFBTTtnQkFDTixrQkFBa0I7Z0JBQ2xCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQztnQkFDckIsa0JBQWtCO2dCQUNsQixJQUFNLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFDVixDQUFDO2dCQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQy9CLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLE9BQU8sR0FBRyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLGVBQWU7MEJBQy9DLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxtQkFBbUI7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDNUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixVQUFVO29CQUNkLENBQUM7b0JBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsT0FBTztvQkFDWCxDQUFDO29CQUFBLElBQUksQ0FBQyxDQUFDO3dCQUNILE9BQU87d0JBQ1AsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDTCxDQUFDO2dCQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkMsT0FBTztnQkFDWCxDQUFDO1lBQ0wsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNILE1BQU07Z0JBQ04sS0FBSyxDQUFDO29CQUNGLEtBQUssRUFBRSxhQUFhO29CQUNwQixPQUFPLEVBQUUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJO29CQUM5RCxZQUFZLEVBQUUsSUFBSTtpQkFDckIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUNELE9BQU87SUFDQyxpQ0FBUyxHQUFqQixVQUFrQixRQUFnQjtRQUM5QixJQUFNLFVBQVUsR0FBRyx1REFBdUQsQ0FBQztRQUMzRSxlQUFlO1FBQ2YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLHlDQUF5QztRQUM3QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTlERCxJQThEQztBQTlEWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDbkMsQ0FBQztxQ0FHcUMsZUFBTTtHQUZoQyxhQUFhLENBOER6QjtBQTlEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJhcm5leSBvbiAyMDE3LzYvMTAuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsIC8vIOWKoOi/meS4qu+8jOS7peS4i+i3r+W+hOS4uuebuOWvuei3r+W+hFxyXG4gICAgc2VsZWN0b3I6IFwic2NhblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zY2FuLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zY2FuLWNvbW1vbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2FuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgYmFyY29kZXNjYW5uZXIgPSBuZXcgQmFyY29kZVNjYW5uZXIoKTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG4gICAgLy8gT25Jbml0IOW/hemhu+WunueOsFxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYmFyY29kZXNjYW5uZXIuc2Nhbih7XHJcbiAgICAgICAgICAgIGZvcm1hdHM6IFwiUVJfQ09ERSwgRUFOXzEzXCIsXHJcbiAgICAgICAgICAgIGJlZXBPblNjYW46IHRydWUsICAgICAgICAgICAgIC8vIFBsYXkgb3IgU3VwcHJlc3MgYmVlcCBvbiBzY2FuIChkZWZhdWx0IHRydWUpXHJcbiAgICAgICAgICAgIG9wZW5TZXR0aW5nc0lmUGVybWlzc2lvbldhc1ByZXZpb3VzbHlEZW5pZWQ6IHRydWUsIC8vIE9uIGlPUyB5b3UgY2FuIHNlbmQgdGhlIHVzZXIgdG8gdGhlIHNldHRpbmdzIGFwcCBpZiBhY2Nlc3Mgd2FzIHByZXZpb3VzbHkgZGVuaWVkXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmZvcm1hdCA9PT0gXCJvcmcuaXNvLlFSQ29kZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYW5TdHIgPSByZXN1bHQudGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkuoznu7TnoIFcclxuICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3mmK/lkKbljIXlkKsg5aS0J2h0dHA6J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gXCJodHRwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat5piv5ZCm5YyF5ZCrIOWktCdzc2lkOidcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzc2lkID0gXCJzc2lkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjYW5TdHIuaW5kZXhPZihyZWdleCkgPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4jeeUqOWGmVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmIChzY2FuU3RyLmluZGV4T2Yoc3NpZCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gc2NhblN0ci5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyckluZm9IZWFkID0gYXJyWzBdLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJySW5mb0Zvb3QgPSBhcnJbMV0uc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FuU3RyID0gXCJzc2lkOiBcIiArIGFyckluZm9IZWFkWzFdICsgXCIgXFxuIHBhc3N3b3JkOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGFyckluZm9Gb290WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDpppblhYgg5Yik5pat5piv5omr56CB55m76ZmG6L+Y5piv5ZWG5ZOB6Lez6L2sXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjYW5TdHIuaW5jbHVkZXMoXCJxcl9zZXNzaW9uX2lkPVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBzY2FuU3RyLnNwbGl0KFwicXJfc2Vzc2lvbl9pZD1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnqbrmlbDnu4Qg5LiN55So5YaZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmIChhcnIubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDllYblk4HliIbmlK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55m75b2V5YiG5pSvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYW5Mb2dpbihzY2FuU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmIChzY2FuU3RyLmluY2x1ZGVzKFwiZ29vZHNfXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWVhuWTgeWIhuaUr1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmnaHlvaLnoIFcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNjYW4gcmVzdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRm9ybWF0OiBcIiArIHJlc3VsdC5mb3JtYXQgKyBcIixWYWx1ZTogXCIgKyByZXN1bHQudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIOeZu+W9leWIhuaUr1xyXG4gICAgcHJpdmF0ZSBzY2FuTG9naW4obG9naW5TdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luUmVnZXggPSBcImlza3lzaG9wX2xvZ2luXFxcXC5odG1cXFxcP3FyX3Nlc3Npb25faWQ9KFtBLVphLXowLTlfLV0pK1wiO1xyXG4gICAgICAgIC8vIOi/meS4quWIpOaWreeahOato+WImeihqOi+vuW8j+W+heWumlxyXG4gICAgICAgIGlmIChsb2dpblN0ci5tYXRjaChsb2dpblJlZ2V4KSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhbGVydChsb2dpblN0ci5tYXRjaChsb2dpblJlZ2V4KSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2Nhbi1sb2dpblwiXSwgeyBxdWVyeVBhcmFtczogeyBsb2dpblN0ciB9IH0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2Nhbi1sb2dpblwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==