import { Component, OnInit } from "@angular/core";
import { Classify, ClassifySecond, ClassifyThird } from "../../shared/classify/classify"; // 数据模型
import { ClassifyService } from "../../shared/classify/classify.service";
import {Page} from "ui/page";
import { Color } from "color";
import { Router } from "@angular/router";
import {ItemEventData} from "ui/list-view";

@Component({
    moduleId: module.id,
    selector: "classify",
    templateUrl: "./classify.component.html",
    styleUrls: ["./classify-common.css"],
    providers: [ClassifyService],
})
export class ClassifyComponent implements OnInit {
    private classifyAry : Classify[] =[];
    private classifySecondAry : ClassifyThird[] =[];
    private selectIndex = 0;
    constructor(private classifyService: ClassifyService, private page: Page, private router: Router) {}
    public ngOnInit() {
        this.page.backgroundColor = new Color("#f0f0f0");
        this.getGoodsClassifyList();
        this.getGoodsClassifySecondList({id: 0});
    }
    private getGoodsClassifyList() {
      this.classifyService.getGoodsClassifyList({"": ""}).subscribe(
                    (json) => {
                        json.goodsclass_list.forEach(
                            (classify) => {
                            this.classifyAry.push(new Classify(classify.className, classify.id)
                        )
                        });
                    }
                );
    }
    private getGoodsClassifySecondList(par) {
      this.classifyService.getGoodsClassifySecondList(par).subscribe(
                    (json) => {
                        const ary = [];
                        json.goodsclass_list.forEach(
                            (classify) => {
                            classify.third[0].name = classify.className; // 向数组的第一个元素添加 name 属性，实现分组效果
                            if (!!classify.third[1]) {
                                classify.third[1].index = false;
                            }
                            if (!!classify.third[2]) {
                                classify.third[2].index = false;
                            }
                            if (classify.third.length % 3 !== 0) {
                              if (classify.third.length % 3 === 1) {
                                classify.third.push({},{});

                              }else if(classify.third.length % 3 === 2) {
                                classify.third.push({});
                              }
                            }
                            classify.third.forEach((goods) => {
                                ary.push(goods); // 把各组的所有元素拼接为一个总的数组
                            }
                        )
                        });
                        ary.map((goods) => {
                            new ClassifyThird(goods.className, goods.id, goods.icon_path);
                        }
                        )
                        this.classifySecondAry = ary;
                    }
                );
    }
    public onItemTap(event: ItemEventData) {
        this.selectIndex = event.index;
        const classifyItem = this.classifyAry[event.index];
        this.getGoodsClassifySecondList({id: classifyItem.id});        
  }
}