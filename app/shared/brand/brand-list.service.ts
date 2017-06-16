/**
 * Created by musiwen on 2017/6/15.
 */
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Config} from "../config";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";
import {Brand} from "./brand";
@Injectable()
export class BrandListService {
  constructor(private http: Http) {
  }

  public getBrandLsit(): Observable<Brand[]> {

    return this.http.post(Config.brandList, "", {})
      .map((response: Response) => {
        return response.json().brand_list as Brand[];
      }).catch(this.handleErrors);
  }

  private handleErrors(error: Response) {
    return Observable.throw(error);
  }
}
