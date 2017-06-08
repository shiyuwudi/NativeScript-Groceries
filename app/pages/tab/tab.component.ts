import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TextField } from "ui/text-field";
import * as SocialShare from "nativescript-social-share";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

@Component({
    selector: "tab",
    // 路径是从app层往下算起？
    templateUrl: "pages/tab/tab.html",
    styleUrls: ["pages/tab/tab.css", "pages/tab/tab-common.css"],
    providers: [GroceryListService],
})
export class TabComponent implements OnInit {

    public selectedIndex = 0;
    private items = [];

    public ngOnInit() {
        const objects = [
            { title: "首页", iconSource: "apple" },
            { title: "分类", iconSource: "banana" },
            { title: "附近", iconSource: "pear" },
            { title: "购物车", iconSource: "apple" },
            { title: "我的", iconSource: "banana" },
        ];
        const items = objects.map((obj) => {
            const stackLayout = new StackLayout();
            const label = new Label();
            label.text = obj.title;
            stackLayout.addChild(label);
            const tabEntry = new TabViewItem();
            tabEntry.title = obj.title; // tabbar的标题
            tabEntry.view = stackLayout; // 导航控制器
            return tabEntry;
        });
        this.items = items;
    }

    private onTap(index) {
        this.selectedIndex = index;
    }
}
