/* tslint:disable:no-console */
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Grocery } from "./grocery";

@Injectable()
export class GroceryListService {

    constructor(private http: Http) {}

    public add(name: string) {
        const options = this.getOptions();
        const url = Config.apiUrl + "Groceries";
        const params = {
            Name: name,
        };
        const body = JSON.stringify(params);
        return this.http.post(url, body, options)
        .map((res) => res.json())
        .map((json) => {
            return new Grocery(json.Result.Id, name);
        })
        .catch(this.handleErrors);
    }

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

    public delete(id) {
        const options = this.getOptions();
        const url = `${Config.apiUrl}Groceries/${id}`;
        return this.http.delete(url, options)
        .map((resp) => resp.json())
        .catch(this.handleErrors);
    }

    private handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

    private getOptions(): { headers: Headers } {
        const headers = new Headers();
        headers.append("Authorization", "Bearer " + Config.token); // 授权令牌
        headers.append("Content-Type", "application/json");
        const options = { headers };
        return options;
    }
}
