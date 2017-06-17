"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var logger_service_1 = require("./service/logger.service");
var angular_2 = require("nativescript-telerik-ui/sidedrawer/angular");
var user_service_1 = require("./shared/user/user.service");
var main_service_1 = require("./service/main.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // 引导组件
        bootstrap: [app_component_1.AppComponent],
        // 父组件导入，子组件也可以使用
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            app_routing_1.AppRoutingModule,
            angular_1.NativeScriptUIListViewModule,
            angular_2.NativeScriptUISideDrawerModule,
        ],
        // app中要用到的所有组件
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_1.allComponents),
        providers: [
            logger_service_1.Logger,
            user_service_1.UserService,
            main_service_1.NetworkService,
        ],
        // 容错
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUNuRSxrREFBaUU7QUFDakUsb0VBQXdGO0FBRXhGLGlEQUE2QztBQUM3Qyw2Q0FBOEQ7QUFDOUQsMkRBQWdEO0FBQ2hELHNFQUEwRjtBQUMxRiwyREFBdUQ7QUFDdkQsdURBQXNEO0FBNkJ0RCxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUEzQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU87UUFDUCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLGlCQUFpQjtRQUNqQixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDZCQUFzQjtZQUN0Qiw4QkFBZ0I7WUFDaEIsc0NBQTRCO1lBQzVCLHdDQUE4QjtTQUMvQjtRQUNELGVBQWU7UUFDZixZQUFZO1lBQ1YsNEJBQVk7aUJBQ1QsMkJBQWEsQ0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCx1QkFBTTtZQUNOLDBCQUFXO1lBQ1gsNkJBQWM7U0FDZjtRQUNELEtBQUs7UUFDTCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHthbGxDb21wb25lbnRzLCBBcHBSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL3NlcnZpY2UvbG9nZ2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7TmV0d29ya1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2UvbWFpbi5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIC8vIOW8leWvvOe7hOS7tlxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAvLyDniLbnu4Tku7blr7zlhaXvvIzlrZDnu4Tku7bkuZ/lj6/ku6Xkvb/nlKhcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSwgLy8g5oC75qih5Z2XXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIC8vIOihqOWNlVxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsIC8vIOe9kee7nOivt+axglxuICAgIEFwcFJvdXRpbmdNb2R1bGUsIC8vIOi3r+eUsVxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLCAvLyDkvqfmu5Hoj5zljZVcbiAgXSxcbiAgLy8gYXBw5Lit6KaB55So5Yiw55qE5omA5pyJ57uE5Lu2XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICAuLi5hbGxDb21wb25lbnRzLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMb2dnZXIsXG4gICAgVXNlclNlcnZpY2UsXG4gICAgTmV0d29ya1NlcnZpY2UsXG4gIF0sXG4gIC8vIOWuuemUmVxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=