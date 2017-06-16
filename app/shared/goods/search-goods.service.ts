/**
 * Created by musiwen on 2017/6/12.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, Response, Headers} from "@angular/http";
import {Config} from "../config";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {SearchGoods} from "./search-goods";
import {GoodsFilter} from "./goods-filter";

@Injectable()
export class SearchGoodsService {
  constructor(private http: Http) {
  }

  public search(gcId: string,
                keyword: string,
                gbId: string,
                selfFilter: string,
                inventoryFilter: string,
                payafterFilter: string,
                queryType: string,
                buildingId: string,
                orderBy: string,
                orderType: string,
                beginCount: string,
                selectCount: string,
                properties: string): Observable<SearchGoods[]> {
    const url = Config.searchGoods;
    return this.http
      .post(url, "", {
        params: {
          gc_id: gcId,
          keyword,
          gb_id: gbId,
          selfFilter,
          inventoryFilter,
          payafterFilter,
          queryType,
          buildingId,
          orderBy,
          orderType,
          beginCount,
          selectCount,
          properties,
        },
      })
      .map((response: Response) => {
        const json = response.json();
        return json.goods_list as SearchGoods[];
      })
      .catch(this.handleErrors);
  }

  public getGoodsFilter(gcId: string): Observable<GoodsFilter[]> {
    const url = Config.filterGoods;
    return this.http
      .post(url, "", {
        params: {
          gc_id: gcId,
        },
      })
      .map((response: Response) => {
        const json = response.json();
        return json.result as GoodsFilter[];
      })
      .catch(this.handleErrors);
  }

  private handleErrors(error: Response) {
    return Observable.throw(error);
  }
}
