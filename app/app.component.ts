import { Component } from "@angular/core";

@Component({
  selector: "main",
  // page-router-outlet 手机端, router-outlet 网页端。
  template: "<page-router-outlet></page-router-outlet>",
})
export class AppComponent {}