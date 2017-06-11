import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "my-home",
  templateUrl: "home.component.html",
  styleUrls: ["./home-common.css", "./home.css"],
})
export class HomeComponent {
  public tabs = [
    {
      title: "首页",
      image: "res://apple",
      selectedImage: "res://pear",
    },
    {
      title: "分类",
      image: "res://apple",
      selectedImage: "res://pear",
    },
    {
      title: "附近",
      image: "res://apple",
      selectedImage: "res://pear",
    },
    {
      title: "购物车",
      image: "res://apple",
      selectedImage: "res://pear",
    },
    {
      title: "我的",
      image: "res://apple",
      selectedImage: "res://pear",
    },
  ];
  public selectedIndex = 0;
  private onTap(index) {
    this.selectedIndex = index;
  }
}
