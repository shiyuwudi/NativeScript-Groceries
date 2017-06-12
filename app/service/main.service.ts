import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "../shared/user/user";
import { UserService } from "../shared/user/user.service";
import { Config } from "../shared/config";
import { Logger } from "../service/logger.service";

@Injectable() // angular的依赖注入机制，所有service层的类都需要这个修饰器
export class NetworkService {

    constructor(private http: Http, private logger: Logger) {}

    public post(lastUrl: string, desciption: string, params: any = {}): Observable<any> {
        const currentUser = UserService.getCurrentUser();
        // 请求头
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        if (currentUser) {
            headers.append("verify", currentUser.verify);
            params.user_id = currentUser.userId;
            params.token = currentUser.token;
        }

        const url = Config.apiUrl + lastUrl;
        const options = {
            headers,
            params,
        };
        return this.http.post(url, "", options)
        .map((response: Response) => response.json())
        .do((json) => {
            this.logger.log(`response: ${JSON.stringify(json)}`);
        })
        .catch(this.handleErrors);
    }

    private handleErrors(error: Response) {
        this.logger.error(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
