import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

@Component({
  moduleId: module.id,
  selector: "page-one",
  templateUrl: "./one.component.html",
  styleUrls: ["./one-common.css"],
})
export class OneComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) { }
  public onNavBtnTap() {
    this.routerExtensions.back();
  }
  public ngOnInit() {
    // 搞点事情
  }
}
