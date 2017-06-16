"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by musiwen on 2017/6/15.
 */
var core_1 = require("@angular/core");
var brand_list_service_1 = require("../../shared/brand/brand-list.service");
var router_1 = require("@angular/router");
var logger_service_1 = require("../../service/logger.service");
var brand_item_1 = require("../../shared/brand/brand-item");
var page_1 = require("tns-core-modules/ui/page");
var platform_1 = require("platform");
var utils = require("utils/utils");
var BrandListComponent = (function () {
    function BrandListComponent(brandService, router, logger, page) {
        this.brandService = brandService;
        this.router = router;
        this.logger = logger;
        this.page = page;
        this.brandItemList = [];
        this.keyFontSize = (platform_1.screen.mainScreen.heightDIPs - 48) / 26 - 10;
        this.barLeft = platform_1.screen.mainScreen.widthDIPs - this.keyFontSize - 15;
        this.words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }
    BrandListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = true;
        var list = [];
        this.brandService.getBrandLsit()
            .subscribe(function (brandList) {
            brandList.forEach(function (brand) {
                brand.brand_list.forEach(function (brandItem, index) {
                    list.push(new brand_item_1.BrandItem(brandItem.id, brandItem.name, brandItem.photo, index, brand.word));
                });
            });
            _this.brandItemList = list;
        });
    };
    BrandListComponent.prototype.onTouch = function (event) {
        var gridLayout = this.barLayout.nativeElement;
        var lineHeight = utils.layout.toDeviceIndependentPixels(gridLayout.getMeasuredHeight()) / 26;
        var index = Math.ceil(event.getY() / lineHeight);
        if (index <= 0) {
            index = 1;
        }
        else if (index > 26) {
            index = 26;
        }
        for (var i = index - 1; i < 26; i++) {
            var keyIndex = this.hasKey(this.words[i]);
            if (keyIndex !== -1) {
                var listView = this.listView.nativeElement;
                listView.scrollToIndex(keyIndex);
                return;
            }
        }
    };
    BrandListComponent.prototype.hasKey = function (key) {
        for (var i = 0; i < this.brandItemList.length; i++) {
            if (key === this.brandItemList[i].key) {
                return i;
            }
        }
        return -1;
    };
    BrandListComponent.prototype.onItemTap = function (event) {
        var brandItem = this.brandItemList[event.index];
        this.router.navigate(["/home//goodsSearch"], {
            queryParams: {
                gbId: brandItem.id.toString(),
                word: brandItem.name,
            },
        });
    };
    return BrandListComponent;
}());
__decorate([
    core_1.ViewChild("keyBar"),
    __metadata("design:type", core_1.ElementRef)
], BrandListComponent.prototype, "barLayout", void 0);
__decorate([
    core_1.ViewChild("listView"),
    __metadata("design:type", core_1.ElementRef)
], BrandListComponent.prototype, "listView", void 0);
BrandListComponent = __decorate([
    core_1.Component({
        selector: "brand-list",
        moduleId: module.id,
        providers: [brand_list_service_1.BrandListService],
        templateUrl: "./brand-list.component.html",
        styleUrls: ["./brand-list.common.css"],
    }),
    __metadata("design:paramtypes", [brand_list_service_1.BrandListService, router_1.Router, logger_service_1.Logger, page_1.Page])
], BrandListComponent);
exports.BrandListComponent = BrandListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmQtbGlzdC5jb21wb25lbXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicmFuZC1saXN0LmNvbXBvbmVtdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQXVFO0FBQ3ZFLDRFQUF1RTtBQUN2RSwwQ0FBdUM7QUFDdkMsK0RBQW9EO0FBQ3BELDREQUF3RDtBQUN4RCxpREFBOEM7QUFDOUMscUNBQWdDO0FBR2hDLG1DQUFxQztBQVVyQyxJQUFhLGtCQUFrQjtJQVE3Qiw0QkFBb0IsWUFBOEIsRUFBVSxNQUFjLEVBQVUsTUFBYyxFQUFVLElBQVU7UUFBbEcsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDlHLGtCQUFhLEdBQWdCLEVBQUUsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLENBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDNUQsWUFBTyxHQUFXLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0RSxVQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFHbkosQ0FBQztJQUVNLHFDQUFRLEdBQWY7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFNLElBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO2FBQzdCLFNBQVMsQ0FBQyxVQUFDLFNBQVM7WUFDbkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQ3RCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUyxFQUFFLEtBQUs7b0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxzQkFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0YsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG9DQUFPLEdBQWQsVUFBZSxLQUE0QjtRQUN6QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQTJCLENBQUM7UUFDOUQsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDWixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDO1FBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUF5QixDQUFDO2dCQUN6RCxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNLENBQUM7WUFDVCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxtQ0FBTSxHQUFiLFVBQWMsR0FBVztRQUN2QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkQsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVNLHNDQUFTLEdBQWhCLFVBQWlCLEtBQW9CO1FBQ25DLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUMzQyxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUM3QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7YUFDckI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBOURELElBOERDO0FBN0RzQjtJQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQzs4QkFBb0IsaUJBQVU7cURBQUM7QUFDNUI7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQW1CLGlCQUFVO29EQUFDO0FBRnpDLGtCQUFrQjtJQVA5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFNBQVMsRUFBRSxDQUFDLHFDQUFnQixDQUFDO1FBQzdCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDdkMsQ0FBQztxQ0FTa0MscUNBQWdCLEVBQWtCLGVBQU0sRUFBa0IsdUJBQU0sRUFBZ0IsV0FBSTtHQVIzRyxrQkFBa0IsQ0E4RDlCO0FBOURZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtdXNpd2VuIG9uIDIwMTcvNi8xNS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCcmFuZExpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2JyYW5kL2JyYW5kLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi4vLi4vc2VydmljZS9sb2dnZXIuc2VydmljZVwiO1xuaW1wb3J0IHtCcmFuZEl0ZW19IGZyb20gXCIuLi8uLi9zaGFyZWQvYnJhbmQvYnJhbmQtaXRlbVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQge3NjcmVlbn0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQge1RvdWNoR2VzdHVyZUV2ZW50RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7R3JpZExheW91dH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5pbXBvcnQge0l0ZW1FdmVudERhdGEsIExpc3RWaWV3fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImJyYW5kLWxpc3RcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgcHJvdmlkZXJzOiBbQnJhbmRMaXN0U2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vYnJhbmQtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYnJhbmQtbGlzdC5jb21tb24uY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBCcmFuZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwia2V5QmFyXCIpIHByaXZhdGUgYmFyTGF5b3V0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibGlzdFZpZXdcIikgcHJpdmF0ZSBsaXN0VmlldzogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBicmFuZEl0ZW1MaXN0OiBCcmFuZEl0ZW1bXSA9IFtdO1xuICBwcml2YXRlIGtleUZvbnRTaXplID0gKHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMgLSA0OCkgLyAyNiAtIDEwO1xuICBwcml2YXRlIGJhckxlZnQ6IG51bWJlciA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAtIHRoaXMua2V5Rm9udFNpemUgLSAxNTtcbiAgcHJpdmF0ZSB3b3JkcyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkdcIiwgXCJLXCIsIFwiTFwiLCBcIk1cIiwgXCJOXCIsIFwiT1wiLCBcIlBcIiwgXCJRXCIsIFwiUlwiLCBcIlNcIiwgXCJUXCIsIFwiVVwiLCBcIlZcIiwgXCJXXCIsIFwiWFwiLCBcIllcIiwgXCJaXCJdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJhbmRTZXJ2aWNlOiBCcmFuZExpc3RTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICBjb25zdCBsaXN0OiBCcmFuZEl0ZW1bXSA9IFtdO1xuICAgIHRoaXMuYnJhbmRTZXJ2aWNlLmdldEJyYW5kTHNpdCgpXG4gICAgICAuc3Vic2NyaWJlKChicmFuZExpc3QpID0+IHtcbiAgICAgICAgYnJhbmRMaXN0LmZvckVhY2goKGJyYW5kKSA9PiB7XG4gICAgICAgICAgYnJhbmQuYnJhbmRfbGlzdC5mb3JFYWNoKChicmFuZEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsaXN0LnB1c2gobmV3IEJyYW5kSXRlbShicmFuZEl0ZW0uaWQsIGJyYW5kSXRlbS5uYW1lLCBicmFuZEl0ZW0ucGhvdG8sIGluZGV4LCBicmFuZC53b3JkKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJyYW5kSXRlbUxpc3QgPSBsaXN0O1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25Ub3VjaChldmVudDogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgY29uc3QgZ3JpZExheW91dCA9IHRoaXMuYmFyTGF5b3V0Lm5hdGl2ZUVsZW1lbnQgYXMgR3JpZExheW91dDtcbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdXRpbHMubGF5b3V0LnRvRGV2aWNlSW5kZXBlbmRlbnRQaXhlbHMoZ3JpZExheW91dC5nZXRNZWFzdXJlZEhlaWdodCgpKSAvIDI2O1xuICAgIGxldCBpbmRleCA9IE1hdGguY2VpbChldmVudC5nZXRZKCkgLyBsaW5lSGVpZ2h0KTtcbiAgICBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgaW5kZXggPSAxO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPiAyNikge1xuICAgICAgaW5kZXggPSAyNjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGluZGV4IC0gMTsgaSA8IDI2OyBpKyspIHtcbiAgICAgIGNvbnN0IGtleUluZGV4ID0gdGhpcy5oYXNLZXkodGhpcy53b3Jkc1tpXSk7XG4gICAgICBpZiAoa2V5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGxpc3RWaWV3ID0gdGhpcy5saXN0Vmlldy5uYXRpdmVFbGVtZW50IGFzIExpc3RWaWV3O1xuICAgICAgICBsaXN0Vmlldy5zY3JvbGxUb0luZGV4KGtleUluZGV4KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNLZXkoa2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5icmFuZEl0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoa2V5ID09PSB0aGlzLmJyYW5kSXRlbUxpc3RbaV0ua2V5KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBwdWJsaWMgb25JdGVtVGFwKGV2ZW50OiBJdGVtRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnJhbmRJdGVtID0gdGhpcy5icmFuZEl0ZW1MaXN0W2V2ZW50LmluZGV4XTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZS8vZ29vZHNTZWFyY2hcIl0sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIGdiSWQ6IGJyYW5kSXRlbS5pZC50b1N0cmluZygpLFxuICAgICAgICB3b3JkOiBicmFuZEl0ZW0ubmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==