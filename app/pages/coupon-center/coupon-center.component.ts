/**
 * Created by musiwen on 2017/6/16.
 */
import {Component, OnInit} from "@angular/core";
import {Page} from "tns-core-modules/ui/page";
import {Coupon} from "../../shared/coupon/coupon";
import {CouponService} from "../../shared/coupon/coupon.service";
import {Logger} from "../../service/logger.service";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {PullToRefresh} from "nativescript-pulltorefresh";
import {ItemEventData, ListView} from "tns-core-modules/ui/list-view";
import {Router} from "@angular/router";

@Component({
  selector: "coupon-center",
  moduleId: module.id,
  providers: [CouponService],
  templateUrl: "./coupon-center.component.html",
  styleUrls: ["./coupon-center.common.css"],
})
export class CouponCenterComponent implements OnInit {
  public couponList: ObservableArray<Coupon>;

  constructor(private page: Page, private couponService: CouponService, private logger: Logger, private router: Router) {
  }

  public ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.initData();
  }

  public initData(pullToRefresh?: PullToRefresh) {
    this.couponService.getCouponList()
      .subscribe((couponList) => {
        couponList.unshift(new Coupon(0, 0, "", "", 0, "", 0, "", 0));
        this.couponList = new ObservableArray(couponList);
        if (pullToRefresh != null && pullToRefresh.refreshing === true) {
          pullToRefresh.refreshing = false;
        }
      }, (error) => {
        this.logger.error(error.toString());
      });
  }

  public refreshList(args) {
    const pullRefresh = args.object;
    this.initData(pullRefresh);
  }

  public onItemTap(event: ItemEventData) {
    if (event.index !== 0) {
      const coupon = this.couponList.getItem(event.index);
      this.router.navigate(["/home//couponGet"],
        {
          queryParams: {
            capture_status: coupon.capture_status,
            coupon_amount: coupon.coupon_amount,
            coupon_begin_time: coupon.coupon_begin_time,
            coupon_end_time: coupon.coupon_end_time,
            coupon_id: coupon.coupon_id,
            coupon_name: coupon.coupon_name,
            coupon_order_amount: coupon.coupon_order_amount,
            coupon_pic: coupon.coupon_pic,
            coupon_surplus_amount: coupon.coupon_surplus_amount,
          },
        })
      ;
    }
  }
}
