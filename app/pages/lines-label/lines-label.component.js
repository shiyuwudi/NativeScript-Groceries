"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by admin on 2017/6/12.
 */
var core_1 = require("@angular/core");
var platform = require("platform");
var LinesLabelDirective = (function () {
    function LinesLabelDirective(el) {
        this.el = el;
        this.maxLines = 1;
        //
    }
    LinesLabelDirective.prototype.onChange = function () {
        var label = this.el.nativeElement;
        if (platform.isAndroid) {
            label.android.setMaxLines(parseInt(this.maxLines, 0));
            label.android.setLines(parseInt(this.maxLines, 0));
            label.android.setEllipsize(android.text.TextUtils.TruncateAt.END);
        }
        else if (platform.isIOS) {
            label.ios.numberOfLines = parseInt(this.maxLines, 0);
        }
    };
    return LinesLabelDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LinesLabelDirective.prototype, "maxLines", void 0);
__decorate([
    core_1.HostListener("loaded"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinesLabelDirective.prototype, "onChange", null);
LinesLabelDirective = __decorate([
    core_1.Directive({
        selector: "[maxLines]",
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], LinesLabelDirective);
exports.LinesLabelDirective = LinesLabelDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZXMtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGluZXMtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBK0Y7QUFDL0YsbUNBQXFDO0FBUXJDLElBQWEsbUJBQW1CO0lBSTlCLDZCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUZqQixhQUFRLEdBQVEsQ0FBQyxDQUFDO1FBR2pDLEVBQUU7SUFDSixDQUFDO0lBRThCLHNDQUFRLEdBQWY7UUFDdEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFzQixDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWhCVTtJQUFSLFlBQUssRUFBRTs7cURBQTJCO0FBTVg7SUFBdkIsbUJBQVksQ0FBQyxRQUFRLENBQUM7Ozs7bURBU3RCO0FBakJVLG1CQUFtQjtJQUgvQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7S0FDdkIsQ0FBQztxQ0FLd0IsaUJBQVU7R0FKdkIsbUJBQW1CLENBa0IvQjtBQWxCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgYWRtaW4gb24gMjAxNy82LzEyLlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7TGFiZWx9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbbWF4TGluZXNdXCIsXG59KVxuZXhwb3J0IGNsYXNzIExpbmVzTGFiZWxEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIHByaXZhdGUgbWF4TGluZXM6IGFueSA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIC8vXG4gIH1cblxuICBASG9zdExpc3RlbmVyKFwibG9hZGVkXCIpIHB1YmxpYyBvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBMYWJlbDtcbiAgICBpZiAocGxhdGZvcm0uaXNBbmRyb2lkKSB7XG4gICAgICBsYWJlbC5hbmRyb2lkLnNldE1heExpbmVzKHBhcnNlSW50KHRoaXMubWF4TGluZXMsIDApKTtcbiAgICAgIGxhYmVsLmFuZHJvaWQuc2V0TGluZXMocGFyc2VJbnQodGhpcy5tYXhMaW5lcywgMCkpO1xuICAgICAgbGFiZWwuYW5kcm9pZC5zZXRFbGxpcHNpemUoYW5kcm9pZC50ZXh0LlRleHRVdGlscy5UcnVuY2F0ZUF0LkVORCk7XG4gICAgfSBlbHNlIGlmIChwbGF0Zm9ybS5pc0lPUykge1xuICAgICAgbGFiZWwuaW9zLm51bWJlck9mTGluZXMgPSBwYXJzZUludCh0aGlzLm1heExpbmVzLCAwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==