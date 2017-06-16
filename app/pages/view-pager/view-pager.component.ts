/**
 * Created by admin on 2017/6/12.
 */

import {
  Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef,
  OnDestroy
} from "@angular/core";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {Image} from "tns-core-modules/ui/image";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {screen} from "platform";
import {PanGestureEventData} from "tns-core-modules/ui/gestures";
import {AnimationCurve} from "tns-core-modules/ui/enums";
import {AbsoluteLayout} from "tns-core-modules/ui/layouts/absolute-layout";
@Component({
  selector: "view-pager",
  moduleId: module.id,
  templateUrl: "./view-pager.component.html",
  styleUrls: ["./view-pager.common.css"],
})

export class ViewPagerComponent implements OnInit, OnDestroy {
  private barContainer: StackLayout;
  @ViewChild("container") private container: ElementRef;

  @Input() private images: string[];
  @Output() private onPagerChange = new EventEmitter();
  private viewpager: StackLayout;
  private subscribe: Subscription;
  private index = 0;
  private height: number = 0;

  public ngOnInit(): void {
    this.addData(this.images);
    this.subscribe = Observable.interval(2500).subscribe(() => {
      this.flip(this.index + 1);
    });
  }

  public addData(images: string[]) {
    this.height = screen.mainScreen.widthDIPs * 520 / 1080;
    this.viewpager = new StackLayout();
    this.viewpager.set("width", screen.mainScreen.widthDIPs * this.images.length);
    this.viewpager.set("height", this.height);
    this.viewpager.set("orientation", "horizontal");
    this.barContainer = new StackLayout();
    this.barContainer.set("width", 20 * images.length);
    this.barContainer.set("height", 20);
    this.barContainer.set("orientation", "horizontal");
    this.barContainer.set("left", (screen.mainScreen.widthDIPs - 20 * images.length) / 2);
    this.barContainer.set("top", this.height - 30);
    images.forEach((url, i) => {
      const image = new Image();
      image.set("src", url);
      image.set("width", screen.mainScreen.widthDIPs);
      image.set("height", this.height);
      this.viewpager.addChild(image);

      const lab = new Image();
      lab.set("width", 10);
      lab.set("height", 10);
      lab.set("borderRadius", 10);
      lab.set("margin", 5);
      if (i === 0) {
        lab.set("backgroundColor", "#ffffff");
      } else {
        lab.set("backgroundColor", "#44000000");
      }
      this.barContainer.addChild(lab);
    });
    const absoluteLayout = this.container.nativeElement as AbsoluteLayout;
    absoluteLayout.addChild(this.viewpager);
    absoluteLayout.addChild(this.barContainer);
  }

  public ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  public flip(index: number) {
    if (this.index === this.images.length - 1) {
      index = 0;
    }
    this.viewpager.animate({
      translate: {x: -screen.mainScreen.widthDIPs * index, y: 0},
      duration: 300,
      curve: AnimationCurve.linear,
    }).then(() => {
      if (this.index === this.images.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      for (let i = 0; i < this.barContainer.getChildrenCount(); i++) {
        const lab = this.barContainer.getChildAt(i);
        if (this.index === i) {
          lab.set("backgroundColor", "#ffffff");
        } else {
          lab.set("backgroundColor", "#55000000");
        }
      }
    });
  }

  public upFlip(index: number) {
    if (index === -1) {
      index = this.images.length - 1;
    }
    this.viewpager.animate({
      translate: {x: -screen.mainScreen.widthDIPs * index, y: 0},
      duration: 300,
      curve: AnimationCurve.linear,
    }).then(() => {
      if (this.index === 0) {
        this.index = this.images.length - 1;
      } else {
        this.index--;
      }
      for (let i = 0; i < this.barContainer.getChildrenCount(); i++) {
        const lab = this.barContainer.getChildAt(i);
        if (this.index === i) {
          lab.set("backgroundColor", "#ffffff");
        } else {
          lab.set("backgroundColor", "#55000000");
        }
      }
    });
  }

  public onTap() {
    this.onPagerChange.emit(this.index);
  }

  public onPan(args: PanGestureEventData) {
    // this.viewpager.set("translateX",-screen.mainScreen.widthDIPs * (this.index + 1)+args.deltaX)
    if (args.state === 1) {
      this.subscribe.unsubscribe();
    } else if (args.state === 3) {
      if (args.deltaX > 20) {
        this.upFlip(this.index - 1);
      } else if (args.deltaX < -20) {
        this.flip(this.index + 1);
      }
      this.subscribe = Observable.interval(2500).subscribe((time) => {
        this.flip(this.index + 1);
      });
    }
  }
}
