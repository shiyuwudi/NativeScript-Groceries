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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZFO0FBQzdFLDBDQUF5QztBQVF6QyxJQUFhLGVBQWU7SUFVMUIseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVDNCLFVBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQU9oRSxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFFWCxDQUFDO0lBQy9CLGtDQUFRLEdBQWY7UUFDRSxRQUFRO0lBQ1YsQ0FBQztJQUVPLCtCQUFLLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFoQlU7SUFBUixZQUFLLEVBQUU7OEJBQWMsS0FBSzs2Q0FJeEI7QUFDTTtJQUFSLFlBQUssRUFBRTs7c0RBQXNCO0FBQ3BCO0lBQVQsYUFBTSxFQUFFOztpREFBdUM7QUFSckMsZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ2xDLENBQUM7cUNBVzRCLGVBQU07R0FWdkIsZUFBZSxDQWtCM0I7QUFsQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJ0YWJiYXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9pbmRleC1jb21tb24uY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbGlua3MgPSBbXCIvaG9tZS9cIiwgXCIvaG9tZS90d29cIiwgXCIvaG9tZS90aHJlZVwiLCBcIi9ob21lL2ZvdXJcIiwgXCIvaG9tZS9maXZlXCJdO1xuICBASW5wdXQoKSBwdWJsaWMgdGFiczogQXJyYXk8e1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICBzZWxlY3RlZEltYWdlOiBzdHJpbmc7XG4gIH0+O1xuICBASW5wdXQoKSBwdWJsaWMgc2VsZWN0ZWRJbmRleDtcbiAgQE91dHB1dCgpIHByaXZhdGUgb25UYWJUYXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIOaQnueCueWkp+S6i+aDhVxuICB9XG5cbiAgcHJpdmF0ZSBvblRhcChpbmRleCkge1xuICAgIHRoaXMub25UYWJUYXAuZW1pdChpbmRleCk7XG4gIH1cbn1cbiJdfQ==