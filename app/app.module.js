"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
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
        // 容错
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUNuRSxrREFBaUU7QUFFakUsaURBQTZDO0FBQzdDLDZDQUE4RDtBQXNCOUQsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBcEJyQixlQUFRLENBQUM7UUFDUixPQUFPO1FBQ1AsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixpQkFBaUI7UUFDakIsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsOEJBQWdCO1NBQ2pCO1FBQ0QsZUFBZTtRQUNmLFlBQVk7WUFDViw0QkFBWTtpQkFDVCwyQkFBYSxDQUNqQjtRQUNELEtBQUs7UUFDTCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7YWxsQ29tcG9uZW50cywgQXBwUm91dGluZ01vZHVsZX0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuQE5nTW9kdWxlKHtcbiAgLy8g5byV5a+857uE5Lu2XG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIC8vIOeItue7hOS7tuWvvOWFpe+8jOWtkOe7hOS7tuS5n+WPr+S7peS9v+eUqFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLCAvLyDmgLvmqKHlnZdcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgLy8g6KGo5Y2VXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSwgLy8g572R57uc6K+35rGCXG4gICAgQXBwUm91dGluZ01vZHVsZSwgLy8g6Lev55SxXG4gIF0sXG4gIC8vIGFwcOS4reimgeeUqOWIsOeahOaJgOaciee7hOS7tlxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgLi4uYWxsQ29tcG9uZW50cyxcbiAgXSxcbiAgLy8g5a656ZSZXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==