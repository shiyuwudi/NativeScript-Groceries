"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryListService.load().subscribe(function (loadedGroceries) {
            _this.groceryList = loadedGroceries;
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        // 路径是从app层往下算起？
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list.css", "pages/list/list-common.css"],
        providers: [grocery_list_service_1.GroceryListService],
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSxrRkFBK0U7QUFTL0UsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUYxRCxnQkFBVyxHQUFtQixFQUFFLENBQUM7SUFJakMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxlQUErQjtZQUNyRSxLQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsZ0JBQWdCO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsNEJBQTRCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7S0FDbEMsQ0FBQztxQ0FLMEMseUNBQWtCO0dBSmpELGFBQWEsQ0FhekI7QUFiWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnlcIjtcbmltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgLy8g6Lev5b6E5piv5LuOYXBw5bGC5b6A5LiL566X6LW377yfXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5TGlzdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGdyb2NlcnlMaXN0OiBBcnJheTxHcm9jZXJ5PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKS5zdWJzY3JpYmUoKGxvYWRlZEdyb2NlcmllczogQXJyYXk8R3JvY2VyeT4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QgPSBsb2FkZWRHcm9jZXJpZXM7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=