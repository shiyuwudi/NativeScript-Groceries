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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQVF4QyxJQUFhLGFBQWE7SUFOMUI7UUFPUyxTQUFJLEdBQUc7WUFDWjtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsYUFBYSxFQUFFLFlBQVk7YUFDNUI7U0FDRixDQUFDO1FBQ0ssa0JBQWEsR0FBRyxDQUFDLENBQUM7SUFJM0IsQ0FBQztJQUhTLDZCQUFLLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO0tBQy9DLENBQUM7R0FDVyxhQUFhLENBZ0N6QjtBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJteS1ob21lXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9ob21lLWNvbW1vbi5jc3NcIiwgXCIuL2hvbWUuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbiAgcHVibGljIHRhYnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIummlumhtVwiLFxyXG4gICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxyXG4gICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIuWIhuexu1wiLFxyXG4gICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxyXG4gICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIumZhOi/kVwiLFxyXG4gICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxyXG4gICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIui0reeJqei9plwiLFxyXG4gICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxyXG4gICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIuaIkeeahFwiLFxyXG4gICAgICBpbWFnZTogXCJyZXM6Ly9hcHBsZVwiLFxyXG4gICAgICBzZWxlY3RlZEltYWdlOiBcInJlczovL3BlYXJcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBwdWJsaWMgc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgcHJpdmF0ZSBvblRhcChpbmRleCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgfVxyXG59XHJcbiJdfQ==