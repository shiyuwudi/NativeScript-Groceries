"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var platform = require("platform");
var utils = require("utils/utils");
function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    // See https://github.com/burkeholland/nativescript-statusbar/issues/2
    // for details on the technique used.
    if (application.ios) {
        var AppDelegate = UIResponder.extend({
            applicationDidFinishLaunchingWithOptions: function () {
                utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
                return true;
            },
        }, {
            name: "AppDelegate",
            protocols: [UIApplicationDelegate],
        });
        application.ios.delegate = AppDelegate;
    }
    // Make the Android status bar transparent.
    // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
    // for details on the technique used.
    if (application.android) {
        application.android.on("activityStarted", function () {
            if (application.android && platform.device.sdkVersion >= "21") {
                var View = android.view.View;
                var window_1 = application.android.startActivity.getWindow();
                window_1.setStatusBarColor(0x000000);
                var decorView = window_1.getDecorView();
                decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
            }
        });
    }
}
exports.setStatusBarColors = setStatusBarColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLWJhci11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQTJDO0FBQzNDLG1DQUFxQztBQUNyQyxtQ0FBcUM7QUFRckM7SUFDRSx1REFBdUQ7SUFDdkQsc0VBQXNFO0lBQ3RFLHFDQUFxQztJQUNyQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3JDLHdDQUF3QztnQkFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7Z0JBQ2hILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1NBQ0YsRUFBRTtZQUNDLElBQUksRUFBRSxhQUFhO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUMsQ0FBQztRQUNMLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLDBHQUEwRztJQUMxRyxxQ0FBcUM7SUFDckMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDeEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7WUFDeEMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDL0IsSUFBTSxRQUFNLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzdELFFBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbkMsSUFBTSxTQUFTLEdBQUcsUUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QyxTQUFTLENBQUMscUJBQXFCLENBQzdCLElBQUksQ0FBQyw0QkFBNEI7c0JBRy9CLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzVDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDO0FBcENELGdEQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuZGVjbGFyZSB2YXIgVUlSZXNwb25kZXI6IGFueTtcbmRlY2xhcmUgdmFyIFVJU3RhdHVzQmFyU3R5bGU6IGFueTtcbmRlY2xhcmUgdmFyIFVJQXBwbGljYXRpb246IGFueTtcbmRlY2xhcmUgdmFyIFVJQXBwbGljYXRpb25EZWxlZ2F0ZTogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyQ29sb3JzKCkge1xuICAvLyBNYWtlIHRoZSBpT1Mgc3RhdHVzIGJhciB0cmFuc3BhcmVudCB3aXRoIHdoaXRlIHRleHQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnVya2Vob2xsYW5kL25hdGl2ZXNjcmlwdC1zdGF0dXNiYXIvaXNzdWVzLzJcbiAgLy8gZm9yIGRldGFpbHMgb24gdGhlIHRlY2huaXF1ZSB1c2VkLlxuICBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG4gICAgY29uc3QgQXBwRGVsZWdhdGUgPSBVSVJlc3BvbmRlci5leHRlbmQoe1xuICAgICAgYXBwbGljYXRpb25EaWRGaW5pc2hMYXVuY2hpbmdXaXRoT3B0aW9ucygpIHtcbiAgICAgICAgdXRpbHMuaW9zLmdldHRlcihVSUFwcGxpY2F0aW9uLCBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKS5zdGF0dXNCYXJTdHlsZSA9IFVJU3RhdHVzQmFyU3R5bGUuTGlnaHRDb250ZW50O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkFwcERlbGVnYXRlXCIsXG4gICAgICAgIHByb3RvY29sczogW1VJQXBwbGljYXRpb25EZWxlZ2F0ZV0sXG4gICAgICB9KTtcbiAgICBhcHBsaWNhdGlvbi5pb3MuZGVsZWdhdGUgPSBBcHBEZWxlZ2F0ZTtcbiAgfVxuXG4gIC8vIE1ha2UgdGhlIEFuZHJvaWQgc3RhdHVzIGJhciB0cmFuc3BhcmVudC5cbiAgLy8gU2VlIGh0dHA6Ly9icmFkbWFydGluLm5ldC8yMDE2LzAzLzEwL2Z1bGxzY3JlZW4tYW5kLW5hdmlnYXRpb24tYmFyLWNvbG9yLWluLWEtbmF0aXZlc2NyaXB0LWFuZHJvaWQtYXBwL1xuICAvLyBmb3IgZGV0YWlscyBvbiB0aGUgdGVjaG5pcXVlIHVzZWQuXG4gIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihcImFjdGl2aXR5U3RhcnRlZFwiLCAoKSA9PiB7XG4gICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCAmJiBwbGF0Zm9ybS5kZXZpY2Uuc2RrVmVyc2lvbiA+PSBcIjIxXCIpIHtcbiAgICAgICAgY29uc3QgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICBjb25zdCB3aW5kb3cgPSBhcHBsaWNhdGlvbi5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMCk7XG5cbiAgICAgICAgY29uc3QgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICBkZWNvclZpZXcuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KFxuICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgIC8vIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgLy8gfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=