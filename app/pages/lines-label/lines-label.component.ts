/**
 * Created by admin on 2017/6/12.
 */
import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import * as platform from "platform";
import {Label} from "tns-core-modules/ui/label";

declare var android;

@Component({
  selector: "lines-label",
  moduleId: module.id,
  templateUrl: "./lines-label.component.html",
})
export class LinesLabelComponent {
  @ViewChild("lab") public lab: ElementRef;

  @Input() private text: string;
  @Input() private lineNumber: any = 1;

  public loaded() {
    const label = this.lab.nativeElement as Label;
    if (platform.isAndroid) {
      label.android.setMaxLines(parseInt(this.lineNumber, 0));
      label.android.setLines(parseInt(this.lineNumber, 0));
      label.android.setEllipsize(android.text.TextUtils.TruncateAt.END);
    } else if (platform.isIOS) {
      label.ios.numberOfLines = parseInt(this.lineNumber, 0);
    }
  }
}

