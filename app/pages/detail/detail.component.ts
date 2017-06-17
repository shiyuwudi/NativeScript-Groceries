/**
 * Created by apple12 on 2017/6/17.
 */
import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail-common.css"],
})
export class DetailComponent implements OnInit {
  public id = "";
  constructor(
    private route: ActivatedRoute,
  ) {}
  public ngOnInit() {
    const p = this.route.params
    .map((o) => o.obj)
    .subscribe((obj) => {
      console.log(1, obj);
    });
  }
}
