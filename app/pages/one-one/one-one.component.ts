import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { isAndroid, isIOS, device, screen } from "platform";
import {KeyboardType} from "tns-core-modules/ui/enums";
import {ScrollEventData} from "tns-core-modules/ui/scroll-view";
import { PanGestureEventData } from "ui/gestures";

@Component({
  moduleId: module.id,
  selector: "one-one",
  templateUrl: "./one-one.component.html",
  styleUrls: ["./one-one-common.css"],
})
export class OneOneComponent implements OnInit{
  public url1 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497627726292&di=182b0bae2c5d1ceec99e600e9ec21d3e&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160403%2F9-160403122055.jpg";
  public url2 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497628238878&di=3ec7c39c7474aed8218275a53f32e412&imgtype=0&src=http%3A%2F%2Fimg01.taopic.com%2F150812%2F240442-150Q20U00093.jpg";
  public url3 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497628238877&di=d3e360a894eac18f65fcf1e2b02882aa&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201502%2F2015021111.jpg";
  public url4 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497628238877&di=03ae2e5f3d9511fdd5ed27c7fc163447&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F140325%2F318763-14032513392460.jpg";
  public screenW = screen.mainScreen.widthDIPs;
  public urls = [this.url1, this.url2, this.url3, this.url4];
  public deltaX = 0;
  public images = [];
  public onScroll(ev: ScrollEventData) {
    // console.log(ev.scrollX);
  }
  public onPan(ev: PanGestureEventData) {
    // console.log(ev.deltaX);
  }
  public onPropertyChange(ev) {
    console.log(1, ev);
  }

  public ngOnInit() {
    this.images.push(
      {
        title: "Sports",
        source: "res://apple",
      },
    );
    this.images.push(
      {
        title: "Cats",
        source: "res://banana",
      },
    );
    this.images.push(
      {
        title: "Food",
        source: "res://pear",
      },
    );
  }
}
