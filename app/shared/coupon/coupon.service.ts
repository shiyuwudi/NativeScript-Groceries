/**
 * Created by musiwen on 2017/6/16.
 */
import {Injectable} from "@angular/core";
import {NetworkService} from "../../service/main.service";
import {Logger} from "../../service/logger.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Coupon} from "./coupon";
import {Config} from "../config";
import "rxjs/add/operator/map";
import {CouponGetResponse} from "./coupon-get";

@Injectable()
export class CouponService {
  constructor(private http: Http, private logger: Logger, private net: NetworkService) {
  }

  public getCouponList(): Observable<Coupon[]> {
    return this.net.post(Config.couponList, "", {})
      .map((json) => {
        return json.data as Coupon[];
      });
  }

  public getCoupon(id: string): Observable<CouponGetResponse> {
    return this.net.post(Config.getCoupon, "", {coupon_id: id})
      .map((json) => {
        return json as CouponGetResponse;
      });
  }
}
