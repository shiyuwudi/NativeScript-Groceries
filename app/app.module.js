"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var logger_service_1 = require("./service/logger.service");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
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
            angular_1.NativeScriptUISideDrawerModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUNuRSxrREFBaUU7QUFFakUsaURBQTZDO0FBQzdDLDZDQUE4RDtBQUM5RCwyREFBZ0Q7QUFDaEQsc0VBQTBGO0FBQzFGLDJEQUF1RDtBQUN2RCx1REFBc0Q7QUE0QnRELElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQTFCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTztRQUNQLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsaUJBQWlCO1FBQ2pCLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLDhCQUFnQjtZQUNoQix3Q0FBOEI7U0FDL0I7UUFDRCxlQUFlO1FBQ2YsWUFBWTtZQUNWLDRCQUFZO2lCQUNULDJCQUFhLENBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsdUJBQU07WUFDTiwwQkFBVztZQUNYLDZCQUFjO1NBQ2Y7UUFDRCxLQUFLO1FBQ0wsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge2FsbENvbXBvbmVudHMsIEFwcFJvdXRpbmdNb2R1bGV9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4vc2VydmljZS9sb2dnZXIuc2VydmljZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtOZXR3b3JrU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9tYWluLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgLy8g5byV5a+857uE5Lu2XG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIC8vIOeItue7hOS7tuWvvOWFpe+8jOWtkOe7hOS7tuS5n+WPr+S7peS9v+eUqFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLCAvLyDmgLvmqKHlnZdcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgLy8g6KGo5Y2VXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSwgLy8g572R57uc6K+35rGCXG4gICAgQXBwUm91dGluZ01vZHVsZSwgLy8g6Lev55SxXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLCAvLyDkvqfmu5Hoj5zljZVcbiAgXSxcbiAgLy8gYXBw5Lit6KaB55So5Yiw55qE5omA5pyJ57uE5Lu2XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICAuLi5hbGxDb21wb25lbnRzLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMb2dnZXIsXG4gICAgVXNlclNlcnZpY2UsXG4gICAgTmV0d29ya1NlcnZpY2UsXG4gIF0sXG4gIC8vIOWuuemUmVxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=