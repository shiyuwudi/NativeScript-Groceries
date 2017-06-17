/**
 * Created by barney on 2017/6/10.
 */
import {Component, OnInit, Input} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import {ScanLoginService} from "../../shared/scan-login/scan-login.service";
import {ActivatedRoute} from "@angular/router";
@Component({
    moduleId: module.id, // 加这个，以下路径为相对路径
    selector: "scan-login",
    templateUrl: "./scan-login.html",
    styleUrls: ["./scan-login-common.css", "./scan-login.css"],
    providers: [ScanLoginService],
})
export class ScanLoginComponent implements OnInit {
    private loginStr: string;
    public constructor(private activatedRoute: ActivatedRoute, private routerExtensions: RouterExtensions, private scanLoginService: ScanLoginService) {}
    // OnInit 必须实现
    public ngOnInit() {
        // 暂无
        this.activatedRoute.queryParams.subscribe(
            (params) => {
                this.loginStr = params.loginStr;
            },
        );
    }
    private centerLogin() {
        const str = this.loginStr.split("qr_session_id=")[1].split(",")[0];
        this.scanLoginService.certainLoginPC({qr_id: str}).subscribe(
            (json) => {
                if (json.ret === "100" ) {
                    alert("电脑端登录成功");
                    this.routerExtensions.back();
                }else {
                    alert("电脑端登录失败");
                }
            },
        );
    }
    private cancle() {
        this.routerExtensions.back();
    }
}
