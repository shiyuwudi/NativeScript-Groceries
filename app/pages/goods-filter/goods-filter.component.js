"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by musiwen on 2017/6/13.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var logger_service_1 = require("../../service/logger.service");
var goods_filter_list_1 = require("../../shared/goods/goods-filter-list");
var GoodsFilterComponent = (function () {
    function GoodsFilterComponent(router, logger) {
        this.router = router;
        this.logger = logger;
        this.itemName = "全部";
        this.isShow = false;
        this.onItemTap = new core_1.EventEmitter();
        this.index = -1;
        this.itemHeight = 40;
    }
    GoodsFilterComponent.prototype.ngOnInit = function () {
        // 搞点大事情
    };
    GoodsFilterComponent.prototype.itemTap = function (event, lab, index) {
        if (index === this.index) {
            this.index = -1;
            this.itemName = "全部";
        }
        else {
            this.index = index;
            this.itemName = lab;
        }
        var goodsFilterList = new goods_filter_list_1.GoodsFilterList(this.id, this.itemName, [], this.index);
        this.onItemTap.emit(goodsFilterList);
    };
    GoodsFilterComponent.prototype.open = function () {
        if (this.isShow) {
            this.itemHeight = 40;
            this.isShow = !this.isShow;
        }
        else {
            var lines = Math.ceil(this.labs.length / 3);
            this.itemHeight = 40 * lines;
            this.isShow = !this.isShow;
        }
    };
    return GoodsFilterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], GoodsFilterComponent.prototype, "labs", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GoodsFilterComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GoodsFilterComponent.prototype, "id", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GoodsFilterComponent.prototype, "onItemTap", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GoodsFilterComponent.prototype, "index", void 0);
GoodsFilterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "goods-filter",
        templateUrl: "./goods-filter.component.html",
        styleUrls: ["./goods-filter.common.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router, logger_service_1.Logger])
], GoodsFilterComponent);
exports.GoodsFilterComponent = GoodsFilterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdvb2RzLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILHNDQUd1QjtBQUN2QiwwQ0FBdUM7QUFDdkMsK0RBQW9EO0FBQ3BELDBFQUFxRTtBQVFyRSxJQUFhLG9CQUFvQjtJQVUvQiw4QkFBb0IsTUFBYyxFQUFVLE1BQWM7UUFBdEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFObkQsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2pDLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMzQixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBR2hDLENBQUM7SUFFTSx1Q0FBUSxHQUFmO1FBQ0UsUUFBUTtJQUNWLENBQUM7SUFFTyxzQ0FBTyxHQUFmLFVBQWdCLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSztRQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBTSxlQUFlLEdBQUcsSUFBSSxtQ0FBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxtQ0FBSSxHQUFaO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF0Q1U7SUFBUixZQUFLLEVBQUU7O2tEQUF1QjtBQUN0QjtJQUFSLFlBQUssRUFBRTs7bURBQXNCO0FBQ3JCO0lBQVIsWUFBSyxFQUFFOztnREFBbUI7QUFHakI7SUFBVCxhQUFNLEVBQUU7O3VEQUF3QztBQUN4QztJQUFSLFlBQUssRUFBRTs7bURBQTJCO0FBUHhCLG9CQUFvQjtJQU5oQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDekMsQ0FBQztxQ0FXNEIsZUFBTSxFQUFrQix1QkFBTTtHQVYvQyxvQkFBb0IsQ0F1Q2hDO0FBdkNZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtdXNpd2VuIG9uIDIwMTcvNi8xMy5cbiAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LFxuICBWaWV3Q2hpbGQsIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvbG9nZ2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7R29vZHNGaWx0ZXJMaXN0fSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dvb2RzL2dvb2RzLWZpbHRlci1saXN0XCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJnb29kcy1maWx0ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9nb29kcy1maWx0ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2dvb2RzLWZpbHRlci5jb21tb24uY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBHb29kc0ZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJzOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBpZDogbnVtYmVyO1xuICBwdWJsaWMgaXRlbU5hbWU6IHN0cmluZyA9IFwi5YWo6YOoXCI7XG4gIHB1YmxpYyBpc1Nob3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHByaXZhdGUgb25JdGVtVGFwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBwdWJsaWMgaW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGl0ZW1IZWlnaHQ6IG51bWJlciA9IDQwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyDmkJ7ngrnlpKfkuovmg4VcbiAgfVxuXG4gIHByaXZhdGUgaXRlbVRhcChldmVudCwgbGFiLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5pbmRleCkge1xuICAgICAgdGhpcy5pbmRleCA9IC0xO1xuICAgICAgdGhpcy5pdGVtTmFtZSA9IFwi5YWo6YOoXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuaXRlbU5hbWUgPSBsYWI7XG4gICAgfVxuICAgIGNvbnN0IGdvb2RzRmlsdGVyTGlzdCA9IG5ldyBHb29kc0ZpbHRlckxpc3QodGhpcy5pZCwgdGhpcy5pdGVtTmFtZSwgW10sIHRoaXMuaW5kZXgpO1xuICAgIHRoaXMub25JdGVtVGFwLmVtaXQoZ29vZHNGaWx0ZXJMaXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbigpIHtcbiAgICBpZiAodGhpcy5pc1Nob3cpIHtcbiAgICAgIHRoaXMuaXRlbUhlaWdodCA9IDQwO1xuICAgICAgdGhpcy5pc1Nob3cgPSAhdGhpcy5pc1Nob3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxpbmVzID0gTWF0aC5jZWlsKHRoaXMubGFicy5sZW5ndGggLyAzKTtcbiAgICAgIHRoaXMuaXRlbUhlaWdodCA9IDQwICogbGluZXM7XG4gICAgICB0aGlzLmlzU2hvdyA9ICF0aGlzLmlzU2hvdztcbiAgICB9XG4gIH1cbn1cbiJdfQ==