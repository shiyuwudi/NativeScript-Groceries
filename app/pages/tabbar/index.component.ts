import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";

@Component({
  selector: "tabbar",
  templateUrl: "pages/tabbar/index.html",
  styleUrls: ["pages/tabbar/index-common.css"],
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

  public ngOnInit() {
    
  }

  private onTap(index) {
    this.onTabTap.emit(index);
  }
}
