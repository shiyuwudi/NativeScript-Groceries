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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUE0QjtBQUMzQjtJQUFBO1FBQ1UsYUFBUSxHQUF1QyxFQUFFLENBQUM7SUFjNUQsQ0FBQztJQWJRLG9CQUFHLEdBQVYsVUFBVyxHQUFXO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWlDLEdBQUcsZUFBWSxDQUFDLENBQUM7UUFDOUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsS0FBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0ssc0JBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBaUMsR0FBRyxlQUFZLENBQUMsQ0FBQztRQUNoRSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxpQ0FBZ0IsR0FBdkI7UUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZSBuby1jb25zb2xlXG4gZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICBwcml2YXRlIG1lc3NhZ2VzOiBBcnJheTx7IG1zZzogc3RyaW5nLCBkYXRlOiBEYXRlIH0+ID0gW107XG4gICBwdWJsaWMgbG9nKG1zZzogc3RyaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgXFxuPT09PT09PSBqaW5nLWxpYW4tbWVuZyBsb2c6ICR7bXNnfSA9PT09PT09XFxuYCk7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7bXNnLCBkYXRlfSk7XG4gICAgfVxuICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nKSB7XG4gICAgIGNvbnNvbGUuZXJyb3IoYFxcbj09PT09PT0gamluZy1saWFuLW1lbmcgbG9nOiAke21zZ30gPT09PT09PVxcbmApO1xuICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHttc2csIGRhdGV9KTtcbiAgIH1cbiAgIHB1YmxpYyBnZXRNZXNzYWdlUmVjb3JkKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gICB9XG4gfVxuIl19