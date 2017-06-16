"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var OneComponent = (function () {
    function OneComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    OneComponent.prototype.onNavBtnTap = function () {
        this.routerExtensions.back();
    };
    OneComponent.prototype.ngOnInit = function () {
        // 搞点事情
    };
    return OneComponent;
}());
OneComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "page-one",
        templateUrl: "./one.component.html",
        styleUrls: ["./one-common.css"],
    }),
    __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
], OneComponent);
exports.OneComponent = OneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsNkRBQXNEO0FBUXRELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBQ3BELGtDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTSwrQkFBUSxHQUFmO1FBQ0UsT0FBTztJQUNULENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDaEMsQ0FBQztxQ0FFc0MsdUNBQWdCO0dBRDNDLFlBQVksQ0FReEI7QUFSWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiBcInBhZ2Utb25lXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9vbmUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vb25lLWNvbW1vbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcbiAgcHVibGljIG9uTmF2QnRuVGFwKCkge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICB9XHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgLy8g5pCe54K55LqL5oOFXHJcbiAgfVxyXG59XHJcbiJdfQ==