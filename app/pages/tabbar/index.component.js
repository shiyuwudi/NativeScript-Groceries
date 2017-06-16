"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TabbarComponent = (function () {
    function TabbarComponent(router) {
        this.router = router;
        this.links = ["/home/", "/home/two", "/home/three", "/home/four", "/home/five"];
        this.onTabTap = new core_1.EventEmitter();
    }
    TabbarComponent.prototype.ngOnInit = function () {
        // 搞点大事情
    };
    TabbarComponent.prototype.onTap = function (index) {
        this.onTabTap.emit(index);
    };
    return TabbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TabbarComponent.prototype, "tabs", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TabbarComponent.prototype, "selectedIndex", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TabbarComponent.prototype, "onTabTap", void 0);
TabbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "tabbar",
        templateUrl: "./index.html",
        styleUrls: ["./index-common.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], TabbarComponent);
exports.TabbarComponent = TabbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZFO0FBQzdFLDBDQUF5QztBQVF6QyxJQUFhLGVBQWU7SUFVMUIseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVDNCLFVBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQU9oRSxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFFWCxDQUFDO0lBQy9CLGtDQUFRLEdBQWY7UUFDRSxRQUFRO0lBQ1YsQ0FBQztJQUVPLCtCQUFLLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFoQlU7SUFBUixZQUFLLEVBQUU7OEJBQWMsS0FBSzs2Q0FJeEI7QUFDTTtJQUFSLFlBQUssRUFBRTs7c0RBQXNCO0FBQ3BCO0lBQVQsYUFBTSxFQUFFOztpREFBdUM7QUFSckMsZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ2xDLENBQUM7cUNBVzRCLGVBQU07R0FWdkIsZUFBZSxDQWtCM0I7QUFsQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwidGFiYmFyXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2luZGV4LWNvbW1vbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBsaW5rcyA9IFtcIi9ob21lL1wiLCBcIi9ob21lL3R3b1wiLCBcIi9ob21lL3RocmVlXCIsIFwiL2hvbWUvZm91clwiLCBcIi9ob21lL2ZpdmVcIl07XHJcbiAgQElucHV0KCkgcHVibGljIHRhYnM6IEFycmF5PHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWRJbWFnZTogc3RyaW5nO1xyXG4gIH0+O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZEluZGV4O1xyXG4gIEBPdXRwdXQoKSBwcml2YXRlIG9uVGFiVGFwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIC8vIOaQnueCueWkp+S6i+aDhVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRhcChpbmRleCkge1xyXG4gICAgdGhpcy5vblRhYlRhcC5lbWl0KGluZGV4KTtcclxuICB9XHJcbn1cclxuIl19