"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tab_component_1 = require("./pages/tab/tab.component");
var list_component_1 = require("./pages/list/list.component");
var index_component_1 = require("./pages/tabbar/index.component");
exports.routes = [
    {
        path: "",
        component: tab_component_1.TabComponent,
    },
    {
        path: "list",
        component: list_component_1.ListComponent,
    },
    {
        path: "tabbar",
        component: index_component_1.TabbarComponent,
    },
];
exports.navigatableComponents = [
    tab_component_1.TabComponent,
    list_component_1.ListComponent,
    index_component_1.TabbarComponent,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUF5RDtBQUN6RCw4REFBNEQ7QUFDNUQsa0VBQWlFO0FBRXBELFFBQUEsTUFBTSxHQUFHO0lBQ3BCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsNEJBQVk7S0FDeEI7SUFDRDtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxpQ0FBZTtLQUMzQjtDQUNGLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLDRCQUFZO0lBQ1osOEJBQWE7SUFDYixpQ0FBZTtDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvdGFiL3RhYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJiYXJDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy90YWJiYXIvaW5kZXguY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIlwiLFxuICAgIGNvbXBvbmVudDogVGFiQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCJsaXN0XCIsXG4gICAgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCJ0YWJiYXJcIixcbiAgICBjb21wb25lbnQ6IFRhYmJhckNvbXBvbmVudCxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXG4gIFRhYkNvbXBvbmVudCxcbiAgTGlzdENvbXBvbmVudCxcbiAgVGFiYmFyQ29tcG9uZW50LFxuXTtcbiJdfQ==