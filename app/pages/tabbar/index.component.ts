import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "tabbar",
  templateUrl: "./index.html",
  styleUrls: ["./index-common.css"],
})
export class TabbarComponent implements OnInit {
  public links = ["/home/", "/home/two", "/home/three", "/home/four", "/home/five"];
  @Input() public tabs: Array<{
    title: string;
    image: string;
    selectedImage: string;
  }>;
  @Input() public selectedIndex;
  @Output() private onTabTap = new EventEmitter();

  constructor(private router: Router) {}
  public ngOnInit() {
    // 搞点大事情
  }

  private onTap(index) {
    this.onTabTap.emit(index);
  }
}
