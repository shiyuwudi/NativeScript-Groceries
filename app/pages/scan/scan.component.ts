/**
 * Created by barney on 2017/6/10.
 */
import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id, // 加这个，以下路径为相对路径
    selector: "scan",
    templateUrl: "./scan.html",
    styleUrls: ["./scan-common.css"],
})
export class ScanComponent implements OnInit {
    private barcodescanner = new BarcodeScanner();
    public constructor(private router: Router) {}
    // OnInit 必须实现
    public ngOnInit() {
        this.barcodescanner.scan({
            formats: "QR_CODE, EAN_13",
            beepOnScan: true,             // Play or Suppress beep on scan (default true)
            openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
        }).then((result) => {
                if (result.format === "org.iso.QRCode") {
                    let scanStr = result.text;
                    // 二维码
                    // 判断是否包含 头'http:'
                    const regex = "http";
                    // 判断是否包含 头'ssid:'
                    const ssid = "ssid";
                    if (scanStr.indexOf(regex) === 0 ) {
                        // 不用写
                    }else if (scanStr.indexOf(ssid) === 0) {
                        const arr = scanStr.split(";");
                        const arrInfoHead = arr[0].split(":");
                        const arrInfoFoot = arr[1].split(":");
                        scanStr = "ssid: " + arrInfoHead[1] + " \n password:"
                            + arrInfoFoot[1];
                    }
                    // 首先 判断是扫码登陆还是商品跳转
                    if (scanStr.includes("qr_session_id=")) {
                        const arr = scanStr.split("qr_session_id=");
                        if (arr.length === 0) {
                            // 空数组 不用写
                        }else if (arr.length === 1) {
                            // 商品分支
                        }else {
                            // 登录分支
                            this.scanLogin(scanStr);
                        }
                    }else if (scanStr.includes("goods_")) {
                        // 商品分支
                    }
                }else {
                    // 条形码
                    alert({
                        title: "Scan result",
                        message: "Format: " + result.format + ",Value: " + result.text,
                        okButtonText: "OK",
                    });
                }
            },
        );
    }
    // 登录分支
    private scanLogin(loginStr: string) {
        const loginRegex = "iskyshop_login\\.htm\\?qr_session_id=([A-Za-z0-9_-])+";
        // 这个判断的正则表达式待定
        if (loginStr.match(loginRegex) === null) {
            alert(loginStr.match(loginRegex));
        }else {
            this.router.navigate(["/scan-login"], { queryParams: { loginStr } });
            // this.router.navigate(["/scan-login"]);
        }
    }
}
