import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { NetworkService } from "../../service/main.service";

@Injectable()
export class ScanLoginService {

    constructor(private net: NetworkService) {}
    public certainLoginPC(params: any = {}): Observable<any> {
        return this.net.post("/app/buyer/app_qr_login.htm", "登录PC端", params);
    }
}