import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

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

    constructor(private groceryListService: GroceryListService) {

    }

    ngOnInit() {
        this.groceryListService.load().subscribe((loadedGroceries: Array<Grocery>) => {
            this.groceryList = loadedGroceries;
        });
    }
}