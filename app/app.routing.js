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
    lines_label_component_1.LinesLabelComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1QztBQUN2QyxzREFBcUU7QUFHckUsMkRBQXVEO0FBQ3ZELDhEQUEwRDtBQUMxRCxrRUFBK0Q7QUFDL0QsMkRBQXVEO0FBQ3ZELDJEQUF1RDtBQUN2RCxpRUFBNkQ7QUFDN0QsOERBQTBEO0FBQzFELDhEQUEwRDtBQUMxRCx3REFBb0Q7QUFDcEQsdUVBQWtFO0FBQ2xFLHVFQUFrRTtBQUNsRSxnRkFBNkU7QUFDN0Usc0ZBQWlGO0FBQ2pGLGdGQUEyRTtBQUMzRSxtRkFBOEU7QUFDOUUsc0ZBQWlGO0FBQ2pGLGdGQUEyRTtBQUUzRSxTQUFTO0FBQ1QsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtRQUN4QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsNEJBQVk7Z0JBQ3ZCLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsRUFBRTt3QkFDUixTQUFTLEVBQUUsbUNBQWU7cUJBQzNCO29CQUNEO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLFNBQVMsRUFBRSxtQ0FBZTtxQkFDM0I7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLFNBQVMsRUFBRSw2Q0FBb0I7cUJBQ2hDO29CQUNEO3dCQUNFLElBQUksRUFBRSxXQUFXO3dCQUNqQixTQUFTLEVBQUUseUNBQWtCO3FCQUM5QjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLDRCQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLDRCQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLGdDQUFjO2FBQzFCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLDhCQUFhO2FBQ3pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLDhCQUFhO2FBQ3pCO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLGFBQWEsR0FBRztJQUMzQiw0QkFBWTtJQUNaLDhCQUFhO0lBQ2IsaUNBQWU7SUFDZiw0QkFBWTtJQUNaLDRCQUFZO0lBQ1osZ0NBQWM7SUFDZCw4QkFBYTtJQUNiLDhCQUFhO0lBQ2IsOEJBQWE7SUFDYixtQ0FBZTtJQUNmLG1DQUFlO0lBQ2YsMkNBQW9CO0lBQ3BCLDZDQUFvQjtJQUNwQix5Q0FBa0I7SUFDbEIsMkNBQW1CO0lBQ25CLDZDQUFvQjtJQUNwQix5Q0FBa0I7Q0FDbkIsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBQ0EsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxnQkFBZ0IsQ0FDNUI7QUFEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3RhYi90YWIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RhYmJhckNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvdGFiYmFyL2luZGV4LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge09uZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvb25lL29uZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUd29Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3R3by90d28uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGhyZWVDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3RocmVlL3RocmVlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0ZvdXJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2ZvdXIvZm91ci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGaXZlQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9maXZlL2ZpdmUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge09uZU9uZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvb25lLW9uZS9vbmUtb25lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge09uZVR3b0NvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvb25lLXR3by9vbmUtdHdvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge015QWN0aW9uQmFyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R29vZHNTZWFyY2hDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2dvb2RzLXNlYXJjaC9nb29kcy1zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Vmlld1BhZ2VyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy92aWV3LXBhZ2VyL3ZpZXctcGFnZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGluZXNMYWJlbENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbGluZXMtbGFiZWwvbGluZXMtbGFiZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R29vZHNGaWx0ZXJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2dvb2RzLWZpbHRlci9nb29kcy1maWx0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QnJhbmRMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9icmFuZC1saXN0L2JyYW5kLWxpc3QuY29tcG9uZW10XCI7XHJcblxyXG4vLyDopoHot7PovaznmoTpobXpnaJcclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogXCJcIixcclxuICAgIHJlZGlyZWN0VG86IFwiL2hvbWVcIixcclxuICAgIHBhdGhNYXRjaDogXCJmdWxsXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcImhvbWVcIixcclxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIlwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogT25lQ29tcG9uZW50LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6IFwiXCIsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogT25lT25lQ29tcG9uZW50LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogXCJvbmV0d29cIixcclxuICAgICAgICAgICAgY29tcG9uZW50OiBPbmVUd29Db21wb25lbnQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiBcImdvb2RzU2VhcmNoXCIsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogR29vZHNTZWFyY2hDb21wb25lbnQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiBcImJyYW5kTGlzdFwiLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IEJyYW5kTGlzdENvbXBvbmVudCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwib25lXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBPbmVDb21wb25lbnQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcInR3b1wiLFxyXG4gICAgICAgIGNvbXBvbmVudDogVHdvQ29tcG9uZW50LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCJ0aHJlZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogVGhyZWVDb21wb25lbnQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcImZvdXJcIixcclxuICAgICAgICBjb21wb25lbnQ6IEZvdXJDb21wb25lbnQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcImZpdmVcIixcclxuICAgICAgICBjb21wb25lbnQ6IEZpdmVDb21wb25lbnQsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgYWxsQ29tcG9uZW50cyA9IFtcclxuICBUYWJDb21wb25lbnQsXHJcbiAgTGlzdENvbXBvbmVudCxcclxuICBUYWJiYXJDb21wb25lbnQsXHJcbiAgT25lQ29tcG9uZW50LFxyXG4gIFR3b0NvbXBvbmVudCxcclxuICBUaHJlZUNvbXBvbmVudCxcclxuICBGb3VyQ29tcG9uZW50LFxyXG4gIEZpdmVDb21wb25lbnQsXHJcbiAgSG9tZUNvbXBvbmVudCxcclxuICBPbmVPbmVDb21wb25lbnQsXHJcbiAgT25lVHdvQ29tcG9uZW50LFxyXG4gIE15QWN0aW9uQmFyQ29tcG9uZW50LFxyXG4gIEdvb2RzU2VhcmNoQ29tcG9uZW50LFxyXG4gIFZpZXdQYWdlckNvbXBvbmVudCxcclxuICBMaW5lc0xhYmVsQ29tcG9uZW50LFxyXG4gIEdvb2RzRmlsdGVyQ29tcG9uZW50LFxyXG4gIEJyYW5kTGlzdENvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XHJcbn1cclxuIl19