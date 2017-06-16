"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by musiwen on 2017/6/15.
 */
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var config_1 = require("../config");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var Observable_1 = require("rxjs/Observable");
var BrandListService = (function () {
    function BrandListService(http) {
        this.http = http;
    }
    BrandListService.prototype.getBrandLsit = function () {
        return this.http.post(config_1.Config.brandList, "", {})
            .map(function (response) {
            return response.json().brand_list;
        }).catch(this.handleErrors);
    };
    BrandListService.prototype.handleErrors = function (error) {
        return Observable_1.Observable.throw(error);
    };
    return BrandListService;
}());
BrandListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BrandListService);
exports.BrandListService = BrandListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmQtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnJhbmQtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBNkM7QUFDN0Msc0NBQXlDO0FBQ3pDLG9DQUFpQztBQUNqQyxpQ0FBK0I7QUFDL0IsbUNBQWlDO0FBQ2pDLDhDQUEyQztBQUczQyxJQUFhLGdCQUFnQjtJQUMzQiwwQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVNLHVDQUFZLEdBQW5CO1FBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUM1QyxHQUFHLENBQUMsVUFBQyxRQUFrQjtZQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQXFCLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sdUNBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUNsQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FFZSxXQUFJO0dBRG5CLGdCQUFnQixDQWU1QjtBQWZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtdXNpd2VuIG9uIDIwMTcvNi8xNS5cbiAqL1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7QnJhbmR9IGZyb20gXCIuL2JyYW5kXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJhbmRMaXN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICB9XG5cbiAgcHVibGljIGdldEJyYW5kTHNpdCgpOiBPYnNlcnZhYmxlPEJyYW5kW10+IHtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcuYnJhbmRMaXN0LCBcIlwiLCB7fSlcbiAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLmJyYW5kX2xpc3QgYXMgQnJhbmRbXTtcbiAgICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufVxuIl19