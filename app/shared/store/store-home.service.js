"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var main_service_1 = require("../../service/main.service");
var StoreHomeService = (function () {
    function StoreHomeService(net) {
        this.net = net;
    }
    StoreHomeService.prototype.getStoreHomeList = function (params) {
        if (params === void 0) { params = {}; }
        return this.net.post("/app/store.htm", "店铺首页列表", params);
    };
    StoreHomeService.prototype.getNewGoodsList = function (params) {
        if (params === void 0) { params = {}; }
        return this.net.post("/app/store_new_goods.htm", "店铺新品上架", params);
    };
    StoreHomeService.prototype.getAllGoodsList = function (params) {
        if (params === void 0) { params = {}; }
        return this.net.post("/app/goods_list.htm", "店铺全部宝贝", params);
    };
    StoreHomeService.prototype.getStoreInfo = function (params) {
        if (params === void 0) { params = {}; }
        return this.net.post("/app/store_info.htm", "店铺信息", params);
    };
    StoreHomeService.prototype.isFavourite = function (params) {
        if (params === void 0) { params = {}; }
        return this.net.post("/app/add_store_favorite.htm", "收藏操作", params);
    };
    StoreHomeService.prototype.getStoreClassifyList = function (params) {
        if (params === void 0) { params = {}; }
        return this.net.post("/app/store_goodsClass.htm", "店铺分类列表", params);
    };
    return StoreHomeService;
}());
StoreHomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [main_service_1.NetworkService])
], StoreHomeService);
exports.StoreHomeService = StoreHomeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtaG9tZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmUtaG9tZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLGlDQUErQjtBQUMvQiwyREFBNEQ7QUFHNUQsSUFBYSxnQkFBZ0I7SUFDekIsMEJBQW9CLEdBQW1CO1FBQW5CLFFBQUcsR0FBSCxHQUFHLENBQWdCO0lBQUcsQ0FBQztJQUNwQywyQ0FBZ0IsR0FBdkIsVUFBd0IsTUFBZ0I7UUFBaEIsdUJBQUEsRUFBQSxXQUFnQjtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTSwwQ0FBZSxHQUF0QixVQUF1QixNQUFnQjtRQUFoQix1QkFBQSxFQUFBLFdBQWdCO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNNLDBDQUFlLEdBQXRCLFVBQXVCLE1BQWdCO1FBQWhCLHVCQUFBLEVBQUEsV0FBZ0I7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ00sdUNBQVksR0FBbkIsVUFBb0IsTUFBZ0I7UUFBaEIsdUJBQUEsRUFBQSxXQUFnQjtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTSxzQ0FBVyxHQUFsQixVQUFtQixNQUFnQjtRQUFoQix1QkFBQSxFQUFBLFdBQWdCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNNLCtDQUFvQixHQUEzQixVQUE0QixNQUFnQjtRQUFoQix1QkFBQSxFQUFBLFdBQWdCO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FFZ0IsNkJBQWM7R0FEOUIsZ0JBQWdCLENBb0I1QjtBQXBCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgeyBOZXR3b3JrU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL21haW4uc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVIb21lU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXQ6IE5ldHdvcmtTZXJ2aWNlKSB7fVxuICAgIHB1YmxpYyBnZXRTdG9yZUhvbWVMaXN0KHBhcmFtczogYW55ID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5uZXQucG9zdChcIi9hcHAvc3RvcmUuaHRtXCIsIFwi5bqX6ZO66aaW6aG15YiX6KGoXCIsIHBhcmFtcyk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXROZXdHb29kc0xpc3QocGFyYW1zOiBhbnkgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5ldC5wb3N0KFwiL2FwcC9zdG9yZV9uZXdfZ29vZHMuaHRtXCIsIFwi5bqX6ZO65paw5ZOB5LiK5p62XCIsIHBhcmFtcyk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRBbGxHb29kc0xpc3QocGFyYW1zOiBhbnkgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5ldC5wb3N0KFwiL2FwcC9nb29kc19saXN0Lmh0bVwiLCBcIuW6l+mTuuWFqOmDqOWunei0nVwiLCBwYXJhbXMpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0U3RvcmVJbmZvKHBhcmFtczogYW55ID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5uZXQucG9zdChcIi9hcHAvc3RvcmVfaW5mby5odG1cIiwgXCLlupfpk7rkv6Hmga9cIiwgcGFyYW1zKTtcbiAgICB9XG4gICAgcHVibGljIGlzRmF2b3VyaXRlKHBhcmFtczogYW55ID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5uZXQucG9zdChcIi9hcHAvYWRkX3N0b3JlX2Zhdm9yaXRlLmh0bVwiLCBcIuaUtuiXj+aTjeS9nFwiLCBwYXJhbXMpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0U3RvcmVDbGFzc2lmeUxpc3QocGFyYW1zOiBhbnkgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5ldC5wb3N0KFwiL2FwcC9zdG9yZV9nb29kc0NsYXNzLmh0bVwiLCBcIuW6l+mTuuWIhuexu+WIl+ihqFwiLCBwYXJhbXMpO1xuICAgIH1cbn0iXX0=