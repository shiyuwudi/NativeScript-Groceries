"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var OneTwoComponent = (function () {
    function OneTwoComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        // ...
    }
    OneTwoComponent.prototype.ngOnInit = function () {
        // 登录
        this.login();
    };
    OneTwoComponent.prototype.login = function () {
        //
    };
    OneTwoComponent.prototype.onTap = function (type) {
        this.routerExtensions[type]();
    };
    return OneTwoComponent;
}());
OneTwoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "one-two",
        templateUrl: "./one-two.component.html",
        styleUrls: ["./one-two.css"],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
], OneTwoComponent);
exports.OneTwoComponent = OneTwoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXR3by5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvbmUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxzREFBNkQ7QUFFN0QsZ0NBQTZCO0FBUTdCLElBQWEsZUFBZTtJQUMxQix5QkFBb0IsZ0JBQWtDLEVBQVUsSUFBVTtRQUF0RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNwRSxNQUFNO0lBQ1osQ0FBQztJQUNNLGtDQUFRLEdBQWY7UUFDRSxLQUFLO1FBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNNLCtCQUFLLEdBQVo7UUFDRSxFQUFFO0lBQ0osQ0FBQztJQUNNLCtCQUFLLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO0tBQzdCLENBQUM7cUNBRXNDLHlCQUFnQixFQUFnQixXQUFJO0dBRC9ELGVBQWUsQ0FjM0I7QUFkWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FjdGlvbkJhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiBcIm9uZS10d29cIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL29uZS10d28uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vb25lLXR3by5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmVUd29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgLy8gLi4uXHJcbiAgfVxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIC8vIOeZu+W9lVxyXG4gICAgdGhpcy5sb2dpbigpO1xyXG4gIH1cclxuICBwdWJsaWMgbG9naW4oKSB7XHJcbiAgICAvL1xyXG4gIH1cclxuICBwdWJsaWMgb25UYXAodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnNbdHlwZV0oKTtcclxuICB9XHJcbn1cclxuIl19