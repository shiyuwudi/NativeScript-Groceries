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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQWtEO0FBQ2xELDJFQUE2RDtBQUM3RCwwQ0FBeUM7QUFRekMsSUFBYSxhQUFhO0lBRXRCLHVCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQURqQyxtQkFBYyxHQUFHLElBQUksNENBQWMsRUFBRSxDQUFDO0lBQ0YsQ0FBQztJQUM3QyxjQUFjO0lBQ1AsZ0NBQVEsR0FBZjtRQUFBLGlCQThDQztRQTdDRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLDJDQUEyQyxFQUFFLElBQUk7U0FDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDUCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDMUIsTUFBTTtnQkFDTixrQkFBa0I7Z0JBQ2xCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQztnQkFDckIsa0JBQWtCO2dCQUNsQixJQUFNLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFDVixDQUFDO2dCQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQy9CLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLE9BQU8sR0FBRyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLGVBQWU7MEJBQy9DLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxtQkFBbUI7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDNUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixVQUFVO29CQUNkLENBQUM7b0JBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsT0FBTztvQkFDWCxDQUFDO29CQUFBLElBQUksQ0FBQyxDQUFDO3dCQUNILE9BQU87d0JBQ1AsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDTCxDQUFDO2dCQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkMsT0FBTztnQkFDWCxDQUFDO1lBQ0wsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNILE1BQU07Z0JBQ04sS0FBSyxDQUFDO29CQUNGLEtBQUssRUFBRSxhQUFhO29CQUNwQixPQUFPLEVBQUUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJO29CQUM5RCxZQUFZLEVBQUUsSUFBSTtpQkFDckIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUNELE9BQU87SUFDQyxpQ0FBUyxHQUFqQixVQUFrQixRQUFnQjtRQUM5QixJQUFNLFVBQVUsR0FBRyx1REFBdUQsQ0FBQztRQUMzRSxlQUFlO1FBQ2YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLHlDQUF5QztRQUM3QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTlERCxJQThEQztBQTlEWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDbkMsQ0FBQztxQ0FHcUMsZUFBTTtHQUZoQyxhQUFhLENBOER6QjtBQTlEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBiYXJuZXkgb24gMjAxNy82LzEwLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCwgLy8g5Yqg6L+Z5Liq77yM5Lul5LiL6Lev5b6E5Li655u45a+56Lev5b6EXG4gICAgc2VsZWN0b3I6IFwic2NhblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2Nhbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NjYW4tY29tbW9uLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgU2NhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBiYXJjb2Rlc2Nhbm5lciA9IG5ldyBCYXJjb2RlU2Nhbm5lcigpO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuICAgIC8vIE9uSW5pdCDlv4Xpobvlrp7njrBcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFyY29kZXNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICBmb3JtYXRzOiBcIlFSX0NPREUsIEVBTl8xM1wiLFxuICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSwgICAgICAgICAgICAgLy8gUGxheSBvciBTdXBwcmVzcyBiZWVwIG9uIHNjYW4gKGRlZmF1bHQgdHJ1ZSlcbiAgICAgICAgICAgIG9wZW5TZXR0aW5nc0lmUGVybWlzc2lvbldhc1ByZXZpb3VzbHlEZW5pZWQ6IHRydWUsIC8vIE9uIGlPUyB5b3UgY2FuIHNlbmQgdGhlIHVzZXIgdG8gdGhlIHNldHRpbmdzIGFwcCBpZiBhY2Nlc3Mgd2FzIHByZXZpb3VzbHkgZGVuaWVkXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZm9ybWF0ID09PSBcIm9yZy5pc28uUVJDb2RlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYW5TdHIgPSByZXN1bHQudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8g5LqM57u056CBXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaYr+WQpuWMheWQqyDlpLQnaHR0cDonXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gXCJodHRwXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaYr+WQpuWMheWQqyDlpLQnc3NpZDonXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNzaWQgPSBcInNzaWRcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjYW5TdHIuaW5kZXhPZihyZWdleCkgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDkuI3nlKjlhplcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKHNjYW5TdHIuaW5kZXhPZihzc2lkKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gc2NhblN0ci5zcGxpdChcIjtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJJbmZvSGVhZCA9IGFyclswXS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJJbmZvRm9vdCA9IGFyclsxXS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FuU3RyID0gXCJzc2lkOiBcIiArIGFyckluZm9IZWFkWzFdICsgXCIgXFxuIHBhc3N3b3JkOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBhcnJJbmZvRm9vdFsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDpppblhYgg5Yik5pat5piv5omr56CB55m76ZmG6L+Y5piv5ZWG5ZOB6Lez6L2sXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2FuU3RyLmluY2x1ZGVzKFwicXJfc2Vzc2lvbl9pZD1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IHNjYW5TdHIuc3BsaXQoXCJxcl9zZXNzaW9uX2lkPVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g56m65pWw57uEIOS4jeeUqOWGmVxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKGFyci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDllYblk4HliIbmlK9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnmbvlvZXliIbmlK9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYW5Mb2dpbihzY2FuU3RyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKHNjYW5TdHIuaW5jbHVkZXMoXCJnb29kc19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWVhuWTgeWIhuaUr1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDmnaHlvaLnoIFcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2NhbiByZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRm9ybWF0OiBcIiArIHJlc3VsdC5mb3JtYXQgKyBcIixWYWx1ZTogXCIgKyByZXN1bHQudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyDnmbvlvZXliIbmlK9cbiAgICBwcml2YXRlIHNjYW5Mb2dpbihsb2dpblN0cjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxvZ2luUmVnZXggPSBcImlza3lzaG9wX2xvZ2luXFxcXC5odG1cXFxcP3FyX3Nlc3Npb25faWQ9KFtBLVphLXowLTlfLV0pK1wiO1xuICAgICAgICAvLyDov5nkuKrliKTmlq3nmoTmraPliJnooajovr7lvI/lvoXlrppcbiAgICAgICAgaWYgKGxvZ2luU3RyLm1hdGNoKGxvZ2luUmVnZXgpID09PSBudWxsKSB7XG4gICAgICAgICAgICBhbGVydChsb2dpblN0ci5tYXRjaChsb2dpblJlZ2V4KSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zY2FuLWxvZ2luXCJdLCB7IHF1ZXJ5UGFyYW1zOiB7IGxvZ2luU3RyIH0gfSk7XG4gICAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2Nhbi1sb2dpblwiXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=