import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TextField } from "ui/text-field";
import * as SocialShare from "nativescript-social-share";
import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

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
    private items = [];
    private selectedIndex = 0;

    private onTap(index) {
      this.selectedIndex = index;
    }
}
