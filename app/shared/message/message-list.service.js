"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by barney on 2017/6/10.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var grocery_1 = require("../grocery/grocery");
var MessageListService = (function () {
    function MessageListService(http) {
        this.http = http;
    }
    MessageListService.prototype.load = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token); // 授权令牌
        var options = { headers: headers };
        var url = config_1.Config.apiUrl + "Groceries";
        return this.http.get(url, options)
            .map(function (response) { return response.json(); })
            .map(function (json) {
            var groceryList = [];
            json.Result.forEach(function (grocery) {
                groceryList.push(new grocery_1.Grocery(grocery.Id, grocery.Name));
            });
            return groceryList;
        })
            .catch(this.handleErrors);
    };
    // 请求例子
    MessageListService.prototype.request = function (lastUrl, par) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + lastUrl, JSON.stringify(par), { headers: headers })
            .map(function (response) { return response.json(); })
            .map(function (json) {
            return json;
        })
            .catch(this.handleErrors);
    };
    //     this.request("Groceries", { Name: this.grocery })
    // .subscribe(
    //     data => {
    //
    //         this.groceryList.unshift(new Grocery(data.Result.Id, this.grocery));
    //         this.grocery = "";
    //
    //     },
    //     () => {
    //         alert({
    //             message: "An error occurred while adding an item to your list.",
    //             okButtonText: "OK"
    //         });
    //         this.grocery = "";
    //     }
    // )
    MessageListService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    return MessageListService;
}());
MessageListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MessageListService);
exports.MessageListService = MessageListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLG9DQUFtQztBQUVuQyw4Q0FBNkM7QUFHN0MsSUFBYSxrQkFBa0I7SUFFM0IsNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUUzQixpQ0FBSSxHQUFYO1FBQ0ksSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTztRQUVsRSxJQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7UUFDNUIsSUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7YUFDN0IsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNsQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ04sSUFBTSxXQUFXLEdBQWMsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDeEIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsT0FBTztJQUNBLG9DQUFPLEdBQWQsVUFBZSxPQUFlLEVBQUUsR0FBUTtRQUNwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNuQixFQUFFLE9BQU8sU0FBQSxFQUFFLENBQ2Q7YUFDSSxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2xDLEdBQUcsQ0FBQyxVQUFDLElBQUk7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLHdEQUF3RDtJQUN4RCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLEVBQUU7SUFDRiwrRUFBK0U7SUFDL0UsNkJBQTZCO0lBQzdCLEVBQUU7SUFDRixTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwrRUFBK0U7SUFDL0UsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLElBQUk7SUFDUSx5Q0FBWSxHQUFwQixVQUFxQixLQUFlO1FBQ2hDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFksa0JBQWtCO0lBRDlCLGlCQUFVLEVBQUU7cUNBR2lCLFdBQUk7R0FGckIsa0JBQWtCLENBeUQ5QjtBQXpEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBiYXJuZXkgb24gMjAxNy82LzEwLlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4uL2dyb2NlcnkvZ3JvY2VyeVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgcHVibGljIGxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQ29uZmlnLnRva2VuKTsgLy8g5o6I5p2D5Luk54mMXHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IGhlYWRlcnMgfTtcclxuICAgICAgICBjb25zdCB1cmwgPSBDb25maWcuYXBpVXJsICsgXCJHcm9jZXJpZXNcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5tYXAoKGpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb2NlcnlMaXN0OiBHcm9jZXJ5W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGpzb24uUmVzdWx0LmZvckVhY2goKGdyb2NlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5wdXNoKG5ldyBHcm9jZXJ5KGdyb2NlcnkuSWQsIGdyb2NlcnkuTmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvY2VyeUxpc3Q7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcbiAgICAvLyDor7fmsYLkvovlrZBcclxuICAgIHB1YmxpYyByZXF1ZXN0KGxhc3RVcmw6IHN0cmluZywgcGFyOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgbGFzdFVybCxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocGFyKSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzIH0sXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuLy8gICAgIHRoaXMucmVxdWVzdChcIkdyb2Nlcmllc1wiLCB7IE5hbWU6IHRoaXMuZ3JvY2VyeSB9KVxyXG4vLyAuc3Vic2NyaWJlKFxyXG4vLyAgICAgZGF0YSA9PiB7XHJcbi8vXHJcbi8vICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KG5ldyBHcm9jZXJ5KGRhdGEuUmVzdWx0LklkLCB0aGlzLmdyb2NlcnkpKTtcclxuLy8gICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xyXG4vL1xyXG4vLyAgICAgfSxcclxuLy8gICAgICgpID0+IHtcclxuLy8gICAgICAgICBhbGVydCh7XHJcbi8vICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxyXG4vLyAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcbi8vICAgICB9XHJcbi8vIClcclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXX0=