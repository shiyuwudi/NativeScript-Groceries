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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUNuRSxrREFBaUU7QUFFakUsaURBQTZDO0FBQzdDLDZDQUE4RDtBQUM5RCwyREFBZ0Q7QUFDaEQsc0VBQTBGO0FBQzFGLDJEQUF1RDtBQUN2RCx1REFBc0Q7QUE0QnRELElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQTFCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTztRQUNQLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsaUJBQWlCO1FBQ2pCLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLDhCQUFnQjtZQUNoQix3Q0FBOEI7U0FDL0I7UUFDRCxlQUFlO1FBQ2YsWUFBWTtZQUNWLDRCQUFZO2lCQUNULDJCQUFhLENBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsdUJBQU07WUFDTiwwQkFBVztZQUNYLDZCQUFjO1NBQ2Y7UUFDRCxLQUFLO1FBQ0wsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2FsbENvbXBvbmVudHMsIEFwcFJvdXRpbmdNb2R1bGV9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9zZXJ2aWNlL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge05ldHdvcmtTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlL21haW4uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAvLyDlvJXlr7znu4Tku7ZcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gIC8vIOeItue7hOS7tuWvvOWFpe+8jOWtkOe7hOS7tuS5n+WPr+S7peS9v+eUqFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSwgLy8g5oC75qih5Z2XXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgLy8g6KGo5Y2VXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLCAvLyDnvZHnu5zor7fmsYJcclxuICAgIEFwcFJvdXRpbmdNb2R1bGUsIC8vIOi3r+eUsVxyXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLCAvLyDkvqfmu5Hoj5zljZVcclxuICBdLFxyXG4gIC8vIGFwcOS4reimgeeUqOWIsOeahOaJgOaciee7hOS7tlxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgLi4uYWxsQ29tcG9uZW50cyxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTG9nZ2VyLFxyXG4gICAgVXNlclNlcnZpY2UsXHJcbiAgICBOZXR3b3JrU2VydmljZSxcclxuICBdLFxyXG4gIC8vIOWuuemUmVxyXG4gIHNjaGVtYXM6IFtcclxuICAgIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXX0=