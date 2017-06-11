"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var logger_service_1 = require("./service/logger.service");
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
        providers: [logger_service_1.Logger],
        // 容错
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUNuRSxrREFBaUU7QUFFakUsaURBQTZDO0FBQzdDLDZDQUE4RDtBQUM5RCwyREFBZ0Q7QUF1QmhELElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQXJCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTztRQUNQLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsaUJBQWlCO1FBQ2pCLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLDhCQUFnQjtTQUNqQjtRQUNELGVBQWU7UUFDZixZQUFZO1lBQ1YsNEJBQVk7aUJBQ1QsMkJBQWEsQ0FDakI7UUFDRCxTQUFTLEVBQUUsQ0FBQyx1QkFBTSxDQUFDO1FBQ25CLEtBQUs7UUFDTCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7YWxsQ29tcG9uZW50cywgQXBwUm91dGluZ01vZHVsZX0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9zZXJ2aWNlL2xvZ2dlci5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIC8vIOW8leWvvOe7hOS7tlxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAvLyDniLbnu4Tku7blr7zlhaXvvIzlrZDnu4Tku7bkuZ/lj6/ku6Xkvb/nlKhcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSwgLy8g5oC75qih5Z2XXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIC8vIOihqOWNlVxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsIC8vIOe9kee7nOivt+axglxuICAgIEFwcFJvdXRpbmdNb2R1bGUsIC8vIOi3r+eUsVxuICBdLFxuICAvLyBhcHDkuK3opoHnlKjliLDnmoTmiYDmnInnu4Tku7ZcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIC4uLmFsbENvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW0xvZ2dlcl0sXG4gIC8vIOWuuemUmVxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=