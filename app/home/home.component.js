"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
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
    HomeComponent.prototype.onTap = function (index) {
        this.selectedIndex = index;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-home",
        templateUrl: "home.component.html",
        styleUrls: ["./home-common.css", "./home.css"],
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQVF4QyxJQUFhLGFBQWE7SUFOMUI7UUFPUyxTQUFJLEdBQUc7WUFDWjtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7U0FDRixDQUFDO1FBQ0ssa0JBQWEsR0FBRyxDQUFDLENBQUM7SUFJM0IsQ0FBQztJQUhTLDZCQUFLLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO0tBQy9DLENBQUM7R0FDVyxhQUFhLENBZ0N6QjtBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibXktaG9tZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJob21lLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ob21lLWNvbW1vbi5jc3NcIiwgXCIuL2hvbWUuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgcHVibGljIHRhYnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwi6aaW6aG1XCIsXG4gICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxuICAgICAgc2VsZWN0ZWRJbWFnZTogXCJyZXM6Ly9wZWFyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLliIbnsbtcIixcbiAgICAgIGltYWdlOiBcInJlczovL2FwcGxlXCIsXG4gICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIumZhOi/kVwiLFxuICAgICAgaW1hZ2U6IFwicmVzOi8vYXBwbGVcIixcbiAgICAgIHNlbGVjdGVkSW1hZ2U6IFwicmVzOi8vcGVhclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwi6LSt54mp6L2mXCIsXG4gICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxuICAgICAgc2VsZWN0ZWRJbWFnZTogXCJyZXM6Ly9wZWFyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLmiJHnmoRcIixcbiAgICAgIGltYWdlOiBcInJlczovL2FwcGxlXCIsXG4gICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcbiAgICB9LFxuICBdO1xuICBwdWJsaWMgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHByaXZhdGUgb25UYXAoaW5kZXgpIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxufVxuIl19