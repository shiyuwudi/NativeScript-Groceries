/**
 * Created by barney on 2017/6/10.
 */
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Message } from "./message";
import { Grocery } from "../grocery/grocery";

@Injectable()
export class MessageListService {

    constructor(private http: Http) {}

    public load() {
        const headers = new Headers();
        headers.append("Authorization", "Bearer " + Config.token); // 授权令牌

        const options = { headers };
        const url = Config.apiUrl + "Groceries";
        return this.http.get(url, options)
            .map((response) => response.json())
            .map((json) => {
                const groceryList: Grocery[] = [];
                json.Result.forEach((grocery) => {
                    groceryList.push(new Grocery(grocery.Id, grocery.Name));
                });
                return groceryList;
            })
            .catch(this.handleErrors);
    }
    // 请求例子
    public request(lastUrl: string, par: any) {
        const headers = new Headers();
        headers.append("Authorization", "Bearer " + Config.token);
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.apiUrl + lastUrl,
            JSON.stringify(par),
            { headers },
        )
            .map((response) => response.json())
            .map((json) => {
                return json;
            })
            .catch(this.handleErrors);
    }
//     this.request("Groceries", { Name: this.grocery })
// .subscribe(
//     data => {
//
//         this.groceryList.unshift(new Grocery(data.Result.Id, this.grocery));
//         this.grocery = "";
//
//     },
//     () => {
//         alert({
//             message: "An error occurred while adding an item to your list.",
//             okButtonText: "OK"
//         });
//         this.grocery = "";
//     }
// )
    private handleErrors(error: Response) {
        return Observable.throw(error);
    }
}
