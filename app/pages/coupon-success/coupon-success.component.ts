/**
 * Created by musiwen on 2017/6/17.
 */

import {Component, OnInit} from "@angular/core";
import {Page} from "tns-core-modules/ui/page";
import {Logger} from "../../service/logger.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {GoodsItem} from "../../shared/coupon/goods-item";
import {View} from "tns-core-modules/ui/core/view";
import {Label} from "tns-core-modules/ui/label";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {Image} from "tns-core-modules/ui/image";
import {BrandItem} from "../../shared/brand/brand-item";

@Component({
  selector: "coupon-success",
  moduleId: module.id,
  templateUrl: "./coupon-success.component.html",
  styleUrls: ["./coupon-success.common.css"],
})
export class CouponSuccessComponent implements OnInit {
  public goodsList: GoodsItem[] = [];

  constructor(private page: Page, private logger: Logger, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.page.actionBarHidden = true;
    const list = [];
    for (let i = 0; i < 20; i++) {
      list.push(new GoodsItem(123, "你卖我当你面爱我的阿瓦达瓦大王大伟打完大无多", "https://newretail.iskyshop.com/upload/system/self_goods/2016/01/22/90203d1f-c8dc-42c6-b8d0-017c7ca6d218.jpg_middle.jpg", 998.00));
    }
    this.goodsList = list;

    // this.activatedRoute.queryParams.subscribe((p) => {
    //   const newVar = JSON.parse(p.list) as GoodsItem[];
    //   this.logger.error(newVar.length + "");
    //   this.goodsList = new ObservableArray(newVar);
    //   // newVar.forEach((item,index) => {
    //   //   this.logger.error(item.goods_name);
    //   //   // this.goodsList.push(new GoodsItem(item.goods_id, item.goods_name, item.goods_pic, item.goods_price));
    //   //
    //   // });
    // })
    // ;
  }

  public itemLoading(event) {
    // const label1 = event.view.getChildAt(1) as Label;
    // const label2 = event.view.getChildAt(2) as Label;
    // const image = event.view.getChildAt(0) as Image;
    // label1.text = this.goodsList[event.itemIndex].goods_name;
    // label2.text = "￥" + this.goodsList[event.itemIndex].goods_price.toString();
    // image.src = this.goodsList[event.itemIndex].goods_pic;
  }
}
