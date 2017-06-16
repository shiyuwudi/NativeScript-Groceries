/**
 * Created by musiwen on 2017/6/13.
 */
import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output,
  ViewChild, SimpleChanges
} from "@angular/core";
import {Router} from "@angular/router";
import {Logger} from "../../service/logger.service";
import {GoodsFilterList} from "../../shared/goods/goods-filter-list";

@Component({
  moduleId: module.id,
  selector: "goods-filter",
  templateUrl: "./goods-filter.component.html",
  styleUrls: ["./goods-filter.common.css"],
})
export class GoodsFilterComponent implements OnInit {
  @Input() public labs: string[];
  @Input() public title: string;
  @Input() public id: number;
  public itemName: string = "全部";
  public isShow: boolean = false;
  @Output() private onItemTap = new EventEmitter();
  @Input() public index: number = -1;
  private itemHeight: number = 40;

  constructor(private router: Router, private logger: Logger) {
  }

  public ngOnInit() {
    // 搞点大事情
  }

  private itemTap(event, lab, index) {
    if (index === this.index) {
      this.index = -1;
      this.itemName = "全部";
    } else {
      this.index = index;
      this.itemName = lab;
    }
    const goodsFilterList = new GoodsFilterList(this.id, this.itemName, [], this.index);
    this.onItemTap.emit(goodsFilterList);
  }

  private open() {
    if (this.isShow) {
      this.itemHeight = 40;
      this.isShow = !this.isShow;
    } else {
      const lines = Math.ceil(this.labs.length / 3);
      this.itemHeight = 40 * lines;
      this.isShow = !this.isShow;
    }
  }
}
