import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import {Page} from "ui/page";
import {screen} from "platform";
import * as phone from "nativescript-phone";
import {ScrollEventData} from "tns-core-modules/ui/scroll-view";
import {Router} from "@angular/router";
declare var android;

@Component({
  moduleId: module.id,
  selector: "one-two",
  templateUrl: "./one-two.component.html",
  styleUrls: ["./one-two.css"],
})
export class OneTwoComponent {
  public url1 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497627726292&di=182b0bae2c5d1ceec99e600e9ec21d3e&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160403%2F9-160403122055.jpg";
  public url2 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497628238878&di=3ec7c39c7474aed8218275a53f32e412&imgtype=0&src=http%3A%2F%2Fimg01.taopic.com%2F150812%2F240442-150Q20U00093.jpg";
  public url3 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497628238877&di=d3e360a894eac18f65fcf1e2b02882aa&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201502%2F2015021111.jpg";
  public url4 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497628238877&di=03ae2e5f3d9511fdd5ed27c7fc163447&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F140325%2F318763-14032513392460.jpg";
  public mainEntries = [
    {title: "景区", row: 0, col: 0, color: "red"},
    {title: "卡", row: 0, col: 1, color: "green"},
    {title: "线路游", row: 0, col: 2, color: "pink"},
    {title: "美食", row: 1, col: 0, color: "blue"},
    {title: "土特产", row: 1, col: 1, color: "#73BE4B"},
    {title: "民宿", row: 1, col: 2, color: "orange"},
    {title: "自营商城", row: 2, col: 0, color: "brown"},
    {title: "积分商城", row: 2, col: 1, color: "gray"},
    {title: "常见问题", row: 2, col: 2, color: "purple"},
  ];
  public diameter = screen.mainScreen.widthDIPs / 3 - 20;
  public bgSearch = "#0073BE4B";
  constructor(private routerExtensions: RouterExtensions, private page: Page, private router: Router) {
    // ...
  }
  public onScroll(ev: ScrollEventData) {
    const { scrollY } = ev;
    const total = 64;
    let alpha;
    if (scrollY > 0 && scrollY < total) {
      alpha = scrollY / total * 255;
    } else if (scrollY > 0 || scrollY === total) {
      alpha = 255;
    } else {
      alpha = 0;
    }
    let a = Math.floor(alpha).toString(16);
    if (a.length === 1) {
      a = "0" + a;
    }
    this.bgSearch = `#${a}73BE4B`.toUpperCase();
  }
  public dialNumber() {
    phone.dial("110", true);
  }
  public onTapSlide(i) {
    const arr = [{a: 1, b: 2}];
    this.router.navigate(["/home//detail", "1234"]);
  }
}
