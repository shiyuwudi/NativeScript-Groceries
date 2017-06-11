import {Component} from "@angular/core";

@Component({
    selector: "tab",
    templateUrl: "pages/tab/tab.html",
    styleUrls: ["pages/tab/tab.css", "pages/tab/tab-common.css"],
})
export class TabComponent  {
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
    private selectedIndex = 0;

    private onTap(index) {
      this.selectedIndex = index;
    }
}
