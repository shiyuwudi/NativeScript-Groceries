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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7O0FBRUgsc0NBQXVEO0FBQ3ZELDZEQUFzRDtBQUN0RCxpREFBOEM7QUFPOUMsSUFBYSxvQkFBb0I7SUFFL0IsOEJBQW9CLGdCQUFrQyxFQUFVLElBQVU7UUFBdEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBQ3ZFLHVDQUFRLEdBQWY7UUFDRSxRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFDTSwwQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVFU7SUFBUixZQUFLLEVBQUU7O21EQUFzQjtBQURuQixvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsNkJBQTZCO0tBQzNDLENBQUM7cUNBR3NDLHVDQUFnQixFQUFnQixXQUFJO0dBRi9ELG9CQUFvQixDQVVoQztBQVZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBhcHBsZTEyIG9uIDIwMTcvNi8xMS5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGlvbi1iYXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIE15QWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgLy8g5pCe54K55aSn5LqL5oOFXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uID0gbnVsbDtcbiAgfVxuICBwdWJsaWMgb25OYXZCdG5UYXAoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG59XG4iXX0=