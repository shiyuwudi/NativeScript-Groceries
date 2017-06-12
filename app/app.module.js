"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var logger_service_1 = require("./service/logger.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUNuRSxrREFBaUU7QUFFakUsaURBQTZDO0FBQzdDLDZDQUE4RDtBQUM5RCwyREFBZ0Q7QUFDaEQsMkRBQXVEO0FBQ3ZELHVEQUFzRDtBQTJCdEQsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBekJyQixlQUFRLENBQUM7UUFDUixPQUFPO1FBQ1AsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixpQkFBaUI7UUFDakIsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsOEJBQWdCO1NBQ2pCO1FBQ0QsZUFBZTtRQUNmLFlBQVk7WUFDViw0QkFBWTtpQkFDVCwyQkFBYSxDQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULHVCQUFNO1lBQ04sMEJBQVc7WUFDWCw2QkFBYztTQUNmO1FBQ0QsS0FBSztRQUNMLE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRIdHRwTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHthbGxDb21wb25lbnRzLCBBcHBSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuL3NlcnZpY2UvbG9nZ2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtOZXR3b3JrU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9tYWluLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgLy8g5byV5a+857uE5Lu2XG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIC8vIOeItue7hOS7tuWvvOWFpe+8jOWtkOe7hOS7tuS5n+WPr+S7peS9v+eUqFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLCAvLyDmgLvmqKHlnZdcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgLy8g6KGo5Y2VXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSwgLy8g572R57uc6K+35rGCXG4gICAgQXBwUm91dGluZ01vZHVsZSwgLy8g6Lev55SxXG4gIF0sXG4gIC8vIGFwcOS4reimgeeUqOWIsOeahOaJgOaciee7hOS7tlxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgLi4uYWxsQ29tcG9uZW50cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTG9nZ2VyLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIE5ldHdvcmtTZXJ2aWNlLFxuICBdLFxuICAvLyDlrrnplJlcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUEsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19