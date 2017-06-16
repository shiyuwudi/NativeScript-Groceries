"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable no-console
var Logger = (function () {
    function Logger() {
        this.messages = [];
    }
    Logger.prototype.log = function (msg) {
        console.log("\n======= jing-lian-meng log: " + msg + " =======\n");
        var date = new Date();
        this.messages.push({ msg: msg, date: date });
    };
    Logger.prototype.error = function (msg) {
        console.error("\n======= jing-lian-meng log: " + msg + " =======\n");
        var date = new Date();
        this.messages.push({ msg: msg, date: date });
    };
    Logger.prototype.getMessageRecord = function () {
        return this.messages;
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUE0QjtBQUMzQjtJQUFBO1FBQ1UsYUFBUSxHQUF1QyxFQUFFLENBQUM7SUFjNUQsQ0FBQztJQWJRLG9CQUFHLEdBQVYsVUFBVyxHQUFXO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWlDLEdBQUcsZUFBWSxDQUFDLENBQUM7UUFDOUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsS0FBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0ssc0JBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBaUMsR0FBRyxlQUFZLENBQUMsQ0FBQztRQUNoRSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxpQ0FBZ0IsR0FBdkI7UUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZSBuby1jb25zb2xlXHJcbiBleHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuICAgcHJpdmF0ZSBtZXNzYWdlczogQXJyYXk8eyBtc2c6IHN0cmluZywgZGF0ZTogRGF0ZSB9PiA9IFtdO1xyXG4gICBwdWJsaWMgbG9nKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBcXG49PT09PT09IGppbmctbGlhbi1tZW5nIGxvZzogJHttc2d9ID09PT09PT1cXG5gKTtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7bXNnLCBkYXRlfSk7XHJcbiAgICB9XHJcbiAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZykge1xyXG4gICAgIGNvbnNvbGUuZXJyb3IoYFxcbj09PT09PT0gamluZy1saWFuLW1lbmcgbG9nOiAke21zZ30gPT09PT09PVxcbmApO1xyXG4gICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgIHRoaXMubWVzc2FnZXMucHVzaCh7bXNnLCBkYXRlfSk7XHJcbiAgIH1cclxuICAgcHVibGljIGdldE1lc3NhZ2VSZWNvcmQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xyXG4gICB9XHJcbiB9XHJcbiJdfQ==