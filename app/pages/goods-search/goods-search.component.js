"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by admin on 2017/6/12.
 */
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var nativescript_angular_1 = require("nativescript-angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var search_goods_service_1 = require("../../shared/goods/search-goods.service");
var logger_service_1 = require("../../service/logger.service");
var label_1 = require("tns-core-modules/ui/label");
var goods_filter_list_1 = require("../../shared/goods/goods-filter-list");
var router_1 = require("@angular/router");
var color_1 = require("color");
var platform_1 = require("platform");
nativescript_angular_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var GoodsSearchComponent = (function () {
    function GoodsSearchComponent(logger, page, changeDetectionRef, searchGoodsService, routerExtensions, activatedRoute) {
        this.logger = logger;
        this.page = page;
        this.changeDetectionRef = changeDetectionRef;
        this.searchGoodsService = searchGoodsService;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.selfFilter = "0";
        this.inventoryFilter = "0"; // 发票
        this.payafterFilter = "0";
        this.orderBy = "goods_salenum"; // 销量排序
        this.goodsList = [];
        this.orderByType = "desc"; // 降序排列
        this.queryType = ""; // 查询类型
        this.beginCount = 0; // 每次查询的页码
        this.selectCount = 20; // 每次查询的条数
        this.gcId = "";
        this.gbId = "";
        this.sBuildingId = "";
        this.sWhere = ""; // 店铺id
        this.keyword = ""; // 关键字
        this.filterList = [];
        this.filterListService = [];
        this.selectedFilter = [];
        this.page.on("loaded", this.onLoaded, this);
    }
    GoodsSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = true;
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Left;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.keyword != null) {
                _this.keyword = params.keyword;
            }
            if (params.gbId != null) {
                _this.gbId = params.gbId;
            }
            if (params.word != null) {
                _this.word = params.word;
            }
        });
        this.initData(true);
        this.searchGoodsService
            .getGoodsFilter(this.gcId)
            .subscribe(function (filterList) {
            filterList.forEach(function (filter) {
                _this.filterListService.push(filter);
                _this.filterList.push(new goods_filter_list_1.GoodsFilterList(filter.id, filter.name, filter.value.split(","), -1));
            });
        });
    };
    GoodsSearchComponent.prototype.initData = function (isRefresh, pullToRefresh) {
        var _this = this;
        this.beginCount = 0;
        this.searchGoodsService.search(this.gcId, this.keyword, this.gbId, this.selfFilter, this.inventoryFilter, this.payafterFilter, this.queryType, this.sBuildingId, this.orderBy, this.orderByType, this.beginCount.toString(), this.selectCount.toString(), this.sWhere)
            .subscribe(function (result) {
            if (isRefresh) {
                if (pullToRefresh != null) {
                    pullToRefresh.refreshing = false;
                }
                _this.goodsList = [];
                result.forEach(function (goods) {
                    _this.goodsList.push(goods);
                });
            }
            else {
                result.forEach(function (goods) {
                    _this.goodsList.push(goods);
                });
            }
        });
        if (isRefresh) {
            var listView = this.listView.nativeElement;
            // listView.scrollToIndex(0);
        }
    };
    Object.defineProperty(GoodsSearchComponent.prototype, "imageSrc", {
        get: function () {
            return this.orderBy === "goods_current_price" ? (this.orderByType === 'desc' ? "res://pricedown" : "res://priceup") : "res://priceno_cloud";
        },
        enumerable: true,
        configurable: true
    });
    GoodsSearchComponent.prototype.onItemTap = function (event) {
        this.logger.log(event.index);
    };
    GoodsSearchComponent.prototype.refreshList = function (args) {
        var pullRefresh = args.object;
        this.initData(true, pullRefresh);
    };
    GoodsSearchComponent.prototype.loadmore = function (event) {
        var _this = this;
        this.beginCount += this.selectCount;
        this.searchGoodsService.search(this.gcId, this.keyword, this.gbId, this.selfFilter, this.inventoryFilter, this.payafterFilter, this.queryType, this.sBuildingId, this.orderBy, this.orderByType, this.beginCount.toString(), this.selectCount.toString(), this.sWhere)
            .subscribe(function (result) {
            result.forEach(function (goods) {
                _this.goodsList.push(goods);
            });
            if (result.length < _this.selectCount) {
                // 没有更多数据
            }
        });
    };
    GoodsSearchComponent.prototype.onLeftTap = function () {
        this.drawer.closeDrawer();
    };
    GoodsSearchComponent.prototype.onLoaded = function () {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(5);
        }
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Right;
        this.changeDetectionRef.detectChanges();
        this.drawer.drawerContent.backgroundColor = new color_1.Color("#00000000");
    };
    GoodsSearchComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.drawerContentSize = platform_1.screen.mainScreen.widthDIPs;
        this.changeDetectionRef.detectChanges();
    };
    GoodsSearchComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    GoodsSearchComponent.prototype.onRightLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Right;
        this.changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    GoodsSearchComponent.prototype.onSelect = function (event) {
        this.onRightLocationTap();
    };
    GoodsSearchComponent.prototype.tapPopularity = function (event) {
        this.orderBy = "goods_click";
        this.orderByType = "desc";
        this.setLabel(0);
        this.initData(true);
    };
    GoodsSearchComponent.prototype.tapSales = function (event) {
        this.orderBy = "goods_salenum";
        this.orderByType = "desc";
        this.setLabel(1);
        this.initData(true);
    };
    GoodsSearchComponent.prototype.tapPrice = function (event) {
        this.orderBy = "goods_current_price";
        if (this.orderByType === "asc") {
            this.orderByType = "desc";
        }
        else {
            this.orderByType = "asc";
        }
        this.setLabel(2);
        this.initData(true);
    };
    GoodsSearchComponent.prototype.tapNew = function (event) {
        this.orderBy = "goods_seller_time";
        this.orderByType = "desc";
        this.setLabel(3);
        this.initData(true);
    };
    GoodsSearchComponent.prototype.setLabel = function (index) {
        var label4 = this.newLabel.nativeElement;
        var label3 = this.priceLabel.nativeElement;
        var label2 = this.salesLabel.nativeElement;
        var label1 = this.popularityLabel.nativeElement;
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
    };
    GoodsSearchComponent.prototype.back = function (event) {
        this.routerExtensions.back();
    };
    GoodsSearchComponent.prototype.itemt = function (event, name) {
        this.logger.log(name);
    };
    GoodsSearchComponent.prototype.addSideHeaderItem = function () {
        var stackLayout = this.sideLayout.nativeElement;
        var lab = new label_1.Label();
        lab.text = "方式";
        lab.set("class", "sideTitle");
        stackLayout.addChild(lab);
    };
    GoodsSearchComponent.prototype.reset = function () {
        var _this = this;
        this.selfFilter = "0";
        this.payafterFilter = "0";
        this.inventoryFilter = "0";
        this.filterList = [];
        this.filterListService.filter(function (filter) {
            _this.filterList.push(new goods_filter_list_1.GoodsFilterList(filter.id, filter.name, filter.value.split(","), -1));
        });
    };
    GoodsSearchComponent.prototype.submit = function () {
        var _this = this;
        var str = "";
        this.selectedFilter.forEach(function (filter, index) {
            str += filter.id + "," + filter.item;
            if (index !== _this.selectedFilter.length - 1) {
                str += "|";
            }
        });
        this.sWhere = str;
        this.onCloseDrawerTap();
        setTimeout(function () {
            _this.initData(true);
        }, 500);
    };
    GoodsSearchComponent.prototype.onFilterItem = function (args) {
        var _this = this;
        this.selectedFilter.forEach(function (filter, index) {
            if (filter.id === args.id) {
                _this.selectedFilter.splice(index, 1);
            }
        });
    };
    GoodsSearchComponent.prototype.headerTap = function (index) {
        switch (index) {
            case 1:
                if (this.selfFilter === "1") {
                    this.selfFilter = "0";
                }
                else {
                    this.selfFilter = "1";
                }
                break;
            case 2:
                if (this.payafterFilter === "1") {
                    this.payafterFilter = "0";
                }
                else {
                    this.payafterFilter = "1";
                }
                break;
            case 3:
                if (this.inventoryFilter === "1") {
                    this.inventoryFilter = "0";
                }
                else {
                    this.inventoryFilter = "1";
                }
                break;
        }
    };
    return GoodsSearchComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], GoodsSearchComponent.prototype, "drawerComponent", void 0);
__decorate([
    core_1.ViewChild("popularity"),
    __metadata("design:type", core_1.ElementRef)
], GoodsSearchComponent.prototype, "popularityLabel", void 0);
__decorate([
    core_1.ViewChild("sideLayout"),
    __metadata("design:type", core_1.ElementRef)
], GoodsSearchComponent.prototype, "sideLayout", void 0);
__decorate([
    core_1.ViewChild("sales"),
    __metadata("design:type", core_1.ElementRef)
], GoodsSearchComponent.prototype, "salesLabel", void 0);
__decorate([
    core_1.ViewChild("price"),
    __metadata("design:type", core_1.ElementRef)
], GoodsSearchComponent.prototype, "priceLabel", void 0);
__decorate([
    core_1.ViewChild("new"),
    __metadata("design:type", core_1.ElementRef)
], GoodsSearchComponent.prototype, "newLabel", void 0);
__decorate([
    core_1.ViewChild("priceImage"),
    __metadata("design:type", core_1.ElementRef)
], GoodsSearchComponent.prototype, "priceImage", void 0);
__decorate([
    core_1.ViewChild("listView"),
    __metadata("design:type", core_1.ElementRef)
], GoodsSearchComponent.prototype, "listView", void 0);
GoodsSearchComponent = __decorate([
    core_1.Component({
        selector: "goods-search",
        moduleId: module.id,
        providers: [search_goods_service_1.SearchGoodsService],
        templateUrl: "./goods-search.component.html",
        styleUrls: ["./goods-search.common.css"],
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [logger_service_1.Logger, page_1.Page, core_1.ChangeDetectorRef, search_goods_service_1.SearchGoodsService, nativescript_angular_1.RouterExtensions, router_1.ActivatedRoute])
], GoodsSearchComponent);
exports.GoodsSearchComponent = GoodsSearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdvb2RzLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILHNDQUd1QjtBQUN2QixpREFBOEM7QUFDOUMsNkRBQXVFO0FBQ3ZFLGlFQUFxRjtBQUNyRixzRUFBa0Y7QUFDbEYsZ0ZBQTJFO0FBQzNFLCtEQUFvRDtBQUVwRCxtREFBZ0Q7QUFHaEQsMEVBQXFFO0FBRXJFLDBDQUErQztBQUcvQywrQkFBOEI7QUFDOUIscUNBQWtDO0FBRWxDLHNDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVc1RixJQUFhLG9CQUFvQjtJQThCL0IsOEJBQW9CLE1BQWMsRUFBVSxJQUFVLEVBQVUsa0JBQXFDLEVBQVUsa0JBQXNDLEVBQVUsZ0JBQWtDLEVBQVUsY0FBOEI7UUFBck4sV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFyQmxPLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFDakIsb0JBQWUsR0FBRyxHQUFHLENBQUMsQ0FBRSxLQUFLO1FBQzdCLG1CQUFjLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxlQUFlLENBQUMsQ0FBQyxPQUFPO1FBR2xDLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUksT0FBTztRQUNoQyxjQUFTLEdBQUcsRUFBRSxDQUFDLENBQUUsT0FBTztRQUN4QixlQUFVLEdBQUcsQ0FBQyxD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Q25DO0lBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDOzhCQUFvQixpQkFBVTt3REFBQztBQUM5QjtJQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBb0IsaUJBQVU7d0RBQUM7QUFDaEM7SUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7OEJBQWtCLGlCQUFVO3NEQUFDO0FBQ3JCO0lBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzhCQUFvQixpQkFBVTt3REFBQztBQUNoQztJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBa0IsaUJBQVU7c0RBQUM7QUFSeEMsb0JBQW9CO0lBVGhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7UUFDL0IsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUN6QyxDQUFDO0lBRUQsaUJBQVUsRUFBRTtxQ0ErQmlCLHVCQUFNLEVBQWdCLFdBQUksRUFBOEIsd0JBQWlCLEVBQThCLHlDQUFrQixFQUE0Qix1Q0FBZ0IsRUFBMEIsdUJBQWM7R0E5QjlOLG9CQUFvQixDQTZSaEM7QUE3Ulksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGFkbWluIG9uIDIwMTcvNi8xMi5cbiAqL1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50LCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7UmFkU2lkZURyYXdlciwgU2lkZURyYXdlckxvY2F0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQge1NlYXJjaEdvb2RzU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9nb29kcy9zZWFyY2gtZ29vZHMuc2VydmljZVwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2xvZ2dlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1NlYXJjaEdvb2RzfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dvb2RzL3NlYXJjaC1nb29kc1wiO1xuaW1wb3J0IHtMYWJlbH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcbmltcG9ydCB7UHVsbFRvUmVmcmVzaH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCI7XG5pbXBvcnQge1N0YWNrTGF5b3V0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHtHb29kc0ZpbHRlckxpc3R9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ29vZHMvZ29vZHMtZmlsdGVyLWxpc3RcIjtcbmltcG9ydCB7R29vZHNGaWx0ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ29vZHMvZ29vZHMtZmlsdGVyXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0xpc3RWaWV3fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJQdWxsVG9SZWZyZXNoXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiKS5QdWxsVG9SZWZyZXNoKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdvb2RzLXNlYXJjaFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBwcm92aWRlcnM6IFtTZWFyY2hHb29kc1NlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCIuL2dvb2RzLXNlYXJjaC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZ29vZHMtc2VhcmNoLmNvbW1vbi5jc3NcIl0sXG59KVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZHNTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoXCJwb3B1bGFyaXR5XCIpIHB1YmxpYyBwb3B1bGFyaXR5TGFiZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzaWRlTGF5b3V0XCIpIHB1YmxpYyBzaWRlTGF5b3V0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic2FsZXNcIikgcHVibGljIHNhbGVzTGFiZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJwcmljZVwiKSBwdWJsaWMgcHJpY2VMYWJlbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcIm5ld1wiKSBwdWJsaWMgbmV3TGFiZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJwcmljZUltYWdlXCIpIHB1YmxpYyBwcmljZUltYWdlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibGlzdFZpZXdcIikgcHVibGljIGxpc3RWaWV3OiBFbGVtZW50UmVmO1xuICBwdWJsaWMgc2VsZkZpbHRlciA9IFwiMFwiO1xuICBwdWJsaWMgaW52ZW50b3J5RmlsdGVyID0gXCIwXCI7ICAvLyDlj5HnpahcbiAgcHVibGljIHBheWFmdGVyRmlsdGVyID0gXCIwXCI7XG4gIHByaXZhdGUgb3JkZXJCeSA9IFwiZ29vZHNfc2FsZW51bVwiOyAvLyDplIDph4/mjpLluo9cbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG4gIHByaXZhdGUgY3VycmVudExvY2F0aW9uOiBTaWRlRHJhd2VyTG9jYXRpb247XG4gIHByaXZhdGUgZ29vZHNMaXN0OiBTZWFyY2hHb29kc1tdID0gW107XG4gIHByaXZhdGUgb3JkZXJCeVR5cGUgPSBcImRlc2NcIjsgICAgLy8g6ZmN5bqP5o6S5YiXXG4gIHByaXZhdGUgcXVlcnlUeXBlID0gXCJcIjsgIC8vIOafpeivouexu+Wei1xuICBwcml2YXRlIGJlZ2luQ291bnQgPSAwOyAgIC8vIOavj+asoeafpeivoueahOmhteeggVxuICBwcml2YXRlIHNlbGVjdENvdW50ID0gMjA7ICAvLyDmr4/mrKHmn6Xor6LnmoTmnaHmlbBcbiAgcHJpdmF0ZSBnY0lkID0gXCJcIjtcbiAgcHJpdmF0ZSBnYklkID0gXCJcIjtcbiAgcHJpdmF0ZSBzQnVpbGRpbmdJZCA9IFwiXCI7XG4gIHByaXZhdGUgc1doZXJlID0gXCJcIjsgICAvLyDlupfpk7ppZFxuICBwcml2YXRlIGtleXdvcmQgPSBcIlwiOyAgLy8g5YWz6ZSu5a2XXG4gIHByaXZhdGUgZmlsdGVyTGlzdDogR29vZHNGaWx0ZXJMaXN0W10gPSBbXTtcbiAgcHJpdmF0ZSBmaWx0ZXJMaXN0U2VydmljZTogR29vZHNGaWx0ZXJbXSA9IFtdO1xuICBwcml2YXRlIHNlbGVjdGVkRmlsdGVyOiBHb29kc0ZpbHRlckxpc3RbXSA9IFtdO1xuICBwcml2YXRlIHdvcmQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZWFyY2hHb29kc1NlcnZpY2U6IFNlYXJjaEdvb2RzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHRoaXMucGFnZS5vbihcImxvYWRlZFwiLCB0aGlzLm9uTG9hZGVkLCB0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5MZWZ0O1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGlmIChwYXJhbXMua2V5d29yZCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMua2V5d29yZCA9IHBhcmFtcy5rZXl3b3JkO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5nYklkICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5nYklkID0gcGFyYW1zLmdiSWQ7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLndvcmQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLndvcmQgPSBwYXJhbXMud29yZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmluaXREYXRhKHRydWUpO1xuICAgIHRoaXMuc2VhcmNoR29vZHNTZXJ2aWNlXG4gICAgICAuZ2V0R29vZHNGaWx0ZXIodGhpcy5nY0lkKVxuICAgICAgLnN1YnNjcmliZSgoZmlsdGVyTGlzdCkgPT4ge1xuICAgICAgICBmaWx0ZXJMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsdGVyTGlzdFNlcnZpY2UucHVzaChmaWx0ZXIpO1xuICAgICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBHb29kc0ZpbHRlckxpc3QoZmlsdGVyLmlkLCBmaWx0ZXIubmFtZSwgZmlsdGVyLnZhbHVlLnNwbGl0KFwiLFwiKSwgLTEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0RGF0YShpc1JlZnJlc2g6IGJvb2xlYW4sIHB1bGxUb1JlZnJlc2g/OiBQdWxsVG9SZWZyZXNoKSB7XG4gICAgdGhpcy5iZWdpbkNvdW50ID0gMDtcbiAgICB0aGlzLnNlYXJjaEdvb2RzU2VydmljZS5zZWFyY2goXG4gICAgICB0aGlzLmdjSWQsIHRoaXMua2V5d29yZCwgdGhpcy5nYklkLCB0aGlzLnNlbGZGaWx0ZXIsIHRoaXMuaW52ZW50b3J5RmlsdGVyLCB0aGlzLnBheWFmdGVyRmlsdGVyLCB0aGlzLnF1ZXJ5VHlwZSwgdGhpcy5zQnVpbGRpbmdJZCwgdGhpcy5vcmRlckJ5LCB0aGlzLm9yZGVyQnlUeXBlLCB0aGlzLmJlZ2luQ291bnQudG9TdHJpbmcoKSwgdGhpcy5zZWxlY3RDb3VudC50b1N0cmluZygpLCB0aGlzLnNXaGVyZSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoaXNSZWZyZXNoKSB7XG4gICAgICAgICAgaWYgKHB1bGxUb1JlZnJlc2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgcHVsbFRvUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZ29vZHNMaXN0ID0gW107XG4gICAgICAgICAgcmVzdWx0LmZvckVhY2goKGdvb2RzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdvb2RzTGlzdC5wdXNoKGdvb2RzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuZm9yRWFjaCgoZ29vZHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ29vZHNMaXN0LnB1c2goZ29vZHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBpZiAoaXNSZWZyZXNoKSB7XG4gICAgICBjb25zdCBsaXN0VmlldyA9IHRoaXMubGlzdFZpZXcubmF0aXZlRWxlbWVudCBhcyBMaXN0VmlldztcbiAgICAgIC8vIGxpc3RWaWV3LnNjcm9sbFRvSW5kZXgoMCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpbWFnZVNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckJ5ID09PVwiZ29vZHNfY3VycmVudF9wcmljZVwiPyh0aGlzLm9yZGVyQnlUeXBlPT09J2Rlc2MnPyBcInJlczovL3ByaWNlZG93blwiOlwicmVzOi8vcHJpY2V1cFwiICk6XCJyZXM6Ly9wcmljZW5vX2Nsb3VkXCI7XG4gIH1cblxuICBwdWJsaWMgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKGV2ZW50LmluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoTGlzdChhcmdzKSB7XG4gICAgY29uc3QgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcbiAgICB0aGlzLmluaXREYXRhKHRydWUsIHB1bGxSZWZyZXNoKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkbW9yZShldmVudCkge1xuICAgIHRoaXMuYmVnaW5Db3VudCArPSB0aGlzLnNlbGVjdENvdW50O1xuICAgIHRoaXMuc2VhcmNoR29vZHNTZXJ2aWNlLnNlYXJjaChcbiAgICAgIHRoaXMuZ2NJZCwgdGhpcy5rZXl3b3JkLCB0aGlzLmdiSWQsIHRoaXMuc2VsZkZpbHRlciwgdGhpcy5pbnZlbnRvcnlGaWx0ZXIsIHRoaXMucGF5YWZ0ZXJGaWx0ZXIsIHRoaXMucXVlcnlUeXBlLCB0aGlzLnNCdWlsZGluZ0lkLCB0aGlzLm9yZGVyQnksIHRoaXMub3JkZXJCeVR5cGUsIHRoaXMuYmVnaW5Db3VudC50b1N0cmluZygpLCB0aGlzLnNlbGVjdENvdW50LnRvU3RyaW5nKCksIHRoaXMuc1doZXJlKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChnb29kcykgPT4ge1xuICAgICAgICAgIHRoaXMuZ29vZHNMaXN0LnB1c2goZ29vZHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPCB0aGlzLnNlbGVjdENvdW50KSB7XG4gICAgICAgICAgLy8g5rKh5pyJ5pu05aSa5pWw5o2uXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTGVmdFRhcCgpIHtcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICB9XG5cbiAgcHVibGljIG9uTG9hZGVkKCkge1xuICAgIGlmICh0aGlzLmRyYXdlci5hbmRyb2lkKSB7XG4gICAgICB0aGlzLmRyYXdlci5hbmRyb2lkLnNldERyYXdlckNsb3NlVGhyZXNob2xkKDUpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5SaWdodDtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5kcmF3ZXIuZHJhd2VyQ29udGVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCIjMDAwMDAwMDBcIik7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICB0aGlzLmRyYXdlci5kcmF3ZXJDb250ZW50U2l6ZSA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICB9XG5cbiAgcHVibGljIG9uUmlnaHRMb2NhdGlvblRhcCgpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5SaWdodDtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0KGV2ZW50KSB7XG4gICAgdGhpcy5vblJpZ2h0TG9jYXRpb25UYXAoKTtcbiAgfVxuXG4gIHB1YmxpYyB0YXBQb3B1bGFyaXR5KGV2ZW50KSB7XG4gICAgdGhpcy5vcmRlckJ5ID0gXCJnb29kc19jbGlja1wiO1xuICAgIHRoaXMub3JkZXJCeVR5cGUgPSBcImRlc2NcIjtcbiAgICB0aGlzLnNldExhYmVsKDApO1xuICAgIHRoaXMuaW5pdERhdGEodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgdGFwU2FsZXMoZXZlbnQpIHtcbiAgICB0aGlzLm9yZGVyQnkgPSBcImdvb2RzX3NhbGVudW1cIjtcbiAgICB0aGlzLm9yZGVyQnlUeXBlID0gXCJkZXNjXCI7XG4gICAgdGhpcy5zZXRMYWJlbCgxKTtcbiAgICB0aGlzLmluaXREYXRhKHRydWUpO1xuICB9XG5cbiAgcHVibGljIHRhcFByaWNlKGV2ZW50KSB7XG4gICAgdGhpcy5vcmRlckJ5ID0gXCJnb29kc19jdXJyZW50X3ByaWNlXCI7XG4gICAgaWYgKHRoaXMub3JkZXJCeVR5cGUgPT09IFwiYXNjXCIpIHtcbiAgICAgIHRoaXMub3JkZXJCeVR5cGUgPSBcImRlc2NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcmRlckJ5VHlwZSA9IFwiYXNjXCI7XG4gICAgfVxuICAgIHRoaXMuc2V0TGFiZWwoMik7XG4gICAgdGhpcy5pbml0RGF0YSh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyB0YXBOZXcoZXZlbnQpIHtcbiAgICB0aGlzLm9yZGVyQnkgPSBcImdvb2RzX3NlbGxlcl90aW1lXCI7XG4gICAgdGhpcy5vcmRlckJ5VHlwZSA9IFwiZGVzY1wiO1xuICAgIHRoaXMuc2V0TGFiZWwoMyk7XG4gICAgdGhpcy5pbml0RGF0YSh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMYWJlbChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgbGFiZWw0ID0gdGhpcy5uZXdMYWJlbC5uYXRpdmVFbGVtZW50IGFzIExhYmVsO1xuICAgIGNvbnN0IGxhYmVsMyA9IHRoaXMucHJpY2VMYWJlbC5uYXRpdmVFbGVtZW50IGFzIExhYmVsO1xuICAgIGNvbnN0IGxhYmVsMiA9IHRoaXMuc2FsZXNMYWJlbC5uYXRpdmVFbGVtZW50IGFzIExhYmVsO1xuICAgIGNvbnN0IGxhYmVsMSA9IHRoaXMucG9wdWxhcml0eUxhYmVsLm5hdGl2ZUVsZW1lbnQgYXMgTGFiZWw7XG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBsYWJlbDEuc2V0KFwiY29sb3JcIiwgXCIjZGIyMjIyXCIpO1xuICAgICAgICBsYWJlbDIuc2V0KFwiY29sb3JcIiwgXCIjNjY2NjY2XCIpO1xuICAgICAgICBsYWJlbDMuc2V0KFwiY29sb3JcIiwgXCIjNjY2NjY2XCIpO1xuICAgICAgICBsYWJlbDQuc2V0KFwiY29sb3JcIiwgXCIjNjY2NjY2XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgbGFiZWwxLnNldChcImNvbG9yXCIsIFwiIzY2NjY2NlwiKTtcbiAgICAgICAgbGFiZWwyLnNldChcImNvbG9yXCIsIFwiI2RiMjIyMlwiKTtcbiAgICAgICAgbGFiZWwzLnNldChcImNvbG9yXCIsIFwiIzY2NjY2NlwiKTtcbiAgICAgICAgbGFiZWw0LnNldChcImNvbG9yXCIsIFwiIzY2NjY2NlwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGxhYmVsMS5zZXQoXCJjb2xvclwiLCBcIiM2NjY2NjZcIik7XG4gICAgICAgIGxhYmVsMi5zZXQoXCJjb2xvclwiLCBcIiM2NjY2NjZcIik7XG4gICAgICAgIGxhYmVsMy5zZXQoXCJjb2xvclwiLCBcIiNkYjIyMjJcIik7XG4gICAgICAgIGxhYmVsNC5zZXQoXCJjb2xvclwiLCBcIiM2NjY2NjZcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBsYWJlbDEuc2V0KFwiY29sb3JcIiwgXCIjNjY2NjY2XCIpO1xuICAgICAgICBsYWJlbDIuc2V0KFwiY29sb3JcIiwgXCIjNjY2NjY2XCIpO1xuICAgICAgICBsYWJlbDMuc2V0KFwiY29sb3JcIiwgXCIjNjY2NjY2XCIpO1xuICAgICAgICBsYWJlbDQuc2V0KFwiY29sb3JcIiwgXCIjZGIyMjIyXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYmFjayhldmVudCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cblxuICBwdWJsaWMgaXRlbXQoZXZlbnQsIG5hbWUpIHtcbiAgICB0aGlzLmxvZ2dlci5sb2cobmFtZSk7XG4gIH1cblxuICBwdWJsaWMgYWRkU2lkZUhlYWRlckl0ZW0oKSB7XG4gICAgY29uc3Qgc3RhY2tMYXlvdXQgPSB0aGlzLnNpZGVMYXlvdXQubmF0aXZlRWxlbWVudCBhcyBTdGFja0xheW91dDtcbiAgICBjb25zdCBsYWIgPSBuZXcgTGFiZWwoKTtcbiAgICBsYWIudGV4dCA9IFwi5pa55byPXCI7XG4gICAgbGFiLnNldChcImNsYXNzXCIsIFwic2lkZVRpdGxlXCIpO1xuICAgIHN0YWNrTGF5b3V0LmFkZENoaWxkKGxhYik7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5zZWxmRmlsdGVyID0gXCIwXCI7XG4gICAgdGhpcy5wYXlhZnRlckZpbHRlciA9IFwiMFwiO1xuICAgIHRoaXMuaW52ZW50b3J5RmlsdGVyID0gXCIwXCI7XG4gICAgdGhpcy5maWx0ZXJMaXN0ID0gW107XG4gICAgdGhpcy5maWx0ZXJMaXN0U2VydmljZS5maWx0ZXIoKGZpbHRlcikgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEdvb2RzRmlsdGVyTGlzdChmaWx0ZXIuaWQsIGZpbHRlci5uYW1lLCBmaWx0ZXIudmFsdWUuc3BsaXQoXCIsXCIpLCAtMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICBsZXQgc3RyID0gXCJcIjtcbiAgICB0aGlzLnNlbGVjdGVkRmlsdGVyLmZvckVhY2goKGZpbHRlciwgaW5kZXgpID0+IHtcbiAgICAgIHN0ciArPSBmaWx0ZXIuaWQgKyBcIixcIiArIGZpbHRlci5pdGVtO1xuICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLnNlbGVjdGVkRmlsdGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgc3RyICs9IFwifFwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc1doZXJlID0gc3RyO1xuXG4gICAgdGhpcy5vbkNsb3NlRHJhd2VyVGFwKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdERhdGEodHJ1ZSk7XG4gICAgICB9LFxuICAgICAgNTAwKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZpbHRlckl0ZW0oYXJnczogR29vZHNGaWx0ZXJMaXN0KSB7XG4gICAgdGhpcy5zZWxlY3RlZEZpbHRlci5mb3JFYWNoKChmaWx0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZmlsdGVyLmlkID09PSBhcmdzLmlkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGaWx0ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBoZWFkZXJUYXAoaW5kZXg6IG51bWJlcikge1xuICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaWYgKHRoaXMuc2VsZkZpbHRlciA9PT0gXCIxXCIpIHtcbiAgICAgICAgICB0aGlzLnNlbGZGaWx0ZXIgPSBcIjBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGZGaWx0ZXIgPSBcIjFcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYgKHRoaXMucGF5YWZ0ZXJGaWx0ZXIgPT09IFwiMVwiKSB7XG4gICAgICAgICAgdGhpcy5wYXlhZnRlckZpbHRlciA9IFwiMFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGF5YWZ0ZXJGaWx0ZXIgPSBcIjFcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5RmlsdGVyID09PSBcIjFcIikge1xuICAgICAgICAgIHRoaXMuaW52ZW50b3J5RmlsdGVyID0gXCIwXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbnZlbnRvcnlGaWx0ZXIgPSBcIjFcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==