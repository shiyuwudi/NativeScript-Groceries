"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by musiwen on 2017/6/12.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../config");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var SearchGoodsService = (function () {
    function SearchGoodsService(http) {
        this.http = http;
    }
    SearchGoodsService.prototype.search = function (gcId, keyword, gbId, selfFilter, inventoryFilter, payafterFilter, queryType, buildingId, orderBy, orderType, beginCount, selectCount, properties) {
        var url = config_1.Config.searchGoods;
        return this.http
            .post(url, "", {
            params: {
                gc_id: gcId,
                keyword: keyword,
                gb_id: gbId,
                selfFilter: selfFilter,
                inventoryFilter: inventoryFilter,
                payafterFilter: payafterFilter,
                queryType: queryType,
                buildingId: buildingId,
                orderBy: orderBy,
                orderType: orderType,
                beginCount: beginCount,
                selectCount: selectCount,
                properties: properties,
            },
        })
            .map(function (response) {
            var json = response.json();
            return json.goods_list;
        })
            .catch(this.handleErrors);
    };
    SearchGoodsService.prototype.getGoodsFilter = function (gcId) {
        var url = config_1.Config.filterGoods;
        return this.http
            .post(url, "", {
            params: {
                gc_id: gcId,
            },
        })
            .map(function (response) {
            var json = response.json();
            return json.result;
        })
            .catch(this.handleErrors);
    };
    SearchGoodsService.prototype.handleErrors = function (error) {
        return Observable_1.Observable.throw(error);
    };
    return SearchGoodsService;
}());
SearchGoodsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SearchGoodsService);
exports.SearchGoodsService = SearchGoodsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWdvb2RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtZ29vZHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQXlDO0FBQ3pDLHNDQUEwRTtBQUMxRSxvQ0FBaUM7QUFDakMsOENBQTJDO0FBQzNDLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFLakMsSUFBYSxrQkFBa0I7SUFDN0IsNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFTSxtQ0FBTSxHQUFiLFVBQWMsSUFBWSxFQUNaLE9BQWUsRUFDZixJQUFZLEVBQ1osVUFBa0IsRUFDbEIsZUFBdUIsRUFDdkIsY0FBc0IsRUFDdEIsU0FBaUIsRUFDakIsVUFBa0IsRUFDbEIsT0FBZSxFQUNmLFNBQWlCLEVBQ2pCLFVBQWtCLEVBQ2xCLFdBQW1CLEVBQ25CLFVBQWtCO1FBQzlCLElBQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxXQUFXLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLElBQUk7Z0JBQ1gsT0FBTyxTQUFBO2dCQUNQLEtBQUssRUFBRSxJQUFJO2dCQUNYLFVBQVUsWUFBQTtnQkFDVixlQUFlLGlCQUFBO2dCQUNmLGNBQWMsZ0JBQUE7Z0JBQ2QsU0FBUyxXQUFBO2dCQUNULFVBQVUsWUFBQTtnQkFDVixPQUFPLFNBQUE7Z0JBQ1AsU0FBUyxXQUFBO2dCQUNULFVBQVUsWUFBQTtnQkFDVixXQUFXLGFBQUE7Z0JBQ1gsVUFBVSxZQUFBO2FBQ1g7U0FDRixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDdEIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBMkIsQ0FBQztRQUMxQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSwyQ0FBYyxHQUFyQixVQUFzQixJQUFZO1FBQ2hDLElBQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxXQUFXLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQyxRQUFrQjtZQUN0QixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUF1QixDQUFDO1FBQ3RDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLHlDQUFZLEdBQXBCLFVBQXFCLEtBQWU7UUFDbEMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUE3REQsSUE2REM7QUE3RFksa0JBQWtCO0lBRDlCLGlCQUFVLEVBQUU7cUNBRWUsV0FBSTtHQURuQixrQkFBa0IsQ0E2RDlCO0FBN0RZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtdXNpd2VuIG9uIDIwMTcvNi8xMi5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IHtTZWFyY2hHb29kc30gZnJvbSBcIi4vc2VhcmNoLWdvb2RzXCI7XG5pbXBvcnQge0dvb2RzRmlsdGVyfSBmcm9tIFwiLi9nb29kcy1maWx0ZXJcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaEdvb2RzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICB9XG5cbiAgcHVibGljIHNlYXJjaChnY0lkOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAga2V5d29yZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGdiSWQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBzZWxmRmlsdGVyOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5RmlsdGVyOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcGF5YWZ0ZXJGaWx0ZXI6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBidWlsZGluZ0lkOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIG9yZGVyVHlwZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGJlZ2luQ291bnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBzZWxlY3RDb3VudDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHN0cmluZyk6IE9ic2VydmFibGU8U2VhcmNoR29vZHNbXT4ge1xuICAgIGNvbnN0IHVybCA9IENvbmZpZy5zZWFyY2hHb29kcztcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIFwiXCIsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZ2NfaWQ6IGdjSWQsXG4gICAgICAgICAga2V5d29yZCxcbiAgICAgICAgICBnYl9pZDogZ2JJZCxcbiAgICAgICAgICBzZWxmRmlsdGVyLFxuICAgICAgICAgIGludmVudG9yeUZpbHRlcixcbiAgICAgICAgICBwYXlhZnRlckZpbHRlcixcbiAgICAgICAgICBxdWVyeVR5cGUsXG4gICAgICAgICAgYnVpbGRpbmdJZCxcbiAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgIG9yZGVyVHlwZSxcbiAgICAgICAgICBiZWdpbkNvdW50LFxuICAgICAgICAgIHNlbGVjdENvdW50LFxuICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGpzb24gPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBqc29uLmdvb2RzX2xpc3QgYXMgU2VhcmNoR29vZHNbXTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgcHVibGljIGdldEdvb2RzRmlsdGVyKGdjSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R29vZHNGaWx0ZXJbXT4ge1xuICAgIGNvbnN0IHVybCA9IENvbmZpZy5maWx0ZXJHb29kcztcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIFwiXCIsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZ2NfaWQ6IGdjSWQsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGpzb24gPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBqc29uLnJlc3VsdCBhcyBHb29kc0ZpbHRlcltdO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cbn1cbiJdfQ==