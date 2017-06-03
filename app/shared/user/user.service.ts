import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from '../config';

@Injectable() // angular的依赖注入机制，所有service层的类都需要这个修饰器
export class UserService {

    constructor(private http: Http) {}

    login(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        const url = Config.apiUrl + "oauth/token";
        const params = {
            username: user.email,
            password: user.password,
            grant_type: "password",
        };
        const body = JSON.stringify(params);
        const options = { headers: headers };
        return this.http.post(url, body, options)
        .map((response: Response) => response.json())
        .do(json => {
            // 保存登录令牌
            Config.token = json.Result.access_token;
        })
        .catch(this.handleErrors);
    }

    register(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        const url = Config.apiUrl + "Users";
        const params = {
            Username: user.email,
            Email: user.email,
            Password: user.password,
        };
        const body = JSON.stringify(params);
        const options = { headers: headers };
        return this.http.post(url, body, options).catch(this.handleErrors);
    }

    private handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}