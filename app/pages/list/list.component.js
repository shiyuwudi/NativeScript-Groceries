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
        // 收回键盘2
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
    ListComponent.prototype.delete = function (item) {
        var _this = this;
        var id = item.id;
        this.groceryListService.delete(id).subscribe(function (data) {
            if (data.Result === 1) {
                // 删除成功
                _this.groceryList = _this.groceryList.filter(function (grocery) { return grocery.id !== id; });
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSx1REFBeUQ7QUFHekQsa0ZBQStFO0FBUy9FLElBQWEsYUFBYTtJQVN0Qix1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFQbEQsZ0JBQVcsR0FBYyxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUlrQyxDQUFDO0lBRXZELGdDQUFRLEdBQWY7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxlQUEwQjtZQUNoRSxLQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyw2QkFBSyxHQUFiO1FBQ0ksSUFBTSxVQUFVLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ2xELEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxDQUFDO2FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNSLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLDJCQUFHLEdBQVg7UUFBQSxpQkF5QkM7UUF4QkcsT0FBTztRQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxRQUFRO1FBQ1IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQTBCLENBQUM7UUFDbkUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsT0FBTztRQUNQLElBQU0sU0FBUyxHQUFHLFVBQUMsYUFBYTtZQUM1QixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7UUFDRixJQUFNLFNBQVMsR0FBRztZQUNkLEtBQUssQ0FBQztnQkFDRixPQUFPLEVBQUUsUUFBUTtnQkFDakIsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU8sOEJBQU0sR0FBZCxVQUFlLElBQUk7UUFBbkIsaUJBUUM7UUFQRyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUM5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE9BQU87Z0JBQ1AsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7WUFDL0UsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQztBQXpEa0M7SUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs4QkFBMkIsaUJBQVU7dURBQUM7QUFQM0QsYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsZ0JBQWdCO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsNEJBQTRCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7S0FDbEMsQ0FBQztxQ0FVMEMseUNBQWtCO0dBVGpELGFBQWEsQ0FnRXpCO0FBaEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5XCI7XG5pbXBvcnQgeyBHcm9jZXJ5TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS1saXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICAgIC8vIOi3r+W+hOaYr+S7jmFwcOWxguW+gOS4i+eul+i1t++8n1xuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QuY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbR3JvY2VyeUxpc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIGdyb2NlcnlMaXN0OiBHcm9jZXJ5W10gPSBbXTtcbiAgICBwcml2YXRlIGdyb2NlcnkgPSBcIlwiO1xuICAgIHByaXZhdGUgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBsaXN0TG9hZGVkID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBwcml2YXRlIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyb2NlcnlMaXN0U2VydmljZTogR3JvY2VyeUxpc3RTZXJ2aWNlKSB7fVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKS5zdWJzY3JpYmUoKGxvYWRlZEdyb2NlcmllczogR3JvY2VyeVtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0ID0gbG9hZGVkR3JvY2VyaWVzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNoYXJlKCkge1xuICAgICAgICBjb25zdCBsaXN0U3RyaW5nID0gXCLliIbkuqvnu5nkvaDmiJHnmoTmnYLotKfmuIXljZXvvJpcIiArIHRoaXMuZ3JvY2VyeUxpc3RcbiAgICAgICAgLm1hcCgoZ3JvY2VyeSkgPT4gZ3JvY2VyeS5uYW1lKVxuICAgICAgICAuam9pbihcIu+8jFwiKVxuICAgICAgICAudHJpbSgpO1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdFN0cmluZyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGQoKSB7XG4gICAgICAgIC8vIOajgOafpeWhq+WGmVxuICAgICAgICBpZiAodGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi6K+35aGr5YaZ5YaF5a65XCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIuWlveWQp1wiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5pS25Zue6ZSu55uYMlxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSB0aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudCBhcyBUZXh0RmllbGQ7XG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgIC8vIOaPkOS6pOaVsOaNrlxuICAgICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoZ3JvY2VyeU9iamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25GYWlsdXJlID0gKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi6aG555uu5re75Yqg5aSx6LSlXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIuWlveWQp1wiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQodGhpcy5ncm9jZXJ5KS5zdWJzY3JpYmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaWQgPSBpdGVtLmlkO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5kZWxldGUoaWQpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuUmVzdWx0ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8g5Yig6Zmk5oiQ5YqfXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdCA9IHRoaXMuZ3JvY2VyeUxpc3QuZmlsdGVyKChncm9jZXJ5KSA9PiBncm9jZXJ5LmlkICE9PSBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==