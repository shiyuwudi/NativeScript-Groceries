/**
 * Created by barney on 2017/6/9.
 */
import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";
import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

@Component({
    moduleId: module.id, // 加这个，以下路径为相对路径
    selector: "message",
    templateUrl: "./message.html",
    styleUrls: ["./message-common.css", "./message.css"],
    providers: [GroceryListService],
})
export class MessageComponent implements OnInit {
    private isLoading = false;
    private groceryList = []; // 数据源
    public constructor(private groceryListService: GroceryListService) {}
    // OnInit 必须实现
    public ngOnInit() {
        this.isLoading = false;
        // this.groceryListService.load()
        //     .subscribe((loadedGroceries: Grocery[]) => {
        //         this.groceryList = loadedGroceries;
        //         this.isLoading = false;
        //     });
        this.groceryList.push(
            { name: "zt", time: "2017-6-6", content: "数据库能否尽快答复" },
            { name: "ew", time: "2017-6-6", content: "数据库能否尽快答复" },
            { name: "as", time: "2017-6-6", content: "数据库能否尽快答复数据库能否尽快答复数据库能否尽快答复数据库能否尽快答复数据库能否尽快答复" },
            );
    }
}
