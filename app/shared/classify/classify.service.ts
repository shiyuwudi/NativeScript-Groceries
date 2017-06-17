import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { NetworkService } from "../../service/main.service";

@Injectable()
export class ClassifyService {
    constructor(private net: NetworkService) {}
    public getGoodsClassifyList(params: any = {}): Observable<any> {
        return this.net.post("/app/goodsclass.htm", "商品分类列表", params);
    }
    public getGoodsClassifySecondList(params: any = {}): Observable<any> {
        return this.net.post("/app/goodsclass.htm", "商品二级分类列表", params);
    }
}