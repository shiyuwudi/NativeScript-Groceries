/**
 * Created by musiwen on 2017/6/17.
 */
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "tns-core-modules/ui/page";
import {Coupon} from "../../shared/coupon/coupon";
import {CouponService} from "../../shared/coupon/coupon.service";
import {Logger} from "../../service/logger.service";
import {ActivatedRoute, Router} from "@angular/router";
import BitmapFactory = require("nativescript-bitmap-factory");
import {Image} from "tns-core-modules/ui/image";
import KnownColors = require("tns-core-modules/color/known-colors");
import {GoodsItem} from "../../shared/coupon/goods-item";
@Component({
  selector: "coupon-get",
  moduleId: module.id,
  providers: [CouponService],
  templateUrl: "./coupon-get.component.html",
  styleUrls: ["./coupon-get.common.css"],
})
export class CouponGetComponent implements OnInit {
  @ViewChild("image") public img: ElementRef;
  public inputVerify: string = "";
  private item: Coupon;
  private imageUrl = "res://icon";
  private verify = "";

  constructor(private page: Page, private couponService: CouponService, private logger: Logger, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.activatedRoute.queryParams.subscribe((param) => {
      this.item = new Coupon(
        param.capture_status,
        param.coupon_amount,
        param.coupon_begin_time,
        param.coupon_end_time,
        param.coupon_id,
        param.coupon_name,
        param.coupon_order_amount,
        param.coupon_pic,
        param.coupon_surplus_amount);
      this.logger.error(param.coupon_end_time);
    });
    this.showVerifyView();
  }

  public submit(event) {
    const list = [];
    for (let i = 0; i < 20; i++) {
      list.push(new GoodsItem(123, "你卖我当你面爱我的阿瓦达瓦大王大伟打完大无多", "https://newretail.iskyshop.com/upload/system/self_goods/2016/01/22/90203d1f-c8dc-42c6-b8d0-017c7ca6d218.jpg_middle.jpg", 998.00));
    }
    this.router.navigate(["/home//couponSuccess"], {
      queryParams: {
        list: JSON.stringify(list),
      },
    });
    // if (this.inputVerify === this.verify) {
    //   this.couponService.getCoupon(this.item.coupon_id.toString())
    //     .subscribe((response) => {
    //       switch (response.status) {
    //         case 1:
    //           break;
    //         case 0:
    //           alert("优惠券已失效");
    //           break;
    //         case -1:
    //           alert("超过领取上限");
    //           break;
    //         case -2:
    //           alert("优惠券数量不足");
    //           break;
    //         case -3:
    //           alert("您的用户等级不够");
    //           break;
    //       }
    //     }, (error) => {
    //       alert("网络错误");
    //     });
    // } else {
    //   alert("请输入正确的验证码");
    // }

  }

  public getRandom(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public showVerifyView() {
    const bmp = BitmapFactory.create(96, 40);
    const image2 = this.img.nativeElement as Image;
    bmp.dispose(() => {
      bmp.drawRect({width: 96, height: 40}, "0,0", "#ffffff", "#ffffff");
      Math.random()
      const num1 = this.getRandom(0, 9);
      const num2 = this.getRandom(0, 9);
      const num3 = this.getRandom(0, 9);
      const num4 = this.getRandom(0, 9);
      const num1Size = this.getRandom(5, 25);
      const num2Size = this.getRandom(5, 25);
      const num3Size = this.getRandom(5, 25);
      const num4Size = this.getRandom(5, 25);
      const num1Top = this.getRandom(num1Size + 10, 40);
      const num2Top = this.getRandom(num2Size + 10, 40);
      const num3Top = this.getRandom(num3Size + 10, 40);
      const num4Top = this.getRandom(num4Size + 10, 40);
      this.verify = num1.toString() + num2.toString() + num3.toString() + num4.toString();
      bmp.writeText(num1.toString(), this.getRandom(0, 20) + "," + num1Top, {
        color: "#db2222",
        size: num1Size,
        name: "impact",
      });
      bmp.writeText(num2.toString(), this.getRandom(24, 44) + "," + num2Top, {
        color: "#db2222",
        size: num2Size,
        name: "impact",
      });
      bmp.writeText(num3.toString(), this.getRandom(48, 68) + "," + num3Top, {
        color: "#db2222",
        size: num3Size,
        name: "impact",
      });
      bmp.writeText(num4.toString(), this.getRandom(72, 96 - num4Size) + "," + num4Top, {
        color: "#db2222",
        size: num4Size,
        name: "impact",
      });
      bmp.drawLine(this.getRandom(0, 48) + "," + this.getRandom(0, 40),
        this.getRandom(48, 96) + "," + this.getRandom(0, 40), "#db2222");
      bmp.drawLine(this.getRandom(0, 48) + "," + this.getRandom(0, 40),
        this.getRandom(48, 96) + "," + this.getRandom(0, 40), "#db2222");
      bmp.drawLine(this.getRandom(0, 48) + "," + this.getRandom(0, 40),
        this.getRandom(48, 96) + "," + this.getRandom(0, 40), "#db2222");
      const data = bmp.toDataUrl(BitmapFactory.OutputFormat.JPEG, 75);
      this.imageUrl = data;
    });
  }

  public changeVerify() {
    this.showVerifyView();
  }
}

