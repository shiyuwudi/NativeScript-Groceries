import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import {AppComponent} from "./app.component";
import {allComponents, AppRoutingModule} from "./app.routing";

@NgModule({
  // 引导组件
  bootstrap: [AppComponent],
  // 父组件导入，子组件也可以使用
  imports: [
    NativeScriptModule, // 总模块
    NativeScriptFormsModule, // 表单
    NativeScriptHttpModule, // 网络请求
    AppRoutingModule, // 路由
  ],
  // app中要用到的所有组件
  declarations: [
    AppComponent,
    ...allComponents,
  ],
  // 容错
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
export class AppModule {}
