/**
 * Created by apple12 on 2017/6/11.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("tns-core-modules/ui/page");
var MyActionBarComponent = (function () {
    function MyActionBarComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
    }
    MyActionBarComponent.prototype.ngOnInit = function () {
        // 搞点大事情
        this.page.actionBar.navigationButton = null;
    };
    MyActionBarComponent.prototype.onNavBtnTap = function () {
        this.routerExtensions.backToPreviousPage();
    };
    return MyActionBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyActionBarComponent.prototype, "title", void 0);
MyActionBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "action-bar",
        templateUrl: "./action-bar.component.html",
    }),
    __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, page_1.Page])
], MyActionBarComponent);
exports.MyActionBarComponent = MyActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7O0FBRUgsc0NBQXVEO0FBQ3ZELDZEQUFzRDtBQUN0RCxpREFBOEM7QUFPOUMsSUFBYSxvQkFBb0I7SUFFL0IsOEJBQW9CLGdCQUFrQyxFQUFVLElBQVU7UUFBdEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBQ3ZFLHVDQUFRLEdBQWY7UUFDRSxRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFDTSwwQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVFU7SUFBUixZQUFLLEVBQUU7O21EQUFzQjtBQURuQixvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsNkJBQTZCO0tBQzNDLENBQUM7cUNBR3NDLHVDQUFnQixFQUFnQixXQUFJO0dBRi9ELG9CQUFvQixDQVVoQztBQVZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFwcGxlMTIgb24gMjAxNy82LzExLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwiYWN0aW9uLWJhclwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIC8vIOaQnueCueWkp+S6i+aDhVxyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uID0gbnVsbDtcclxuICB9XHJcbiAgcHVibGljIG9uTmF2QnRuVGFwKCkge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=