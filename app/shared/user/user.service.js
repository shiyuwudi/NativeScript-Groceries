"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var application_settings_1 = require("application-settings");
var user_1 = require("./user");
var config_1 = require("../config");
var logger_service_1 = require("../../service/logger.service");
var main_service_1 = require("../../service/main.service");
var UserService = (function () {
    function UserService(http, logger, net) {
        this.http = http;
        this.logger = logger;
        this.net = net;
    }
    UserService.getCurrentUser = function () {
        if (!application_settings_1.hasKey("userId")) {
            return null;
        }
        var user = new user_1.User();
        user.userId = application_settings_1.getString("userId");
        user.token = application_settings_1.getString("token");
        user.username = application_settings_1.getString("userName");
        user.verify = application_settings_1.getString("verify");
        return user;
    };
    UserService.prototype.getLifeBuyList = function () {
        return this.net.post("/app/buyer/grouplife_order.htm", "生活购");
    };
    UserService.prototype.logout = function () {
        application_settings_1.remove("userId");
        application_settings_1.remove("token");
        application_settings_1.remove("userName");
        application_settings_1.remove("verify");
    };
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var url = config_1.Config.apiUrl + "/app/iskyshop_user_login.htm";
        var formData = new FormData();
        formData.append("userName", user.username);
        formData.append("password", user.password);
        var params = {
            userName: user.username,
            password: user.password,
        };
        var body = JSON.stringify(params);
        var options = {
            headers: headers,
            params: params,
        };
        return this.http.post(url, formData, options)
            .map(function (response) { return response.json(); })
            .do(function (json) {
            var code = json.code;
            if (code === "-100") {
                alert("账号不存在!");
            }
            else if (code === "-200") {
                alert("密码不正确!");
            }
            else if (code === "-300") {
                alert("登录失败!");
            }
            else if (code === "0") {
                alert("数据异常!");
            }
            else if (code === "100") {
                // 保存得到的token userid
                application_settings_1.setString("userName", json.userName);
                application_settings_1.setString("token", json.token);
                application_settings_1.setString("userId", json.user_id);
                application_settings_1.setString("verify", json.verify);
                alert("登录成功!");
            }
            else {
                alert("不知道啥异常!");
            }
        })
            .catch(this.handleErrors);
    };
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var url = config_1.Config.apiUrl + "Users";
        var params = {
            Username: user.email,
            Email: user.email,
            Password: user.password,
        };
        var body = JSON.stringify(params);
        var options = { headers: headers };
        return this.http.post(url, body, options).catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        this.logger.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable() // angular的依赖注入机制，所有service层的类都需要这个修饰器
    ,
    __metadata("design:paramtypes", [http_1.Http, logger_service_1.Logger, main_service_1.NetworkService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQiw2REFVOEI7QUFFOUIsK0JBQThCO0FBQzlCLG9DQUFtQztBQUNuQywrREFBc0Q7QUFDdEQsMkRBQTREO0FBRzVELElBQWEsV0FBVztJQWNwQixxQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxHQUFtQjtRQUEvRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWdCO0lBQUcsQ0FBQztJQVp6RSwwQkFBYyxHQUE1QjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLGdDQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0NBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLGdDQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBSU0sb0NBQWMsR0FBckI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFD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LElBQUksY0FBTyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxJQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBRztZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7UUFDRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQU0sT0FBTyxHQUFHLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTyxrQ0FBWSxHQUFwQixVQUFxQixLQUFlO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDO0FBekZZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRSxDQUFDLHNDQUFzQzs7cUNBZXRCLFdBQUksRUFBa0IsdUJBQU0sRUFBZSw2QkFBYztHQWQxRSxXQUFXLENBeUZ2QjtBQXpGWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldEJvb2xlYW4sXHJcbiAgICBzZXRCb29sZWFuLFxyXG4gICAgZ2V0TnVtYmVyLFxyXG4gICAgc2V0TnVtYmVyLFxyXG4gICAgZ2V0U3RyaW5nLFxyXG4gICAgc2V0U3RyaW5nLFxyXG4gICAgaGFzS2V5LFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgY2xlYXIsXHJcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvbWFpbi5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpIC8vIGFuZ3VsYXLnmoTkvp3otZbms6jlhaXmnLrliLbvvIzmiYDmnIlzZXJ2aWNl5bGC55qE57G76YO96ZyA6KaB6L+Z5Liq5L+u6aWw5ZmoXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDdXJyZW50VXNlcigpOiBVc2VyIHtcclxuICAgICAgICBpZiAoIWhhc0tleShcInVzZXJJZFwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdXNlci51c2VySWQgPSBnZXRTdHJpbmcoXCJ1c2VySWRcIik7XHJcbiAgICAgICAgdXNlci50b2tlbiA9IGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gICAgICAgIHVzZXIudXNlcm5hbWUgPSBnZXRTdHJpbmcoXCJ1c2VyTmFtZVwiKTtcclxuICAgICAgICB1c2VyLnZlcmlmeSA9IGdldFN0cmluZyhcInZlcmlmeVwiKTtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIsIHByaXZhdGUgbmV0OiBOZXR3b3JrU2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGlmZUJ1eUxpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXQucG9zdChcIi9hcHAvYnV5ZXIvZ3JvdXBsaWZlX29yZGVyLmh0bVwiLCBcIueUn+a0u+i0rVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb3V0KCkge1xyXG4gICAgICAgIHJlbW92ZShcInVzZXJJZFwiKTtcclxuICAgICAgICByZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgICAgICByZW1vdmUoXCJ1c2VyTmFtZVwiKTtcclxuICAgICAgICByZW1vdmUoXCJ2ZXJpZnlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IENvbmZpZy5hcGlVcmwgKyBcIi9hcHAvaXNreXNob3BfdXNlcl9sb2dpbi5odG1cIjtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJOYW1lXCIsIHVzZXIudXNlcm5hbWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBhc3N3b3JkXCIsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZm9ybURhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLmRvKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBqc29uLmNvZGU7XHJcbiAgICAgICAgICAgIGlmIChjb2RlID09PSBcIi0xMDBcIikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLotKblj7fkuI3lrZjlnKghXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IFwiLTIwMFwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIuWvhueggeS4jeato+ehriFcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gXCItMzAwXCIpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi55m75b2V5aSx6LSlIVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLmlbDmja7lvILluLghXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IFwiMTAwXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIOS/neWtmOW+l+WIsOeahHRva2VuIHVzZXJpZFxyXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidXNlck5hbWVcIiwganNvbi51c2VyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCBqc29uLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIHNldFN0cmluZyhcInVzZXJJZFwiLCBqc29uLnVzZXJfaWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidmVyaWZ5XCIsIGpzb24udmVyaWZ5KTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi55m75b2V5oiQ5YqfIVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi5LiN55+l6YGT5ZWl5byC5bi4IVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXIodXNlcjogVXNlcikge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gQ29uZmlnLmFwaVVybCArIFwiVXNlcnNcIjtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIFVzZXJuYW1lOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBFbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgUGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBoZWFkZXJzIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucykuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuIl19