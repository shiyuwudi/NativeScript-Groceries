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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQWlGO0FBRWpGLGtGQUErRTtBQVMvRSxJQUFhLGdCQUFnQjtJQUd6QiwwQkFBMkIsa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFGekQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDb0MsQ0FBQztJQUNyRSxjQUFjO0lBQ1AsbUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGlDQUFpQztRQUNqQyxtREFBbUQ7UUFDbkQsOENBQThDO1FBQzlDLGtDQUFrQztRQUNsQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFDdEQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUN0RCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsK0NBQStDLEVBQUUsQ0FDekYsQ0FBQztJQUNWLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksZ0JBQWdCO0lBUDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxlQUFlLENBQUM7UUFDcEQsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7S0FDbEMsQ0FBQztxQ0FJaUQseUNBQWtCO0dBSHhELGdCQUFnQixDQWtCNUI7QUFsQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYmFybmV5IG9uIDIwMTcvNi85LlxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5XCI7XHJcbmltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLCAvLyDliqDov5nkuKrvvIzku6XkuIvot6/lvoTkuLrnm7jlr7not6/lvoRcclxuICAgIHNlbGVjdG9yOiBcIm1lc3NhZ2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWVzc2FnZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbWVzc2FnZS1jb21tb24uY3NzXCIsIFwiLi9tZXNzYWdlLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0dyb2NlcnlMaXN0U2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGdyb2NlcnlMaXN0ID0gW107IC8vIOaVsOaNrua6kFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeUxpc3RTZXJ2aWNlOiBHcm9jZXJ5TGlzdFNlcnZpY2UpIHt9XHJcbiAgICAvLyBPbkluaXQg5b+F6aG75a6e546wXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5sb2FkKClcclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZSgobG9hZGVkR3JvY2VyaWVzOiBHcm9jZXJ5W10pID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QgPSBsb2FkZWRHcm9jZXJpZXM7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJ6dFwiLCB0aW1lOiBcIjIwMTctNi02XCIsIGNvbnRlbnQ6IFwi5pWw5o2u5bqT6IO95ZCm5bC95b+r562U5aSNXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcImV3XCIsIHRpbWU6IFwiMjAxNy02LTZcIiwgY29udGVudDogXCLmlbDmja7lupPog73lkKblsL3lv6vnrZTlpI1cIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiYXNcIiwgdGltZTogXCIyMDE3LTYtNlwiLCBjb250ZW50OiBcIuaVsOaNruW6k+iDveWQpuWwveW/q+etlOWkjeaVsOaNruW6k+iDveWQpuWwveW/q+etlOWkjeaVsOaNruW6k+iDveWQpuWwveW/q+etlOWkjeaVsOaNruW6k+iDveWQpuWwveW/q+etlOWkjeaVsOaNruW6k+iDveWQpuWwveW/q+etlOWkjVwiIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19