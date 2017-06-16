"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var user_service_1 = require("../shared/user/user.service");
var config_1 = require("../shared/config");
var logger_service_1 = require("../service/logger.service");
var NetworkService = (function () {
    function NetworkService(http, logger) {
        this.http = http;
        this.logger = logger;
    }
    NetworkService.prototype.post = function (lastUrl, desciption, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        var currentUser = user_service_1.UserService.getCurrentUser();
        // 请求头
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        if (currentUser) {
            headers.append("verify", currentUser.verify);
            params.user_id = currentUser.userId;
            params.token = currentUser.token;
        }
        var url = config_1.Config.apiUrl + lastUrl;
        var options = {
            headers: headers,
            params: params,
        };
        return this.http.post(url, "", options)
            .map(function (response) { return response.json(); })
            .do(function (json) {
            _this.logger.log("response: " + JSON.stringify(json));
        })
            .catch(this.handleErrors);
    };
    NetworkService.prototype.handleErrors = function (error) {
        this.logger.error(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return NetworkService;
}());
NetworkService = __decorate([
    core_1.Injectable() // angular的依赖注入机制，所有service层的类都需要这个修饰器
    ,
    __metadata("design:paramtypes", [http_1.Http, logger_service_1.Logger])
], NetworkService);
exports.NetworkService = NetworkService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQiw0REFBMEQ7QUFDMUQsMkNBQTBDO0FBQzFDLDREQUFtRDtBQUduRCxJQUFhLGNBQWM7SUFFdkIsd0JBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUVuRCw2QkFBSSxHQUFYLFVBQVksT0FBZSxFQUFFLFVBQWtCLEVBQUUsTUFBZ0I7UUFBakUsaUJBc0JDO1FBdEJnRCx1QkFBQSxFQUFBLFdBQWdCO1FBQzdELElBQU0sV0FBVyxHQUFHLDBCQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNwQyxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDckMsQ0FBQztRQUVELElBQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLElBQU0sT0FBTyxHQUFHO1lBQ1osT0FBTyxTQUFBO1lBQ1AsTUFBTSxRQUFBO1NBQ1QsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQzthQUN0QyxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUM1QyxFQUFFLENBQUMsVUFBQyxJQUFJO1lBQ0wsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBYSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8scUNBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUUsQ0FBQyxzQ0FBc0M7O3FDQUd0QixXQUFJLEVBQWtCLHVCQUFNO0dBRjdDLGNBQWMsQ0FnQzFCO0FBaENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vc2VydmljZS9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKSAvLyBhbmd1bGFy55qE5L6d6LWW5rOo5YWl5py65Yi277yM5omA5pyJc2VydmljZeWxgueahOexu+mDvemcgOimgei/meS4quS/rumlsOWZqFxyXG5leHBvcnQgY2xhc3MgTmV0d29ya1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge31cclxuXHJcbiAgICBwdWJsaWMgcG9zdChsYXN0VXJsOiBzdHJpbmcsIGRlc2NpcHRpb246IHN0cmluZywgcGFyYW1zOiBhbnkgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBVc2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIC8vIOivt+axguWktFxyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBpZiAoY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJ2ZXJpZnlcIiwgY3VycmVudFVzZXIudmVyaWZ5KTtcclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJfaWQgPSBjdXJyZW50VXNlci51c2VySWQ7XHJcbiAgICAgICAgICAgIHBhcmFtcy50b2tlbiA9IGN1cnJlbnRVc2VyLnRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gQ29uZmlnLmFwaVVybCArIGxhc3RVcmw7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgXCJcIiwgb3B0aW9ucylcclxuICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAuZG8oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKGByZXNwb25zZTogJHtKU09OLnN0cmluZ2lmeShqc29uKX1gKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==