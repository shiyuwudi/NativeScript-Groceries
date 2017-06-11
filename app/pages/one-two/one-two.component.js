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
        // 搞点大事情
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXR3by5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvbmUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxzREFBNkQ7QUFDN0QsZ0NBQTZCO0FBUzdCLElBQWEsZUFBZTtJQUMxQix5QkFBb0IsZ0JBQWtDLEVBQVUsSUFBVTtRQUF0RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNwRSxNQUFNO0lBQ1osQ0FBQztJQUNNLGtDQUFRLEdBQWY7UUFDRSxRQUFRO0lBQ1YsQ0FBQztJQUNNLCtCQUFLLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO0tBQzdCLENBQUM7cUNBRXNDLHlCQUFnQixFQUFnQixXQUFJO0dBRC9ELGVBQWUsQ0FVM0I7QUFWWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7QWN0aW9uQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJvbmUtdHdvXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vb25lLXR3by5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vb25lLXR3by5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIE9uZVR3b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIC8vIC4uLlxuICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyDmkJ7ngrnlpKfkuovmg4VcbiAgfVxuICBwdWJsaWMgb25UYXAodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zW3R5cGVdKCk7XG4gIH1cbn1cbiJdfQ==