import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear,
} from "application-settings";

import { User } from "./user";
import { Config } from "../config";
import { Logger } from "../../service/logger.service";
import { NetworkService } from "../../service/main.service";

@Injectable() // angular的依赖注入机制，所有service层的类都需要这个修饰器
export class UserService {

    public static getCurrentUser(): User {
        if (!hasKey("userId")) {
            return null;
        }
        const user = new User();
        user.userId = getString("userId");
        user.token = getString("token");
        user.username = getString("userName");
        user.verify = getString("verify");
        return user;
    }

    constructor(private http: Http, private logger: Logger, private net: NetworkService) {}

    public getLifeBuyList(): Observable<any> {
        return this.net.post("/app/buyer/grouplife_order.htm", "生活购");
    }

    public logout() {
        remove("userId");
        remove("token");
        remove("userName");
        remove("verify");
    }

    public login(user: User) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const url = Config.apiUrl + "/app/iskyshop_user_login.htm";
        const formData = new FormData();
        formData.append("userName", user.username);
        formData.append("password", user.password);
        const params = {
            userName: user.username,
            password: user.password,
        };
        const body = JSON.stringify(params);
        const options = {
            headers,
            params,
        };
        return this.http.post(url, formData, options)
        .map((response: Response) => response.json())
        .do((json) => {
            const code = json.code;
            if (code === "-100") {
                alert("账号不存在!");
            } else if (code === "-200") {
                alert("密码不正确!");
            } else if (code === "-300") {
                alert("登录失败!");
            } else if (code === "0") {
                alert("数据异常!");
            } else if (code === "100") {
                // 保存得到的token userid
                setString("userName", json.userName);
                setString("token", json.token);
                setString("userId", json.user_id);
                setString("verify", json.verify);
                alert("登录成功!");
            } else {
                alert("不知道啥异常!");
            }
        })
        .catch(this.handleErrors);
    }

    public register(user: User) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const url = Config.apiUrl + "Users";
        const params = {
            Username: user.email,
            Email: user.email,
            Password: user.password,
        };
        const body = JSON.stringify(params);
        const options = { headers };
        return this.http.post(url, body, options).catch(this.handleErrors);
    }

    private handleErrors(error: Response) {
        this.logger.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
