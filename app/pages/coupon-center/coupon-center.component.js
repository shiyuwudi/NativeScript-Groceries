"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by musiwen on 2017/6/16.
 */
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var coupon_1 = require("../../shared/coupon/coupon");
var coupon_service_1 = require("../../shared/coupon/coupon.service");
var logger_service_1 = require("../../service/logger.service");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var router_1 = require("@angular/router");
var CouponCenterComponent = (function () {
    function CouponCenterComponent(page, couponService, logger, router) {
        this.page = page;
        this.couponService = couponService;
        this.logger = logger;
        this.router = router;
    }
    CouponCenterComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.initData();
    };
    CouponCenterComponent.prototype.initData = function (pullToRefresh) {
        var _this = this;
        this.couponService.getCouponList()
            .subscribe(function (couponList) {
            couponList.unshift(new coupon_1.Coupon(0, 0, "", "", 0, "", 0, "", 0));
            _this.couponList = new observable_array_1.ObservableArray(couponList);
            if (pullToRefresh != null && pullToRefresh.refreshing === true) {
                pullToRefresh.refreshing = false;
            }
        }, function (error) {
            _this.logger.error(error.toString());
        });
    };
    CouponCenterComponent.prototype.refreshList = function (args) {
        var pullRefresh = args.object;
        this.initData(pullRefresh);
    };
    CouponCenterComponent.prototype.onItemTap = function (event) {
        if (event.index !== 0) {
            var coupon = this.couponList.getItem(event.index);
            this.router.navigate(["/home//couponGet"], {
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
            });
        }
    };
    return CouponCenterComponent;
}());
CouponCenterComponent = __decorate([
    core_1.Component({
        selector: "coupon-center",
        moduleId: module.id,
        providers: [coupon_service_1.CouponService],
        templateUrl: "./coupon-center.component.html",
        styleUrls: ["./coupon-center.common.css"],
    }),
    __metadata("design:paramtypes", [page_1.Page, coupon_service_1.CouponService, logger_service_1.Logger, router_1.Router])
], CouponCenterComponent);
exports.CouponCenterComponent = CouponCenterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNlbnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3Vwb24tY2VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQWdEO0FBQ2hELGlEQUE4QztBQUM5QyxxREFBa0Q7QUFDbEQscUVBQWlFO0FBQ2pFLCtEQUFvRDtBQUNwRCwyRUFBdUU7QUFHdkUsMENBQXVDO0FBU3ZDLElBQWEscUJBQXFCO0lBR2hDLCtCQUFvQixJQUFVLEVBQVUsYUFBNEIsRUFBVSxNQUFjLEVBQVUsTUFBYztRQUFoRyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNwSCxDQUFDO0lBRU0sd0NBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVNLHdDQUFRLEdBQWYsVUFBZ0IsYUFBNkI7UUFBN0MsaUJBV0M7UUFWQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTthQUMvQixTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ3BCLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxlQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLElBQUk7UUFDckIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSx5Q0FBUyxHQUFoQixVQUFpQixLQUFvQjtRQUNuQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFDdkM7Z0JBQ0UsV0FBVyxFQUFFO29CQUNYLGNBQWMsRUFBRSxNQUFNLENBQUMsY0FBYztvQkFDckMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhO29CQUNuQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCO29CQUMzQyxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWU7b0JBQ3ZDLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztvQkFDM0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO29CQUMvQixtQkFBbUIsRUFBRSxNQUFNLENBQUMsbUJBQW1CO29CQUMvQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7b0JBQzdCLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxxQkFBcUI7aUJBQ3BEO2FBQ0YsQ0FBQyxDQUNIO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUFqRFkscUJBQXFCO0lBUGpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUMxQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQzFDLENBQUM7cUNBSTBCLFdBQUksRUFBeUIsOEJBQWEsRUFBa0IsdUJBQU0sRUFBa0IsZUFBTTtHQUh6RyxxQkFBcUIsQ0FpRGpDO0FBakRZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG11c2l3ZW4gb24gMjAxNy82LzE2LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7Q291cG9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvdXBvbi9jb3Vwb25cIjtcclxuaW1wb3J0IHtDb3Vwb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvdXBvbi9jb3Vwb24uc2VydmljZVwiO1xyXG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvbG9nZ2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlQXJyYXl9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQge1B1bGxUb1JlZnJlc2h9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiO1xyXG5pbXBvcnQge0l0ZW1FdmVudERhdGEsIExpc3RWaWV3fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImNvdXBvbi1jZW50ZXJcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHByb3ZpZGVyczogW0NvdXBvblNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY291cG9uLWNlbnRlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jb3Vwb24tY2VudGVyLmNvbW1vbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3Vwb25DZW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb3Vwb25MaXN0OiBPYnNlcnZhYmxlQXJyYXk8Q291cG9uPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGNvdXBvblNlcnZpY2U6IENvdXBvblNlcnZpY2UsIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXREYXRhKHB1bGxUb1JlZnJlc2g/OiBQdWxsVG9SZWZyZXNoKSB7XHJcbiAgICB0aGlzLmNvdXBvblNlcnZpY2UuZ2V0Q291cG9uTGlzdCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGNvdXBvbkxpc3QpID0+IHtcclxuICAgICAgICBjb3Vwb25MaXN0LnVuc2hpZnQobmV3IENvdXBvbigwLCAwLCBcIlwiLCBcIlwiLCAwLCBcIlwiLCAwLCBcIlwiLCAwKSk7XHJcbiAgICAgICAgdGhpcy5jb3Vwb25MaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheShjb3Vwb25MaXN0KTtcclxuICAgICAgICBpZiAocHVsbFRvUmVmcmVzaCAhPSBudWxsICYmIHB1bGxUb1JlZnJlc2gucmVmcmVzaGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgcHVsbFRvUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgY29uc3QgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgIHRoaXMuaW5pdERhdGEocHVsbFJlZnJlc2gpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uSXRlbVRhcChldmVudDogSXRlbUV2ZW50RGF0YSkge1xyXG4gICAgaWYgKGV2ZW50LmluZGV4ICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGNvdXBvbiA9IHRoaXMuY291cG9uTGlzdC5nZXRJdGVtKGV2ZW50LmluZGV4KTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWUvL2NvdXBvbkdldFwiXSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBjYXB0dXJlX3N0YXR1czogY291cG9uLmNhcHR1cmVfc3RhdHVzLFxyXG4gICAgICAgICAgICBjb3Vwb25fYW1vdW50OiBjb3Vwb24uY291cG9uX2Ftb3VudCxcclxuICAgICAgICAgICAgY291cG9uX2JlZ2luX3RpbWU6IGNvdXBvbi5jb3Vwb25fYmVnaW5fdGltZSxcclxuICAgICAgICAgICAgY291cG9uX2VuZF90aW1lOiBjb3Vwb24uY291cG9uX2VuZF90aW1lLFxyXG4gICAgICAgICAgICBjb3Vwb25faWQ6IGNvdXBvbi5jb3Vwb25faWQsXHJcbiAgICAgICAgICAgIGNvdXBvbl9uYW1lOiBjb3Vwb24uY291cG9uX25hbWUsXHJcbiAgICAgICAgICAgIGNvdXBvbl9vcmRlcl9hbW91bnQ6IGNvdXBvbi5jb3Vwb25fb3JkZXJfYW1vdW50LFxyXG4gICAgICAgICAgICBjb3Vwb25fcGljOiBjb3Vwb24uY291cG9uX3BpYyxcclxuICAgICAgICAgICAgY291cG9uX3N1cnBsdXNfYW1vdW50OiBjb3Vwb24uY291cG9uX3N1cnBsdXNfYW1vdW50LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==