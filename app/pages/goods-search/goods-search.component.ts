/**
 * Created by admin on 2017/6/12.
 */
import {
  AfterViewInit, ChangeDetectorRef, Component, ElementRef, Injectable, OnInit,
  ViewChild,
} from "@angular/core";
import {Page} from "tns-core-modules/ui/page";
import {registerElement, RouterExtensions} from "nativescript-angular";
import {RadSideDrawer, SideDrawerLocation} from "nativescript-telerik-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-telerik-ui/sidedrawer/angular";
import {SearchGoodsService} from "../../shared/goods/search-goods.service";
import {Logger} from "../../service/logger.service";
import {SearchGoods} from "../../shared/goods/search-goods";
import {Label} from "tns-core-modules/ui/label";
import {PullToRefresh} from "nativescript-pulltorefresh";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {GoodsFilterList} from "../../shared/goods/goods-filter-list";
import {GoodsFilter} from "../../shared/goods/goods-filter";
import {ActivatedRoute} from "@angular/router";
import {ListView} from "tns-core-modules/ui/list-view";
import * as utils from "utils/utils";
import {Color} from "color";
import {screen} from "platform";

registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
  selector: "goods-search",
  moduleId: module.id,
  providers: [SearchGoodsService],
  templateUrl: "./goods-search.component.html",
  styleUrls: ["./goods-search.common.css"],
})

@Injectable()
export class GoodsSearchComponent implements OnInit, AfterViewInit {
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  @ViewChild("popularity") public popularityLabel: ElementRef;
  @ViewChild("sideLayout") public sideLayout: ElementRef;
  @ViewChild("sales") public salesLabel: ElementRef;
  @ViewChild("price") public priceLabel: ElementRef;
  @ViewChild("new") public newLabel: ElementRef;
  @ViewChild("priceImage") public priceImage: ElementRef;
  @ViewChild("listView") public listView: ElementRef;
  public selfFilter = "0";
  public inventoryFilter = "0";  // 发票
  public payafterFilter = "0";
  private orderBy = "goods_salenum"; // 销量排序
  private drawer: RadSideDrawer;
  private currentLocation: SideDrawerLocation;
  private goodsList: SearchGoods[] = [];
  private orderByType = "desc";    // 降序排列
  private queryType = "";  // 查询类型
  private beginCount = 0;   // 每次查询的页码
  private selectCount = 20;  // 每次查询的条数
  private gcId = "";
  private gbId = "";
  private sBuildingId = "";
  private sWhere = "";   // 店铺id
  private keyword = "";  // 关键字
  private filterList: GoodsFilterList[] = [];
  private filterListService: GoodsFilter[] = [];
  private selectedFilter: GoodsFilterList[] = [];
  private word: string;

  constructor(private logger: Logger, private page: Page, private changeDetectionRef: ChangeDetectorRef, private searchGoodsService: SearchGoodsService, private routerExtensions: RouterExtensions, private activatedRoute: ActivatedRoute) {
    this.page.on("loaded", this.onLoaded, this);
  }

  public ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.currentLocation = SideDrawerLocation.Left;
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.keyword != null) {
        this.keyword = params.keyword;
      }
      if (params.gbId != null) {
        this.gbId = params.gbId;
      }
      if (params.word != null) {
        this.word = params.word;
      }
    });
    this.initData(true);
    this.searchGoodsService
      .getGoodsFilter(this.gcId)
      .subscribe((filterList) => {
        filterList.forEach((filter) => {
          this.filterListService.push(filter);
          this.filterList.push(new GoodsFilterList(filter.id, filter.name, filter.value.split(","), -1));
        });
      });
  }

  public initData(isRefresh: boolean, pullToRefresh?: PullToRefresh) {
    this.beginCount = 0;
    this.searchGoodsService.search(
      this.gcId, this.keyword, this.gbId, this.selfFilter, this.inventoryFilter, this.payafterFilter, this.queryType, this.sBuildingId, this.orderBy, this.orderByType, this.beginCount.toString(), this.selectCount.toString(), this.sWhere)
      .subscribe((result) => {
        if (isRefresh) {
          if (pullToRefresh != null) {
            pullToRefresh.refreshing = false;
          }
          this.goodsList = [];
          result.forEach((goods) => {
            this.goodsList.push(goods);
          });
        } else {
          result.forEach((goods) => {
            this.goodsList.push(goods);
          });
        }
      });
    if (isRefresh) {
      const listView = this.listView.nativeElement as ListView;
      // listView.scrollToIndex(0);
    }
  }

  public get imageSrc() {
    return this.orderBy === "goods_current_price" ? (this.orderByType === "desc" ? "res://pricedown" : "res://priceup" ) : "res://priceno_cloud";
  }

  public onItemTap(event) {
    this.logger.log(event.index);
  }

  public refreshList(args) {
    const pullRefresh = args.object;
    this.initData(true, pullRefresh);
  }

  public loadmore(event) {
    this.beginCount += this.selectCount;
    this.searchGoodsService.search(
      this.gcId, this.keyword, this.gbId, this.selfFilter, this.inventoryFilter, this.payafterFilter, this.queryType, this.sBuildingId, this.orderBy, this.orderByType, this.beginCount.toString(), this.selectCount.toString(), this.sWhere)
      .subscribe((result) => {
        result.forEach((goods) => {
          this.goodsList.push(goods);
        });
        if (result.length < this.selectCount) {
          // 没有更多数据
        }
      });
  }

  public onLeftTap() {
    this.drawer.closeDrawer();
  }

  public onLoaded() {
    if (this.drawer.android) {
      this.drawer.android.setDrawerCloseThreshold(5);
    }
    this.currentLocation = SideDrawerLocation.Right;
    this.changeDetectionRef.detectChanges();
    this.drawer.drawerContent.backgroundColor = new Color("#00000000");
  }

  public ngAfterViewInit(): void {
    this.drawer = this.drawerComponent.sideDrawer;
    this.drawer.drawerContentSize = screen.mainScreen.widthDIPs;
    this.changeDetectionRef.detectChanges();
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }

  public onRightLocationTap() {
    this.currentLocation = SideDrawerLocation.Right;
    this.changeDetectionRef.detectChanges();
    this.drawer.showDrawer();
  }

  public onSelect(event) {
    this.onRightLocationTap();
  }

  public tapPopularity(event) {
    this.orderBy = "goods_click";
    this.orderByType = "desc";
    this.setLabel(0);
    this.initData(true);
  }

  public tapSales(event) {
    this.orderBy = "goods_salenum";
    this.orderByType = "desc";
    this.setLabel(1);
    this.initData(true);
  }

  public tapPrice(event) {
    this.orderBy = "goods_current_price";
    if (this.orderByType === "asc") {
      this.orderByType = "desc";
    } else {
      this.orderByType = "asc";
    }
    this.setLabel(2);
    this.initData(true);
  }

  public tapNew(event) {
    this.orderBy = "goods_seller_time";
    this.orderByType = "desc";
    this.setLabel(3);
    this.initData(true);
  }

  public setLabel(index: number) {
    const label4 = this.newLabel.nativeElement as Label;
    const label3 = this.priceLabel.nativeElement as Label;
    const label2 = this.salesLabel.nativeElement as Label;
    const label1 = this.popularityLabel.nativeElement as Label;
    switch (index) {
      case 0:
        label1.set("color", "#db2222");
        label2.set("color", "#666666");
        label3.set("color", "#666666");
        label4.set("color", "#666666");
        break;
      case 1:
        label1.set("color", "#666666");
        label2.set("color", "#db2222");
        label3.set("color", "#666666");
        label4.set("color", "#666666");
        break;
      case 2:
        label1.set("color", "#666666");
        label2.set("color", "#666666");
        label3.set("color", "#db2222");
        label4.set("color", "#666666");
        break;
      case 3:
        label1.set("color", "#666666");
        label2.set("color", "#666666");
        label3.set("color", "#666666");
        label4.set("color", "#db2222");
        break;
    }
  }

  public back(event) {
    this.routerExtensions.back();
  }

  public itemt(event, name) {
    this.logger.log(name);
  }

  public addSideHeaderItem() {
    const stackLayout = this.sideLayout.nativeElement as StackLayout;
    const lab = new Label();
    lab.text = "方式";
    lab.set("class", "sideTitle");
    stackLayout.addChild(lab);
  }

  public reset() {
    this.selfFilter = "0";
    this.payafterFilter = "0";
    this.inventoryFilter = "0";
    this.filterList = [];
    this.filterListService.filter((filter) => {
      this.filterList.push(new GoodsFilterList(filter.id, filter.name, filter.value.split(","), -1));
    });
  }

  public submit() {
    let str = "";
    this.selectedFilter.forEach((filter, index) => {
      str += filter.id + "," + filter.item;
      if (index !== this.selectedFilter.length - 1) {
        str += "|";
      }
    });
    this.sWhere = str;

    this.onCloseDrawerTap();
    setTimeout(() => {
        this.initData(true);
      },
      500);
  }

  public onFilterItem(args: GoodsFilterList) {
    this.selectedFilter.forEach((filter, index) => {
      if (filter.id === args.id) {
        this.selectedFilter.splice(index, 1);
      }
    });
  }

  public headerTap(index: number) {
    switch (index) {
      case 1:
        if (this.selfFilter === "1") {
          this.selfFilter = "0";
        } else {
          this.selfFilter = "1";
        }
        break;
      case 2:
        if (this.payafterFilter === "1") {
          this.payafterFilter = "0";
        } else {
          this.payafterFilter = "1";
        }
        break;
      case 3:
        if (this.inventoryFilter === "1") {
          this.inventoryFilter = "0";
        } else {
          this.inventoryFilter = "1";
        }
        break;
    }
  }
}
