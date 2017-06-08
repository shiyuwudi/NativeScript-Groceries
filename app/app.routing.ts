import { TabComponent } from "./pages/tab/tab.component";
import { ListComponent } from "./pages/list/list.component";

export const routes = [
  {
    path: "",
    component: TabComponent,
  },
  {
    path: "list",
    component: ListComponent,
  },
];

export const navigatableComponents = [
  TabComponent,
  ListComponent,
];
