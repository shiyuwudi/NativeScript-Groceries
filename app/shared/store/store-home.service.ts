import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { NetworkService } from "../../service/main.service";

@Injectable()
export class StoreHomeService {
    constructor(private net: NetworkService) {}
    public getStoreHomeList(params: any = {}): Observable<any> {
        return this.net.post("/app/store.htm", "店铺首页列表", params);
    }
    public getNewGoodsList(params: any = {}): Observable<any> {
        return this.net.post("/app/store_new_goods.htm", "店铺新品上架", params);
    }
    public getAllGoodsList(params: any = {}): Observable<any> {
        return this.net.post("/app/goods_list.htm", "店铺全部宝贝", params);
    }
    public getStoreInfo(params: any = {}): Observable<any> {
        return this.net.post("/app/store_info.htm", "店铺信息", params);
    }
    public isFavourite(params: any = {}): Observable<any> {
        return this.net.post("/app/add_store_favorite.htm", "收藏操作", params);
    }
    public getStoreClassifyList(params: any = {}): Observable<any> {
        return this.net.post("/app/store_goodsClass.htm", "店铺分类列表", params);
    }
}