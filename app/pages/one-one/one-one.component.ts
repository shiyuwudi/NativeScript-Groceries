import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "one-one",
  templateUrl: "./one-one.component.html",
})
export class OneOneComponent implements OnInit {
  constructor(private router: Router) {
  }
  public ngOnInit() {
    // 搞点大事情
  }
}
