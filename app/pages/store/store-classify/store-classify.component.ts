import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";
import { StoreHomeService } from "../../../shared/store/store-home.service";
import { StoreClassify } from "../../../shared/store/store"; // 数据模型
import {RouterExtensions} from "nativescript-angular";
import { ListViewEventData, RadListView } from "nativescript-telerik-ui/listview";
import {Router} from "@angular/router";
import { SearchBar } from "ui/search-bar";

@Component({
    moduleId: module.id, // 加这个，以下路径为相对路径
    selector: "store-classify",
    templateUrl: "./store-classify.component.html",
    styleUrls: ["./store-classify-common.css"],
    providers: [StoreHomeService],
})
export class StoreClassifyComponent implements OnInit {
    private dataAry: StoreClassify[] = []; // 数据源
    private searchPhrase = "";
    public constructor(private storeHomeService: StoreHomeService, private routerExtensions: RouterExtensions, private router: Router) {}
    // OnInit 必须实现
    public ngOnInit() {
        this.getStoreClassifyList();
    }
    private getStoreClassifyList() {
        this.storeHomeService.getStoreClassifyList({store_id: "5"}).subscribe(
                    (json) => {
                        const ary = [];
                        json.data.forEach(
                            (store) => {
                            ary.push(new StoreClassify(store.name, store.id));
                            ary.push({});
                            if (!!store.children) {
                                if (store.children.length % 2 !== 0) {
                                   store.children.push({});
                               }
                                store.children.forEach(
                                    (child) => {
                                        ary.push(new StoreClassify(child.name, child.id,true));
                                    }
                                )
                           }
                        });
                        this.dataAry = ary;
                    }
                );
    }
    private back() {
    this.routerExtensions.back();
  }
  public onItemSelected(args: ListViewEventData) {
        var listview = args.object as RadListView;
        var selectedItems = listview.getSelectedItems() as Array<StoreClassify>;
        this.router.navigate(["/home//goodsSearch"], {
            queryParams: {
                gbId: selectedItems[0].id.toString(),
                word: selectedItems[0].name,
            },
        });
    }
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        if (searchBar.text === "") {
            alert("搜索内容不能为空");
        }else {
            this.router.navigate(["/home//goodsSearch"], {
            queryParams: {
                gbId: "5",
                word: searchBar.text,
            },
            });
        }
    }
    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        this.searchPhrase = searchBar.text;
    }
}