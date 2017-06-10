import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "tabbar",
  templateUrl: "./index.html",
  styleUrls: ["./index-common.css"],
})
export class TabbarComponent implements OnInit {
  @Input() private selectedIndex;
  @Input() private tabs: Array<{
    title: string;
    image: string;
    selectedImage: string;
  }>;

  @Output() private onTabTap = new EventEmitter();

  private allTabs = [];

  public ngOnInit() {}

  private onTap(index) {
    this.onTabTap.emit(index);
  }
}
