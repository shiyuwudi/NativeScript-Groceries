"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load().subscribe(function (loadedGroceries) {
            _this.groceryList = loadedGroceries.reverse();
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.share = function () {
        var listString = "分享给你我的杂货清单：" + this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join("，")
            .trim();
        SocialShare.shareText(listString);
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        // 检查填写
        if (this.grocery.trim() === "") {
            alert({
                message: "请填写内容",
                okButtonText: "好吧",
            });
            return;
        }
        //收回键盘2
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        // 提交数据
        var onSuccess = function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        };
        var onFailure = function () {
            alert({
                message: "项目添加失败",
                okButtonText: "好吧",
            });
            _this.grocery = "";
        };
        this.groceryListService.add(this.grocery).subscribe(onSuccess, onFailure);
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSx1REFBeUQ7QUFHekQsa0ZBQStFO0FBUy9FLElBQWEsYUFBYTtJQVN0Qix1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFQMUQsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBQ2pDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFJMEMsQ0FBQztJQUU5RCxnQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsZUFBK0I7WUFDckUsS0FBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQU0sVUFBVSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVzthQUNsRCxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFaLENBQVksQ0FBQzthQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ1QsSUFBSSxFQUFFLENBQUM7UUFDUixXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQUEsaUJBeUJDO1FBeEJHLE9BQU87UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxDQUFDO2dCQUNGLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsT0FBTztRQUNQLElBQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDakUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsT0FBTztRQUNQLElBQU0sU0FBUyxHQUFHLFVBQUMsYUFBYTtZQUM1QixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7UUFDRixJQUFNLFNBQVMsR0FBRztZQUNkLEtBQUssQ0FBQztnQkFDRixPQUFPLEVBQUUsUUFBUTtnQkFDakIsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBL0NrQztJQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDOzhCQUFtQixpQkFBVTt1REFBQztBQVBuRCxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUNoQixnQkFBZ0I7UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSw0QkFBNEIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztLQUNsQyxDQUFDO3FDQVUwQyx5Q0FBa0I7R0FUakQsYUFBYSxDQXNEekI7QUF0RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnlcIjtcbmltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgLy8g6Lev5b6E5piv5LuOYXBw5bGC5b6A5LiL566X6LW377yfXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5TGlzdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGdyb2NlcnlMaXN0OiBBcnJheTxHcm9jZXJ5PiA9IFtdO1xuICAgIGdyb2NlcnkgPSBcIlwiO1xuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIGxpc3RMb2FkZWQgPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyb2NlcnlMaXN0U2VydmljZTogR3JvY2VyeUxpc3RTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpLnN1YnNjcmliZSgobG9hZGVkR3JvY2VyaWVzOiBBcnJheTxHcm9jZXJ5PikgPT4ge1xuICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdCA9IGxvYWRlZEdyb2Nlcmllcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hhcmUoKSB7XG4gICAgICAgIGNvbnN0IGxpc3RTdHJpbmcgPSBcIuWIhuS6q+e7meS9oOaIkeeahOadgui0p+a4heWNle+8mlwiICsgdGhpcy5ncm9jZXJ5TGlzdFxuICAgICAgICAubWFwKGdyb2NlcnkgPT4gZ3JvY2VyeS5uYW1lKVxuICAgICAgICAuam9pbihcIu+8jFwiKVxuICAgICAgICAudHJpbSgpO1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdFN0cmluZyk7XG4gICAgfVxuXG4gICAgYWRkKCkge1xuICAgICAgICAvLyDmo4Dmn6XloavlhplcbiAgICAgICAgaWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuivt+Whq+WGmeWGheWuuVwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCLlpb3lkKdcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5pS25Zue6ZSu55uYMlxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICAvLyDmj5DkuqTmlbDmja5cbiAgICAgICAgY29uc3Qgb25TdWNjZXNzID0gKGdyb2NlcnlPYmplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcbiAgICAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uRmFpbHVyZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIumhueebrua3u+WKoOWksei0pVwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCLlpb3lkKdcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UuYWRkKHRoaXMuZ3JvY2VyeSkuc3Vic2NyaWJlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcbiAgICB9XG59Il19