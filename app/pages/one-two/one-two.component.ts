import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import {ActionBar} from "tns-core-modules/ui/action-bar";
import {Page} from "ui/page";

@Component({
  moduleId: module.id,
  selector: "one-two",
  templateUrl: "./one-two.component.html",
  styleUrls: ["./one-two.css"],
})
export class OneTwoComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions, private page: Page) {
        // ...
  }
  public ngOnInit() {
    // 登录
    this.login();
  }
  public login() {
    //
  }
  public onTap(type: string) {
    this.routerExtensions[type]();
  }
}
