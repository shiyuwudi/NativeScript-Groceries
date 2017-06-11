"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var tab_component_1 = require("./pages/tab/tab.component");
var list_component_1 = require("./pages/list/list.component");
var index_component_1 = require("./pages/tabbar/index.component");
var one_component_1 = require("./pages/one/one.component");
var two_component_1 = require("./pages/two/two.component");
var three_component_1 = require("./pages/three/three.component");
var four_component_1 = require("./pages/four/four.component");
var five_component_1 = require("./pages/five/five.component");
var home_component_1 = require("./home/home.component");
var one_one_component_1 = require("./pages/one-one/one-one.component");
var one_two_component_1 = require("./pages/one-two/one-two.component");
var action_bar_component_1 = require("./pages/action-bar/action-bar.component");
// 要跳转的页面
var routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: home_component_1.HomeComponent,
        children: [
            {
                path: "",
                component: one_component_1.OneComponent,
                children: [
                    {
                        path: "",
                        component: one_one_component_1.OneOneComponent,
                    },
                    {
                        path: "onetwo",
                        component: one_two_component_1.OneTwoComponent,
                    },
                ],
            },
            {
                path: "one",
                component: one_component_1.OneComponent,
            },
            {
                path: "two",
                component: two_component_1.TwoComponent,
            },
            {
                path: "three",
                component: three_component_1.ThreeComponent,
            },
            {
                path: "four",
                component: four_component_1.FourComponent,
            },
            {
                path: "five",
                component: five_component_1.FiveComponent,
            },
        ]
    },
];
exports.allComponents = [
    tab_component_1.TabComponent,
    list_component_1.ListComponent,
    index_component_1.TabbarComponent,
    one_component_1.OneComponent,
    two_component_1.TwoComponent,
    three_component_1.ThreeComponent,
    four_component_1.FourComponent,
    five_component_1.FiveComponent,
    home_component_1.HomeComponent,
    one_one_component_1.OneOneComponent,
    one_two_component_1.OneTwoComponent,
    action_bar_component_1.MyActionBarComponent,
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMkRBQXVEO0FBQ3ZELDhEQUEwRDtBQUMxRCxrRUFBK0Q7QUFDL0QsMkRBQXVEO0FBQ3ZELDJEQUF1RDtBQUN2RCxpRUFBNkQ7QUFDN0QsOERBQTBEO0FBQzFELDhEQUEwRDtBQUMxRCx3REFBb0Q7QUFDcEQsdUVBQW9FO0FBQ3BFLHVFQUFvRTtBQUNwRSxnRkFBNkU7QUFFN0UsU0FBUztBQUNULElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsOEJBQWE7UUFDeEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLDRCQUFZO2dCQUN2QixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsU0FBUyxFQUFFLG1DQUFlO3FCQUMzQjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsbUNBQWU7cUJBQzNCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsS0FBSztnQkFDWCxTQUFTLEVBQUUsNEJBQVk7YUFDeEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsS0FBSztnQkFDWCxTQUFTLEVBQUUsNEJBQVk7YUFDeEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsZ0NBQWM7YUFDMUI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsOEJBQWE7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsOEJBQWE7YUFDekI7U0FDRjtLQUFDO0NBQ0wsQ0FBQztBQUVXLFFBQUEsYUFBYSxHQUFHO0lBQzNCLDRCQUFZO0lBQ1osOEJBQWE7SUFDYixpQ0FBZTtJQUNmLDRCQUFZO0lBQ1osNEJBQVk7SUFDWixnQ0FBYztJQUNkLDhCQUFhO0lBQ2IsOEJBQWE7SUFDYiw4QkFBYTtJQUNiLG1DQUFlO0lBQ2YsbUNBQWU7SUFDZiwyQ0FBb0I7Q0FDckIsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBQWdDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsZ0JBQWdCO0lBSjVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RhYkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvdGFiL3RhYi5jb21wb25lbnRcIjtcbmltcG9ydCB7TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUYWJiYXJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3RhYmJhci9pbmRleC5jb21wb25lbnRcIjtcbmltcG9ydCB7T25lQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9vbmUvb25lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUd29Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3R3by90d28uY29tcG9uZW50XCI7XG5pbXBvcnQge1RocmVlQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy90aHJlZS90aHJlZS5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm91ckNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZm91ci9mb3VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGaXZlQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9maXZlL2ZpdmUuY29tcG9uZW50XCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9uZU9uZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL29uZS1vbmUvb25lLW9uZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9uZVR3b0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL29uZS10d28vb25lLXR3by5jb21wb25lbnRcIjtcbmltcG9ydCB7TXlBY3Rpb25CYXJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnRcIjtcblxuLy8g6KaB6Lez6L2s55qE6aG16Z2iXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IFwiXCIsXG4gICAgcmVkaXJlY3RUbzogXCIvaG9tZVwiLFxuICAgIHBhdGhNYXRjaDogXCJmdWxsXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcImhvbWVcIixcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgY29tcG9uZW50OiBPbmVDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgICAgIGNvbXBvbmVudDogT25lT25lQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCJvbmV0d29cIixcbiAgICAgICAgICAgIGNvbXBvbmVudDogT25lVHdvQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIm9uZVwiLFxuICAgICAgICBjb21wb25lbnQ6IE9uZUNvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwidHdvXCIsXG4gICAgICAgIGNvbXBvbmVudDogVHdvQ29tcG9uZW50LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJ0aHJlZVwiLFxuICAgICAgICBjb21wb25lbnQ6IFRocmVlQ29tcG9uZW50LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJmb3VyXCIsXG4gICAgICAgIGNvbXBvbmVudDogRm91ckNvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiZml2ZVwiLFxuICAgICAgICBjb21wb25lbnQ6IEZpdmVDb21wb25lbnQsXG4gICAgICB9LFxuICAgIF19LFxuXTtcblxuZXhwb3J0IGNvbnN0IGFsbENvbXBvbmVudHMgPSBbXG4gIFRhYkNvbXBvbmVudCxcbiAgTGlzdENvbXBvbmVudCxcbiAgVGFiYmFyQ29tcG9uZW50LFxuICBPbmVDb21wb25lbnQsXG4gIFR3b0NvbXBvbmVudCxcbiAgVGhyZWVDb21wb25lbnQsXG4gIEZvdXJDb21wb25lbnQsXG4gIEZpdmVDb21wb25lbnQsXG4gIEhvbWVDb21wb25lbnQsXG4gIE9uZU9uZUNvbXBvbmVudCxcbiAgT25lVHdvQ29tcG9uZW50LFxuICBNeUFjdGlvbkJhckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=