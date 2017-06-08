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

    private groceryList: Grocery[] = [];
    private grocery = "";
    private isLoading = false;
    private listLoaded = false;

    @ViewChild("groceryTextField") private groceryTextField: ElementRef;

    constructor(private groceryListService: GroceryListService) {}

    public ngOnInit() {
        this.isLoading = true;
        this.groceryListService.load().subscribe((loadedGroceries: Grocery[]) => {
            this.groceryList = loadedGroceries.reverse();
            this.isLoading = false;
            this.listLoaded = true;
        });
    }

    private share() {
        const listString = "分享给你我的杂货清单：" + this.groceryList
        .map((grocery) => grocery.name)
        .join("，")
        .trim();
        SocialShare.shareText(listString);
    }

    private add() {
        // 检查填写
        if (this.grocery.trim() === "") {
            alert({
                message: "请填写内容",
                okButtonText: "好吧",
            });
            return;
        }
        // 收回键盘2
        const textField = this.groceryTextField.nativeElement as TextField;
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

    private delete(item) {
        const id = item.id;
        this.groceryListService.delete(id).subscribe((data) => {
            if (data.Result === 1) {
                // 删除成功
                this.groceryList = this.groceryList.filter((grocery) => grocery.id !== id);
            }
        });
    }
}
