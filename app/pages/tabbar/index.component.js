"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabbarComponent = (function () {
    function TabbarComponent() {
        this.onTabTap = new core_1.EventEmitter();
        this.allTabs = [];
    }
    TabbarComponent.prototype.ngOnInit = function () {
    };
    TabbarComponent.prototype.onTap = function (index) {
        this.onTabTap.emit(index);
    };
    return TabbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TabbarComponent.prototype, "selectedIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TabbarComponent.prototype, "tabs", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TabbarComponent.prototype, "onTabTap", void 0);
TabbarComponent = __decorate([
    core_1.Component({
        selector: "tabbar",
        templateUrl: "pages/tabbar/index.html",
        styleUrls: ["pages/tabbar/index-common.css"],
    })
], TabbarComponent);
exports.TabbarComponent = TabbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBVS9FLElBQWEsZUFBZTtJQUw1QjtRQWFvQixhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFeEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQVN2QixDQUFDO0lBUFEsa0NBQVEsR0FBZjtJQUVBLENBQUM7SUFFTywrQkFBSyxHQUFiLFVBQWMsS0FBSztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbEJVO0lBQVIsWUFBSyxFQUFFOztzREFBdUI7QUFDdEI7SUFBUixZQUFLLEVBQUU7OEJBQWUsS0FBSzs2Q0FJekI7QUFFTztJQUFULGFBQU0sRUFBRTs7aURBQXVDO0FBUnJDLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQztHQUNXLGVBQWUsQ0FtQjNCO0FBbkJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IFRhYlZpZXcsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGFiYmFyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RhYmJhci9pbmRleC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdGFiYmFyL2luZGV4LWNvbW1vbi5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHByaXZhdGUgc2VsZWN0ZWRJbmRleDtcbiAgQElucHV0KCkgcHJpdmF0ZSB0YWJzOiBBcnJheTx7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIHNlbGVjdGVkSW1hZ2U6IHN0cmluZztcbiAgfT47XG5cbiAgQE91dHB1dCgpIHByaXZhdGUgb25UYWJUYXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBhbGxUYWJzID0gW107XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBvblRhcChpbmRleCkge1xuICAgIHRoaXMub25UYWJUYXAuZW1pdChpbmRleCk7XG4gIH1cbn1cbiJdfQ==