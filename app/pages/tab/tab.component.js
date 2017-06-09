"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabComponent = (function () {
    function TabComponent() {
        this.tabs = [
            {
                title: "首页",
                image: "res://apple",
                selectedImage: "res://pear",
            },
            {
                title: "分类",
                image: "res://apple",
                selectedImage: "res://pear",
            },
            {
                title: "附近",
                image: "res://apple",
                selectedImage: "res://pear",
            },
            {
                title: "购物车",
                image: "res://apple",
                selectedImage: "res://pear",
            },
            {
                title: "我的",
                image: "res://apple",
                selectedImage: "res://pear",
            },
        ];
        this.items = [];
        this.selectedIndex = 0;
    }
    TabComponent.prototype.onTap = function (index) {
        this.selectedIndex = index;
    };
    return TabComponent;
}());
TabComponent = __decorate([
    core_1.Component({
        selector: "tab",
        templateUrl: "pages/tab/tab.html",
        styleUrls: ["pages/tab/tab.css", "pages/tab/tab-common.css"],
    })
], TabComponent);
exports.TabComponent = TabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFXekUsSUFBYSxZQUFZO0lBTHpCO1FBTVcsU0FBSSxHQUFHO1lBQ1Y7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1NBQ0osQ0FBQztRQUNNLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxrQkFBYSxHQUFHLENBQUMsQ0FBQztJQUs5QixDQUFDO0lBSFcsNEJBQUssR0FBYixVQUFjLEtBQUs7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUM7S0FDL0QsQ0FBQztHQUNXLFlBQVksQ0FrQ3hCO0FBbENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xuaW1wb3J0IHsgR3JvY2VyeUxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRhYlwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RhYi90YWIuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvdGFiL3RhYi5jc3NcIiwgXCJwYWdlcy90YWIvdGFiLWNvbW1vbi5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCAge1xuICAgIHB1YmxpYyB0YWJzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCLpppbpobVcIixcbiAgICAgICAgICAgIGltYWdlOiBcInJlczovL2FwcGxlXCIsXG4gICAgICAgICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwi5YiG57G7XCIsXG4gICAgICAgICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbWFnZTogXCJyZXM6Ly9wZWFyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIumZhOi/kVwiLFxuICAgICAgICAgICAgaW1hZ2U6IFwicmVzOi8vYXBwbGVcIixcbiAgICAgICAgICAgIHNlbGVjdGVkSW1hZ2U6IFwicmVzOi8vcGVhclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCLotK3nianovaZcIixcbiAgICAgICAgICAgIGltYWdlOiBcInJlczovL2FwcGxlXCIsXG4gICAgICAgICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwi5oiR55qEXCIsXG4gICAgICAgICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbWFnZTogXCJyZXM6Ly9wZWFyXCIsXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICBwcml2YXRlIGl0ZW1zID0gW107XG4gICAgcHJpdmF0ZSBzZWxlY3RlZEluZGV4ID0gMDtcblxuICAgIHByaXZhdGUgb25UYXAoaW5kZXgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIH1cbn1cbiJdfQ==