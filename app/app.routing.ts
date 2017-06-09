import { TabComponent } from "./pages/tab/tab.component";
import { ListComponent } from "./pages/list/list.component";
import { TabbarComponent } from "./pages/tabbar/index.component";

export const routes = [
  {
    path: "",
    component: TabComponent,
  },
  {
    path: "list",
    component: ListComponent,
  },
  {
    path: "tabbar",
    component: TabbarComponent,
  },
];

export const navigatableComponents = [
  TabComponent,
  ListComponent,
  TabbarComponent,
];
