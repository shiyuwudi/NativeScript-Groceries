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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQiw2REFVOEI7QUFFOUIsK0JBQThCO0FBQzlCLG9DQUFtQztBQUNuQywrREFBc0Q7QUFDdEQsMkRBQTREO0FBRzVELElBQWEsV0FBVztJQWNwQixxQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxHQUFtQjtRQUEvRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWdCO0lBQUcsQ0FBQztJQVp6RSwwQkFBYyxHQUE1QjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLGdDQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0NBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLGdDQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBSU0sb0NBQWMsR0FBckI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFD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LElBQUksY0FBTyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxJQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBRztZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7UUFDRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQU0sT0FBTyxHQUFHLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTyxrQ0FBWSxHQUFwQixVQUFxQixLQUFlO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDO0FBekZZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRSxDQUFDLHNDQUFzQzs7cUNBZXRCLFdBQUksRUFBa0IsdUJBQU0sRUFBZSw2QkFBYztHQWQxRSxXQUFXLENBeUZ2QjtBQXpGWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQge1xuICAgIGdldEJvb2xlYW4sXG4gICAgc2V0Qm9vbGVhbixcbiAgICBnZXROdW1iZXIsXG4gICAgc2V0TnVtYmVyLFxuICAgIGdldFN0cmluZyxcbiAgICBzZXRTdHJpbmcsXG4gICAgaGFzS2V5LFxuICAgIHJlbW92ZSxcbiAgICBjbGVhcixcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9sb2dnZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgTmV0d29ya1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9tYWluLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKSAvLyBhbmd1bGFy55qE5L6d6LWW5rOo5YWl5py65Yi277yM5omA5pyJc2VydmljZeWxgueahOexu+mDvemcgOimgei/meS4quS/rumlsOWZqFxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q3VycmVudFVzZXIoKTogVXNlciB7XG4gICAgICAgIGlmICghaGFzS2V5KFwidXNlcklkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdXNlci51c2VySWQgPSBnZXRTdHJpbmcoXCJ1c2VySWRcIik7XG4gICAgICAgIHVzZXIudG9rZW4gPSBnZXRTdHJpbmcoXCJ0b2tlblwiKTtcbiAgICAgICAgdXNlci51c2VybmFtZSA9IGdldFN0cmluZyhcInVzZXJOYW1lXCIpO1xuICAgICAgICB1c2VyLnZlcmlmeSA9IGdldFN0cmluZyhcInZlcmlmeVwiKTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLCBwcml2YXRlIG5ldDogTmV0d29ya1NlcnZpY2UpIHt9XG5cbiAgICBwdWJsaWMgZ2V0TGlmZUJ1eUxpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0LnBvc3QoXCIvYXBwL2J1eWVyL2dyb3VwbGlmZV9vcmRlci5odG1cIiwgXCLnlJ/mtLvotK1cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpIHtcbiAgICAgICAgcmVtb3ZlKFwidXNlcklkXCIpO1xuICAgICAgICByZW1vdmUoXCJ0b2tlblwiKTtcbiAgICAgICAgcmVtb3ZlKFwidXNlck5hbWVcIik7XG4gICAgICAgIHJlbW92ZShcInZlcmlmeVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcjogVXNlcikge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IENvbmZpZy5hcGlVcmwgKyBcIi9hcHAvaXNreXNob3BfdXNlcl9sb2dpbi5odG1cIjtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXNlck5hbWVcIiwgdXNlci51c2VybmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBhc3N3b3JkXCIsIHVzZXIucGFzc3dvcmQpO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlci51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGZvcm1EYXRhLCBvcHRpb25zKVxuICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLmRvKChqc29uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0ganNvbi5jb2RlO1xuICAgICAgICAgICAgaWYgKGNvZGUgPT09IFwiLTEwMFwiKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCLotKblj7fkuI3lrZjlnKghXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSBcIi0yMDBcIikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwi5a+G56CB5LiN5q2j56GuIVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gXCItMzAwXCIpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIueZu+W9leWksei0pSFcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCLmlbDmja7lvILluLghXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSBcIjEwMFwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5L+d5a2Y5b6X5Yiw55qEdG9rZW4gdXNlcmlkXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidXNlck5hbWVcIiwganNvbi51c2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidG9rZW5cIiwganNvbi50b2tlbik7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidXNlcklkXCIsIGpzb24udXNlcl9pZCk7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidmVyaWZ5XCIsIGpzb24udmVyaWZ5KTtcbiAgICAgICAgICAgICAgICBhbGVydChcIueZu+W9leaIkOWKnyFcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwi5LiN55+l6YGT5ZWl5byC5bi4IVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IENvbmZpZy5hcGlVcmwgKyBcIlVzZXJzXCI7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIFVzZXJuYW1lOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgRW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBQYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IGhlYWRlcnMgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucykuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59XG4iXX0=