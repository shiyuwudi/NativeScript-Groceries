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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsNkRBQXNEO0FBUXRELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBQ3BELGtDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTSwrQkFBUSxHQUFmO1FBQ0UsT0FBTztJQUNULENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDaEMsQ0FBQztxQ0FFc0MsdUNBQWdCO0dBRDNDLFlBQVksQ0FReEI7QUFSWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwicGFnZS1vbmVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9vbmUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL29uZS1jb21tb24uY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuICBwdWJsaWMgb25OYXZCdG5UYXAoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgLy8g5pCe54K55LqL5oOFXG4gIH1cbn1cbiJdfQ==