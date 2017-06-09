import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  // 父组件导入，子组件也可以使用
  imports: [
    NativeScriptModule, // 啥？
    NativeScriptFormsModule, // 表单？
    NativeScriptHttpModule, // 网络请求
    NativeScriptRouterModule, // 路由
    NativeScriptRouterModule.forRoot(routes), // 同上
  ],
  // app中要用到的所有组件1
  declarations: [
    AppComponent,
    ...navigatableComponents,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
