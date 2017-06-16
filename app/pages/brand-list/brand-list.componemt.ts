/**
 * Created by musiwen on 2017/6/15.
 */
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {BrandListService} from "../../shared/brand/brand-list.service";
import {Router} from "@angular/router";
import {Logger} from "../../service/logger.service";
import {BrandItem} from "../../shared/brand/brand-item";
import {Page} from "tns-core-modules/ui/page";
import {screen} from "platform";
import {TouchGestureEventData} from "tns-core-modules/ui/gestures";
import {GridLayout} from "tns-core-modules/ui/layouts/grid-layout";
import * as utils from "utils/utils";
import {ItemEventData, ListView} from "tns-core-modules/ui/list-view";

@Component({
  selector: "brand-list",
  moduleId: module.id,
  providers: [BrandListService],
  templateUrl: "./brand-list.component.html",
  styleUrls: ["./brand-list.common.css"],
})
export class BrandListComponent implements OnInit {
  @ViewChild("keyBar") private barLayout: ElementRef;
  @ViewChild("listView") private listView: ElementRef;
  private brandItemList: BrandItem[] = [];
  private keyFontSize = (screen.mainScreen.heightDIPs - 48) / 26 - 10;
  private barLeft: number = screen.mainScreen.widthDIPs - this.keyFontSize - 15;
  private words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  constructor(private brandService: BrandListService, private router: Router, private logger: Logger, private page: Page) {
  }

  public ngOnInit(): void {
    this.page.actionBarHidden = true;
    const list: BrandItem[] = [];
    this.brandService.getBrandLsit()
      .subscribe((brandList) => {
        brandList.forEach((brand) => {
          brand.brand_list.forEach((brandItem, index) => {
            list.push(new BrandItem(brandItem.id, brandItem.name, brandItem.photo, index, brand.word));
          });
        });
        this.brandItemList = list;
      });
  }

  public onTouch(event: TouchGestureEventData) {
    const gridLayout = this.barLayout.nativeElement as GridLayout;
    const lineHeight = utils.layout.toDeviceIndependentPixels(gridLayout.getMeasuredHeight()) / 26;
    let index = Math.ceil(event.getY() / lineHeight);
    if (index <= 0) {
      index = 1;
    } else if (index > 26) {
      index = 26;
    }
    for (let i = index - 1; i < 26; i++) {
      const keyIndex = this.hasKey(this.words[i]);
      if (keyIndex !== -1) {
        const listView = this.listView.nativeElement as ListView;
        listView.scrollToIndex(keyIndex);
        return;
      }
    }
  }

  public hasKey(key: string): number {
    for (let i = 0; i < this.brandItemList.length; i++) {
      if (key === this.brandItemList[i].key) {
        return i;
      }
    }
    return -1;
  }

  public onItemTap(event: ItemEventData) {
    const brandItem = this.brandItemList[event.index];
    this.router.navigate(["/home//goodsSearch"], {
      queryParams: {
        gbId: brandItem.id.toString(),
        word: brandItem.name,
      },
    });
  }
}
