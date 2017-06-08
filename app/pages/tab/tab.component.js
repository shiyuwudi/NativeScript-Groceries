"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var stack_layout_1 = require("ui/layouts/stack-layout");
var label_1 = require("ui/label");
var tab_view_1 = require("ui/tab-view");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var TabComponent = (function () {
    function TabComponent() {
        this.selectedIndex = 0;
        this.items = [];
    }
    TabComponent.prototype.ngOnInit = function () {
        var objects = [
            { title: "首页", iconSource: "apple" },
            { title: "分类", iconSource: "banana" },
            { title: "附近", iconSource: "pear" },
            { title: "购物车", iconSource: "apple" },
            { title: "我的", iconSource: "banana" },
        ];
        var items = objects.map(function (obj) {
            var stackLayout = new stack_layout_1.StackLayout();
            var label = new label_1.Label();
            label.text = obj.title;
            stackLayout.addChild(label);
            var tabEntry = new tab_view_1.TabViewItem();
            tabEntry.title = obj.title; // tabbar的标题
            tabEntry.view = stackLayout; // 导航控制器
            return tabEntry;
        });
        this.items = items;
    };
    TabComponent.prototype.onTap = function (index) {
        this.selectedIndex = index;
    };
    return TabComponent;
}());
TabComponent = __decorate([
    core_1.Component({
        selector: "tab",
        // 路径是从app层往下算起？
        templateUrl: "pages/tab/tab.html",
        styleUrls: ["pages/tab/tab.css", "pages/tab/tab-common.css"],
        providers: [grocery_list_service_1.GroceryListService],
    })
], TabComponent);
exports.TabComponent = TabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFHekUsd0RBQXNEO0FBQ3RELGtDQUFpQztBQUNqQyx3Q0FBa0Y7QUFFbEYsa0ZBQStFO0FBUy9FLElBQWEsWUFBWTtJQVB6QjtRQVNXLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxFQUFFLENBQUM7SUEwQnZCLENBQUM7SUF4QlUsK0JBQVEsR0FBZjtRQUNJLElBQU0sT0FBTyxHQUFHO1lBQ1osRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7WUFDcEMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDckMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7WUFDbkMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7WUFDckMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7U0FDeEMsQ0FBQztRQUNGLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQzFCLElBQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1lBQ3RDLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxzQkFBVyxFQUFFLENBQUM7WUFDbkMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWTtZQUN4QyxRQUFRLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDLFFBQVE7WUFDckMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyw0QkFBSyxHQUFiLFVBQWMsS0FBSztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3QlksWUFBWTtJQVB4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLEtBQUs7UUFDZixnQkFBZ0I7UUFDaEIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSwwQkFBMEIsQ0FBQztRQUM1RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztLQUNsQyxDQUFDO0dBQ1csWUFBWSxDQTZCeEI7QUE3Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xuaW1wb3J0IHsgR3JvY2VyeUxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRhYlwiLFxuICAgIC8vIOi3r+W+hOaYr+S7jmFwcOWxguW+gOS4i+eul+i1t++8n1xuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RhYi90YWIuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvdGFiL3RhYi5jc3NcIiwgXCJwYWdlcy90YWIvdGFiLWNvbW1vbi5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbR3JvY2VyeUxpc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4ID0gMDtcbiAgICBwcml2YXRlIGl0ZW1zID0gW107XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiBcIummlumhtVwiLCBpY29uU291cmNlOiBcImFwcGxlXCIgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwi5YiG57G7XCIsIGljb25Tb3VyY2U6IFwiYmFuYW5hXCIgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwi6ZmE6L+RXCIsIGljb25Tb3VyY2U6IFwicGVhclwiIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIui0reeJqei9plwiLCBpY29uU291cmNlOiBcImFwcGxlXCIgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwi5oiR55qEXCIsIGljb25Tb3VyY2U6IFwiYmFuYW5hXCIgfSxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBvYmplY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFja0xheW91dCA9IG5ldyBTdGFja0xheW91dCgpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBuZXcgTGFiZWwoKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHQgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICBzdGFja0xheW91dC5hZGRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBjb25zdCB0YWJFbnRyeSA9IG5ldyBUYWJWaWV3SXRlbSgpO1xuICAgICAgICAgICAgdGFiRW50cnkudGl0bGUgPSBvYmoudGl0bGU7IC8vIHRhYmJhcueahOagh+mimFxuICAgICAgICAgICAgdGFiRW50cnkudmlldyA9IHN0YWNrTGF5b3V0OyAvLyDlr7zoiKrmjqfliLblmahcbiAgICAgICAgICAgIHJldHVybiB0YWJFbnRyeTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVGFwKGluZGV4KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIH1cbn1cbiJdfQ==