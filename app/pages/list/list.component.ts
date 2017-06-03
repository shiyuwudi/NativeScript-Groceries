import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TextField } from "ui/text-field";
import * as SocialShare from "nativescript-social-share";

import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

@Component({
    selector: "list",
    // 路径是从app层往下算起？
    templateUrl: "pages/list/list.html",
    styleUrls: ["pages/list/list.css", "pages/list/list-common.css"],
    providers: [GroceryListService],
})
export class ListComponent implements OnInit {

    groceryList: Array<Grocery> = [];
    grocery = "";
    isLoading = false;
    listLoaded = false;

    @ViewChild("groceryTextField") groceryTextField: ElementRef;

    constructor(private groceryListService: GroceryListService) {}

    ngOnInit() {
        this.isLoading = true;
        this.groceryListService.load().subscribe((loadedGroceries: Array<Grocery>) => {
            this.groceryList = loadedGroceries.reverse();
            this.isLoading = false;
            this.listLoaded = true;
        });
    }

    share() {
        const listString = "分享给你我的杂货清单：" + this.groceryList
        .map(grocery => grocery.name)
        .join("，")
        .trim();
        SocialShare.shareText(listString);
    }

    add() {
        // 检查填写
        if (this.grocery.trim() === "") {
            alert({
                message: "请填写内容",
                okButtonText: "好吧",
            });
            return;
        }
        //收回键盘2
        const textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        // 提交数据
        const onSuccess = (groceryObject) => {
            this.groceryList.unshift(groceryObject);
            this.grocery = "";
        };
        const onFailure = () => {
            alert({
                message: "项目添加失败",
                okButtonText: "好吧",
            });
            this.grocery = "";
        };
        this.groceryListService.add(this.grocery).subscribe(onSuccess, onFailure);
    }
}