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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFPeEMsSUFBYSxZQUFZO0lBTHpCO1FBTVcsU0FBSSxHQUFHO1lBQ1Y7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGFBQWEsRUFBRSxZQUFZO2FBQzlCO1NBQ0osQ0FBQztRQUNNLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBSzlCLENBQUM7SUFIVyw0QkFBSyxHQUFiLFVBQWMsS0FBSztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSwwQkFBMEIsQ0FBQztLQUMvRCxDQUFDO0dBQ1csWUFBWSxDQWlDeEI7QUFqQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGFiXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdGFiL3RhYi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy90YWIvdGFiLmNzc1wiLCBcInBhZ2VzL3RhYi90YWItY29tbW9uLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50ICB7XG4gICAgcHVibGljIHRhYnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIummlumhtVwiLFxuICAgICAgICAgICAgaW1hZ2U6IFwicmVzOi8vYXBwbGVcIixcbiAgICAgICAgICAgIHNlbGVjdGVkSW1hZ2U6IFwicmVzOi8vcGVhclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCLliIbnsbtcIixcbiAgICAgICAgICAgIGltYWdlOiBcInJlczovL2FwcGxlXCIsXG4gICAgICAgICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwi6ZmE6L+RXCIsXG4gICAgICAgICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbWFnZTogXCJyZXM6Ly9wZWFyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIui0reeJqei9plwiLFxuICAgICAgICAgICAgaW1hZ2U6IFwicmVzOi8vYXBwbGVcIixcbiAgICAgICAgICAgIHNlbGVjdGVkSW1hZ2U6IFwicmVzOi8vcGVhclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCLmiJHnmoRcIixcbiAgICAgICAgICAgIGltYWdlOiBcInJlczovL2FwcGxlXCIsXG4gICAgICAgICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRJbmRleCA9IDA7XG5cbiAgICBwcml2YXRlIG9uVGFwKGluZGV4KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB9XG59XG4iXX0=