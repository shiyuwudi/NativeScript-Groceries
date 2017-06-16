import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {TabComponent} from "./pages/tab/tab.component";
import {ListComponent} from "./pages/list/list.component";
import {TabbarComponent} from "./pages/tabbar/index.component";
import {OneComponent} from "./pages/one/one.component";
import {TwoComponent} from "./pages/two/two.component";
import {ThreeComponent} from "./pages/three/three.component";
import {FourComponent} from "./pages/four/four.component";
import {FiveComponent} from "./pages/five/five.component";
import {HomeComponent} from "./home/home.component";
import {OneOneComponent} from "./pages/one-one/one-one.component";
import {OneTwoComponent} from "./pages/one-two/one-two.component";
import {MyActionBarComponent} from "./pages/action-bar/action-bar.component";
import {GoodsSearchComponent} from "./pages/goods-search/goods-search.component";
import {ViewPagerComponent} from "./pages/view-pager/view-pager.component";
import {LinesLabelDirective} from "./pages/lines-label/lines-label.component";
import {GoodsFilterComponent} from "./pages/goods-filter/goods-filter.component";
import {BrandListComponent} from "./pages/brand-list/brand-list.componemt";

// 要跳转的页面
const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: OneComponent,
        children: [
          {
            path: "",
            component: OneOneComponent,
          },
          {
            path: "onetwo",
            component: OneTwoComponent,
          },
          {
            path: "goodsSearch",
            component: GoodsSearchComponent,
          },
          {
            path: "brandList",
            component: BrandListComponent,
          },
        ],
      },
      {
        path: "one",
        component: OneComponent,
      },
      {
        path: "two",
        component: TwoComponent,
      },
      {
        path: "three",
        component: ThreeComponent,
      },
      {
        path: "four",
        component: FourComponent,
      },
      {
        path: "five",
        component: FiveComponent,
      },
    ],
  },
];

export const allComponents = [
  TabComponent,
  ListComponent,
  TabbarComponent,
  OneComponent,
  TwoComponent,
  ThreeComponent,
  FourComponent,
  FiveComponent,
  HomeComponent,
  OneOneComponent,
  OneTwoComponent,
  MyActionBarComponent,
  GoodsSearchComponent,
  ViewPagerComponent,
  LinesLabelDirective,
  GoodsFilterComponent,
  BrandListComponent,
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {
}
