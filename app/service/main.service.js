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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQiw0REFBMEQ7QUFDMUQsMkNBQTBDO0FBQzFDLDREQUFtRDtBQUduRCxJQUFhLGNBQWM7SUFFdkIsd0JBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUVuRCw2QkFBSSxHQUFYLFVBQVksT0FBZSxFQUFFLFVBQWtCLEVBQUUsTUFBZ0I7UUFBakUsaUJBc0JDO1FBdEJnRCx1QkFBQSxFQUFBLFdBQWdCO1FBQzdELElBQU0sV0FBVyxHQUFHLDBCQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsTUFBTTtRQUNOLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNwQyxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDckMsQ0FBQztRQUVELElBQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLElBQU0sT0FBTyxHQUFHO1lBQ1osT0FBTyxTQUFBO1lBQ1AsTUFBTSxRQUFBO1NBQ1QsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQzthQUN0QyxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUM1QyxFQUFFLENBQUMsVUFBQyxJQUFJO1lBQ0wsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBYSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8scUNBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUUsQ0FBQyxzQ0FBc0M7O3FDQUd0QixXQUFJLEVBQWtCLHVCQUFNO0dBRjdDLGNBQWMsQ0FnQzFCO0FBaENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9zaGFyZWQvY29uZmlnXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vc2VydmljZS9sb2dnZXIuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpIC8vIGFuZ3VsYXLnmoTkvp3otZbms6jlhaXmnLrliLbvvIzmiYDmnIlzZXJ2aWNl5bGC55qE57G76YO96ZyA6KaB6L+Z5Liq5L+u6aWw5ZmoXG5leHBvcnQgY2xhc3MgTmV0d29ya1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7fVxuXG4gICAgcHVibGljIHBvc3QobGFzdFVybDogc3RyaW5nLCBkZXNjaXB0aW9uOiBzdHJpbmcsIHBhcmFtczogYW55ID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IFVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgIC8vIOivt+axguWktFxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKFwidmVyaWZ5XCIsIGN1cnJlbnRVc2VyLnZlcmlmeSk7XG4gICAgICAgICAgICBwYXJhbXMudXNlcl9pZCA9IGN1cnJlbnRVc2VyLnVzZXJJZDtcbiAgICAgICAgICAgIHBhcmFtcy50b2tlbiA9IGN1cnJlbnRVc2VyLnRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gQ29uZmlnLmFwaVVybCArIGxhc3RVcmw7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBcIlwiLCBvcHRpb25zKVxuICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLmRvKChqc29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coYHJlc3BvbnNlOiAke0pTT04uc3RyaW5naWZ5KGpzb24pfWApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn1cbiJdfQ==