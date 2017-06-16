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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFPeEMsSUFBYSxZQUFZO0lBTHpCO1FBTVcsU0FBSSxHQUFHO1lBQ1Y7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1NBQ0osQ0FBQztRQUNNLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBSzlCLENBQUM7SUFIVyw0QkFBSyxHQUFiLFVBQWMsS0FBSztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSwwQkFBMEIsQ0FBQztLQUMvRCxDQUFDO0dBQ1csWUFBWSxDQWlDeEI7QUFqQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidGFiXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy90YWIvdGFiLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvdGFiL3RhYi5jc3NcIiwgXCJwYWdlcy90YWIvdGFiLWNvbW1vbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgIHtcclxuICAgIHB1YmxpYyB0YWJzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi6aaW6aG1XCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcInJlczovL2FwcGxlXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW1hZ2U6IFwicmVzOi8vcGVhclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLliIbnsbtcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwicmVzOi8vYXBwbGVcIixcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbWFnZTogXCJyZXM6Ly9wZWFyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIumZhOi/kVwiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi6LSt54mp6L2mXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcInJlczovL2FwcGxlXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW1hZ2U6IFwicmVzOi8vcGVhclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLmiJHnmoRcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwicmVzOi8vYXBwbGVcIixcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbWFnZTogXCJyZXM6Ly9wZWFyXCIsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuICAgIHByaXZhdGUgb25UYXAoaW5kZXgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbn1cclxuIl19