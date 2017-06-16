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
var goods_search_component_1 = require("./pages/goods-search/goods-search.component");
var view_pager_component_1 = require("./pages/view-pager/view-pager.component");
var lines_label_component_1 = require("./pages/lines-label/lines-label.component");
var goods_filter_component_1 = require("./pages/goods-filter/goods-filter.component");
var brand_list_componemt_1 = require("./pages/brand-list/brand-list.componemt");
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
                    {
                        path: "goodsSearch",
                        component: goods_search_component_1.GoodsSearchComponent,
                    },
                    {
                        path: "brandList",
                        component: brand_list_componemt_1.BrandListComponent,
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
        ],
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
    goods_search_component_1.GoodsSearchComponent,
    view_pager_component_1.ViewPagerComponent,
    lines_label_component_1.LinesLabelDirective,
    goods_filter_component_1.GoodsFilterComponent,
    brand_list_componemt_1.BrandListComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1QztBQUN2QyxzREFBcUU7QUFHckUsMkRBQXVEO0FBQ3ZELDhEQUEwRDtBQUMxRCxrRUFBK0Q7QUFDL0QsMkRBQXVEO0FBQ3ZELDJEQUF1RDtBQUN2RCxpRUFBNkQ7QUFDN0QsOERBQTBEO0FBQzFELDhEQUEwRDtBQUMxRCx3REFBb0Q7QUFDcEQsdUVBQWtFO0FBQ2xFLHVFQUFrRTtBQUNsRSxnRkFBNkU7QUFDN0Usc0ZBQWlGO0FBQ2pGLGdGQUEyRTtBQUMzRSxtRkFBOEU7QUFDOUUsc0ZBQWlGO0FBQ2pGLGdGQUEyRTtBQUUzRSxTQUFTO0FBQ1QsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtRQUN4QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsNEJBQVk7Z0JBQ3ZCLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsRUFBRTt3QkFDUixTQUFTLEVBQUUsbUNBQWU7cUJBQzNCO29CQUNEO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLFNBQVMsRUFBRSxtQ0FBZTtxQkFDM0I7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLFNBQVMsRUFBRSw2Q0FBb0I7cUJBQ2hDO29CQUNEO3dCQUNFLElBQUksRUFBRSxXQUFXO3dCQUNqQixTQUFTLEVBQUUseUNBQWtCO3FCQUM5QjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLDRCQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLDRCQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLGdDQUFjO2FBQzFCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLDhCQUFhO2FBQ3pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLDhCQUFhO2FBQ3pCO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLGFBQWEsR0FBRztJQUMzQiw0QkFBWTtJQUNaLDhCQUFhO0lBQ2IsaUNBQWU7SUFDZiw0QkFBWTtJQUNaLDRCQUFZO0lBQ1osZ0NBQWM7SUFDZCw4QkFBYTtJQUNiLDhCQUFhO0lBQ2IsOEJBQWE7SUFDYixtQ0FBZTtJQUNmLG1DQUFlO0lBQ2YsMkNBQW9CO0lBQ3BCLDZDQUFvQjtJQUNwQix5Q0FBa0I7SUFDbEIsMkNBQW1CO0lBQ25CLDZDQUFvQjtJQUNwQix5Q0FBa0I7Q0FDbkIsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBQ0EsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxnQkFBZ0IsQ0FDNUI7QUFEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7VGFiQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy90YWIvdGFiLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1RhYmJhckNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvdGFiYmFyL2luZGV4LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPbmVDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL29uZS9vbmUuY29tcG9uZW50XCI7XG5pbXBvcnQge1R3b0NvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvdHdvL3R3by5jb21wb25lbnRcIjtcbmltcG9ydCB7VGhyZWVDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3RocmVlL3RocmVlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3VyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9mb3VyL2ZvdXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZpdmVDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2ZpdmUvZml2ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPbmVPbmVDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL29uZS1vbmUvb25lLW9uZS5jb21wb25lbnRcIjtcbmltcG9ydCB7T25lVHdvQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9vbmUtdHdvL29uZS10d28uY29tcG9uZW50XCI7XG5pbXBvcnQge015QWN0aW9uQmFyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0dvb2RzU2VhcmNoQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9nb29kcy1zZWFyY2gvZ29vZHMtc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWaWV3UGFnZXJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3ZpZXctcGFnZXIvdmlldy1wYWdlci5jb21wb25lbnRcIjtcbmltcG9ydCB7TGluZXNMYWJlbERpcmVjdGl2ZX0gZnJvbSBcIi4vcGFnZXMvbGluZXMtbGFiZWwvbGluZXMtbGFiZWwuY29tcG9uZW50XCI7XG5pbXBvcnQge0dvb2RzRmlsdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9nb29kcy1maWx0ZXIvZ29vZHMtZmlsdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCcmFuZExpc3RDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2JyYW5kLWxpc3QvYnJhbmQtbGlzdC5jb21wb25lbXRcIjtcblxuLy8g6KaB6Lez6L2s55qE6aG16Z2iXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IFwiXCIsXG4gICAgcmVkaXJlY3RUbzogXCIvaG9tZVwiLFxuICAgIHBhdGhNYXRjaDogXCJmdWxsXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcImhvbWVcIixcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgY29tcG9uZW50OiBPbmVDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgICAgIGNvbXBvbmVudDogT25lT25lQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCJvbmV0d29cIixcbiAgICAgICAgICAgIGNvbXBvbmVudDogT25lVHdvQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCJnb29kc1NlYXJjaFwiLFxuICAgICAgICAgICAgY29tcG9uZW50OiBHb29kc1NlYXJjaENvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiYnJhbmRMaXN0XCIsXG4gICAgICAgICAgICBjb21wb25lbnQ6IEJyYW5kTGlzdENvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJvbmVcIixcbiAgICAgICAgY29tcG9uZW50OiBPbmVDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInR3b1wiLFxuICAgICAgICBjb21wb25lbnQ6IFR3b0NvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwidGhyZWVcIixcbiAgICAgICAgY29tcG9uZW50OiBUaHJlZUNvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiZm91clwiLFxuICAgICAgICBjb21wb25lbnQ6IEZvdXJDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcImZpdmVcIixcbiAgICAgICAgY29tcG9uZW50OiBGaXZlQ29tcG9uZW50LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGFsbENvbXBvbmVudHMgPSBbXG4gIFRhYkNvbXBvbmVudCxcbiAgTGlzdENvbXBvbmVudCxcbiAgVGFiYmFyQ29tcG9uZW50LFxuICBPbmVDb21wb25lbnQsXG4gIFR3b0NvbXBvbmVudCxcbiAgVGhyZWVDb21wb25lbnQsXG4gIEZvdXJDb21wb25lbnQsXG4gIEZpdmVDb21wb25lbnQsXG4gIEhvbWVDb21wb25lbnQsXG4gIE9uZU9uZUNvbXBvbmVudCxcbiAgT25lVHdvQ29tcG9uZW50LFxuICBNeUFjdGlvbkJhckNvbXBvbmVudCxcbiAgR29vZHNTZWFyY2hDb21wb25lbnQsXG4gIFZpZXdQYWdlckNvbXBvbmVudCxcbiAgTGluZXNMYWJlbERpcmVjdGl2ZSxcbiAgR29vZHNGaWx0ZXJDb21wb25lbnQsXG4gIEJyYW5kTGlzdENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xufVxuIl19