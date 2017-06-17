/**
 * Created by barney on 2017/6/12.
 */
import { Component, OnInit } from "@angular/core";
import { StoreHome, StoreHomeGoods } from "../../shared/store/store"; // 数据模型
import { StoreHomeService } from "../../shared/store/store-home.service";
import {Page} from "tns-core-modules/ui/page";
import { Color } from "color";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "store",
    templateUrl: "./store.component.html",
    styleUrls: ["./store-common.css"],
    providers: [StoreHomeService],
})
export class StoreComponent implements OnInit {
    private dataAry: StoreHomeGoods[] = []; // 数据源
    private filterTitle = ["店铺首页", "全部宝贝", "新品上架", "联系客服"];
    private selectedIndex = 0;
    private selectedIndexSmall = 0;
    private storeName = "";
    private storeLogo = "";
    private storeFans = "";
    private fav = false; // 收藏状态 默认未收藏
    private allGoodsCount = "";
    private newCount = "";
    private allGoodsHidden = false;
    private allGoodsFilterAry = [];
    private goodsOrderType = "goods_click"; // 全部宝贝-默认“人气”
    
    constructor(private storeHomeService: StoreHomeService, private page: Page, private router: Router) {}
    ngOnInit() {
        this.page.backgroundColor = new Color("#f0f0f0");
        this.getStoreInfo();
        this.getStoreHomeList();
        this.allGoodsFilterAry = ["人气", "销量", "价格", "新品"];
    }
    // 店铺首页列表
    getStoreHomeList() {
        this.storeHomeService.getStoreHomeList({store_id: "13"}).subscribe(
                    (json) => {
                        const ary = [];
                        json.goods_data.forEach(
                            (store) => {
                            store.data[0].name = store.name; // 向数组的第一个元素添加 name 属性，实现分组效果
                            if (!!store.data[1]) {
                                store.data[1].index = false;
                            }
                            if (store.data.length % 2 !== 0) {
                                store.data.push({}); // 若数组的个数为奇数，则追加一个空的元素，实现换行效果
                            }
                            store.data.forEach((goods) => {
                                ary.push(goods); // 把各组的所有元素拼接为一个总的数组
                            }
                        )
                        });
                        ary.map((goods) => {
                            new StoreHomeGoods(goods.goods_current_price, goods.goods_main_photo, goods.goods_name, goods.id, goods.name,null)
                        }
                        )
                        this.dataAry = ary;
                    }
                );
    }
    // 新品上架列表
    getNewGoodsList() {
        this.storeHomeService.getNewGoodsList({store_id: "12"}).subscribe(
                    (json) => {
                        const ary = [];
                        json.data.forEach(
                            (store) => {
                            store.goods_data[0].date_data = store.date_data; // 向数组的第一个元素添加 name 属性，实现分组效果
                            if (store.goods_data.length % 2 !== 0) {
                                store.goods_data.push({}); // 若数组的个数为奇数，则追加一个空的元素，实现换行效果
                            }
                            store.goods_data.forEach((goods) => {
                                ary.push(goods); // 把各组的所有元素拼接为一个总的数组
                            }
                        )
                        });
                        ary.map((goods) => {
                            new StoreHomeGoods(goods.goods_current_price, goods.goods_main_photo, goods.goods_name, goods.id, null, goods.date_data)
                        }
                        )
                        this.dataAry = ary;
                    }
                );
    }
    // 全部宝贝列表
    getAllGoods() {
        this.storeHomeService.getAllGoodsList({store_id: "12", orderBy: this.goodsOrderType, orderType: ""}).subscribe(
                    (json) => {
                        const ary = [];
                        json.goods_list.forEach(
                            (store) => {
                            ary.push(new StoreHomeGoods(store.goods_current_price, store.goods_main_photo, store.goods_name, store.id, null, null)
                        )
                        });
                        this.dataAry = ary;
                    }
                );
    }
    // 获取店铺信息
    getStoreInfo() {
        this.storeHomeService.getStoreInfo({store_id: "12"}).subscribe(
                    (json) => {                          
                    //    this.storeInfoModel = new StoreInfo(json.fans_count, json.favourited, json.store_logo, json.store_name, json.new_count, json.all_count);
                       this.storeName = json.store_name;
                       this.storeLogo = json.store_logo;
                       this.storeFans = json.fans_count;
                       this.allGoodsCount = json.all_count;
                       this.newCount = json.new_count;
                       if (json.favourited === "0") {
                           this.fav = false;
                       }else {
                           this.fav = true;
                       }
                    }
                );
    }
    // 四个大选项点击事件
    onTap(index) {
        this.selectedIndex = index;
        if (index === 0) {
            this.getStoreHomeList();
            this.allGoodsHidden = false;
        }else if(index === 2) {
            this.getNewGoodsList();
            this.allGoodsHidden = false;
        }else if(index === 1) {
            this.getAllGoods();
            this.allGoodsHidden = true;
        }else if(index === 3) {
            // 跳转联系客服页面
            this.allGoodsHidden = false;
        }
    }
    // 四个小选项点击事件
    onTapSmall(index) {
        this.selectedIndexSmall = index;
        if (index === 0) {
            this.goodsOrderType = "goods_click";
            this.getAllGoods();            
        }else if(index === 1) {
            this.goodsOrderType = "goods_salenum";
            this.getAllGoods();           
        }else if(index === 2) {
            this.goodsOrderType = "goods_current_price";
            this.getAllGoods();           
        }else if(index === 3) {
            this.goodsOrderType = "goods_seller_time";
            this.getAllGoods();
        }
    }
    // 点击收藏按钮
    isFavourite() {
        this.storeHomeService.isFavourite({store_id: "12"}).subscribe(
                    (json) => {                          
                       if (json.code === 1) {
                           alert("操作失败");
                       }else if(json.code === 0) {
                           if (this.fav === false) {
                               alert("收藏成功");
                               this.fav = true;
                           }else {
                                alert("取消收藏成功");
                               this.fav = false;
                           }
                       }
                    }
                );
    }
    // 跳转分类页面
    jumpClassify() {
        // this.router.navigate(["/store-classify"]);
    }
}