"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabbarComponent = (function () {
    function TabbarComponent() {
        this.onTabTap = new core_1.EventEmitter();
        this.allTabs = [];
    }
    TabbarComponent.prototype.ngOnInit = function () { };
    TabbarComponent.prototype.onTap = function (index) {
        this.onTabTap.emit(index);
    };
    return TabbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TabbarComponent.prototype, "selectedIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TabbarComponent.prototype, "tabs", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TabbarComponent.prototype, "onTabTap", void 0);
TabbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "tabbar",
        templateUrl: "./index.html",
        styleUrls: ["./index-common.css"],
    })
], TabbarComponent);
exports.TabbarComponent = TabbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZFO0FBUTdFLElBQWEsZUFBZTtJQU41QjtRQWNvQixhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFeEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQU92QixDQUFDO0lBTFEsa0NBQVEsR0FBZixjQUFtQixDQUFDO0lBRVosK0JBQUssR0FBYixVQUFjLEtBQUs7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWhCVTtJQUFSLFlBQUssRUFBRTs7c0RBQXVCO0FBQ3RCO0lBQVIsWUFBSyxFQUFFOzhCQUFlLEtBQUs7NkNBSXpCO0FBRU87SUFBVCxhQUFNLEVBQUU7O2lEQUF1QztBQVJyQyxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztHQUNXLGVBQWUsQ0FpQjNCO0FBakJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwidGFiYmFyXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5kZXguaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaW5kZXgtY29tbW9uLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJpdmF0ZSBzZWxlY3RlZEluZGV4O1xuICBASW5wdXQoKSBwcml2YXRlIHRhYnM6IEFycmF5PHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGltYWdlOiBzdHJpbmc7XG4gICAgc2VsZWN0ZWRJbWFnZTogc3RyaW5nO1xuICB9PjtcblxuICBAT3V0cHV0KCkgcHJpdmF0ZSBvblRhYlRhcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIGFsbFRhYnMgPSBbXTtcblxuICBwdWJsaWMgbmdPbkluaXQoKSB7fVxuXG4gIHByaXZhdGUgb25UYXAoaW5kZXgpIHtcbiAgICB0aGlzLm9uVGFiVGFwLmVtaXQoaW5kZXgpO1xuICB9XG59XG4iXX0=