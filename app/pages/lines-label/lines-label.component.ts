/**
 * Created by admin on 2017/6/12.
 */
import {Component, ElementRef, Input, ViewChild, Directive, HostListener} from "@angular/core";
import * as platform from "platform";
import {Label} from "tns-core-modules/ui/label";

declare var android;

@Directive({
  selector: "[maxLines]",
})
export class LinesLabelDirective {

  @Input() private maxLines: any = 1;

  constructor(private el: ElementRef) {
    //
  }

  @HostListener("loaded") public onChange() {
    const label = this.el.nativeElement as Label;
    if (platform.isAndroid) {
      label.android.setMaxLines(parseInt(this.maxLines, 0));
      label.android.setLines(parseInt(this.maxLines, 0));
      label.android.setEllipsize(android.text.TextUtils.TruncateAt.END);
    } else if (platform.isIOS) {
      label.ios.numberOfLines = parseInt(this.maxLines, 0);
    }
  }
}
