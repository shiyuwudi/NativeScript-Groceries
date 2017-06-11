/**
 * Created by apple12 on 2017/6/11.
 */

import {Component, Input, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";

@Component({
  moduleId: module.id,
  selector: "action-bar",
  templateUrl: "./action-bar.component.html",
})
export class MyActionBarComponent implements OnInit {
  @Input() public title: string;
  constructor(private routerExtensions: RouterExtensions, private page: Page) {}
  public ngOnInit() {
    // 搞点大事情
    this.page.actionBar.navigationButton = null;
  }
  public onNavBtnTap() {
    this.routerExtensions.backToPreviousPage();
  }
}
