"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by barney on 2017/6/9.
 */
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var MessageComponent = (function () {
    function MessageComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.isLoading = false;
        this.groceryList = []; // 数据源
    }
    // OnInit 必须实现
    MessageComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        // this.groceryListService.load()
        //     .subscribe((loadedGroceries: Grocery[]) => {
        //         this.groceryList = loadedGroceries;
        //         this.isLoading = false;
        //     });
        this.groceryList.push({ name: "zt", time: "2017-6-6", content: "数据库能否尽快答复" }, { name: "ew", time: "2017-6-6", content: "数据库能否尽快答复" }, { name: "as", time: "2017-6-6", content: "数据库能否尽快答复数据库能否尽快答复数据库能否尽快答复数据库能否尽快答复数据库能否尽快答复" });
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "message",
        templateUrl: "./message.html",
        styleUrls: ["./message-common.css", "./message.css"],
        providers: [grocery_list_service_1.GroceryListService],
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
], MessageComponent);
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQWlGO0FBRWpGLGtGQUErRTtBQVMvRSxJQUFhLGdCQUFnQjtJQUd6QiwwQkFBMkIsa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFGekQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDb0MsQ0FBQztJQUNyRSxjQUFjO0lBQ1AsbUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGlDQUFpQztRQUNqQyxtREFBbUQ7UUFDbkQsOENBQThDO1FBQzlDLGtDQUFrQztRQUNsQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFDdEQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUN0RCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsK0NBQStDLEVBQUUsQ0FDekYsQ0FBQztJQUNWLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksZ0JBQWdCO0lBUDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxlQUFlLENBQUM7UUFDcEQsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7S0FDbEMsQ0FBQztxQ0FJaUQseUNBQWtCO0dBSHhELGdCQUFnQixDQWtCNUI7QUFsQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGJhcm5leSBvbiAyMDE3LzYvOS5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xuaW1wb3J0IHsgR3JvY2VyeUxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsIC8vIOWKoOi/meS4qu+8jOS7peS4i+i3r+W+hOS4uuebuOWvuei3r+W+hFxuICAgIHNlbGVjdG9yOiBcIm1lc3NhZ2VcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21lc3NhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9tZXNzYWdlLWNvbW1vbi5jc3NcIiwgXCIuL21lc3NhZ2UuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW0dyb2NlcnlMaXN0U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBncm9jZXJ5TGlzdCA9IFtdOyAvLyDmlbDmja7mupBcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSkge31cbiAgICAvLyBPbkluaXQg5b+F6aG75a6e546wXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5sb2FkKClcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoKGxvYWRlZEdyb2NlcmllczogR3JvY2VyeVtdKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdCA9IGxvYWRlZEdyb2NlcmllcztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaChcbiAgICAgICAgICAgIHsgbmFtZTogXCJ6dFwiLCB0aW1lOiBcIjIwMTctNi02XCIsIGNvbnRlbnQ6IFwi5pWw5o2u5bqT6IO95ZCm5bC95b+r562U5aSNXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJld1wiLCB0aW1lOiBcIjIwMTctNi02XCIsIGNvbnRlbnQ6IFwi5pWw5o2u5bqT6IO95ZCm5bC95b+r562U5aSNXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJhc1wiLCB0aW1lOiBcIjIwMTctNi02XCIsIGNvbnRlbnQ6IFwi5pWw5o2u5bqT6IO95ZCm5bC95b+r562U5aSN5pWw5o2u5bqT6IO95ZCm5bC95b+r562U5aSN5pWw5o2u5bqT6IO95ZCm5bC95b+r562U5aSN5pWw5o2u5bqT6IO95ZCm5bC95b+r562U5aSN5pWw5o2u5bqT6IO95ZCm5bC95b+r562U5aSNXCIgfSxcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl19