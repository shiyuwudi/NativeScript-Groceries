"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setHintColor(args) {
    if (args.view.android) {
        args.view.android.setHintTextColor(args.color.android);
    }
    else if (args.view.ios) {
        var dictionary = new NSDictionary([args.color.ios], [NSForegroundColorAttributeName]);
        args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint, dictionary);
    }
}
exports.setHintColor = setHintColor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGludC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0Esc0JBQTZCLElBQXVDO0lBQ2hFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksVUFBVSxHQUFHLElBQUksWUFBWSxDQUM3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQ2hCLENBQUMsOEJBQThCLENBQUMsQ0FDbkMsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFILENBQUM7QUFDTCxDQUFDO0FBVkQsb0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuZGVjbGFyZSB2YXIgTlNBdHRyaWJ1dGVkU3RyaW5nOiBhbnk7XG5kZWNsYXJlIHZhciBOU0RpY3Rpb25hcnk6IGFueTtcbmRlY2xhcmUgdmFyIE5TRm9yZWdyb3VuZENvbG9yQXR0cmlidXRlTmFtZTogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0SGludENvbG9yKGFyZ3M6IHsgdmlldzogVGV4dEZpZWxkLCBjb2xvcjogQ29sb3IgfSkge1xuICAgIGlmIChhcmdzLnZpZXcuYW5kcm9pZCkge1xuICAgICAgICBhcmdzLnZpZXcuYW5kcm9pZC5zZXRIaW50VGV4dENvbG9yKGFyZ3MuY29sb3IuYW5kcm9pZCk7XG4gICAgfSBlbHNlIGlmIChhcmdzLnZpZXcuaW9zKSB7XG4gICAgICAgIGxldCBkaWN0aW9uYXJ5ID0gbmV3IE5TRGljdGlvbmFyeShcbiAgICAgICAgICAgIFthcmdzLmNvbG9yLmlvc10sXG4gICAgICAgICAgICBbTlNGb3JlZ3JvdW5kQ29sb3JBdHRyaWJ1dGVOYW1lXVxuICAgICAgICApO1xuICAgICAgICBhcmdzLnZpZXcuaW9zLmF0dHJpYnV0ZWRQbGFjZWhvbGRlciA9IE5TQXR0cmlidXRlZFN0cmluZy5hbGxvYygpLmluaXRXaXRoU3RyaW5nQXR0cmlidXRlcyhhcmdzLnZpZXcuaGludCwgZGljdGlvbmFyeSk7XG4gICAgfVxufSJdfQ==