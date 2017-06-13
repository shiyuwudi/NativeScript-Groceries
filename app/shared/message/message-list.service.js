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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLG9DQUFtQztBQUVuQyw4Q0FBNkM7QUFHN0MsSUFBYSxrQkFBa0I7SUFFM0IsNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUUzQixpQ0FBSSxHQUFYO1FBQ0ksSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTztRQUVsRSxJQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7UUFDNUIsSUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7YUFDN0IsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNsQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ04sSUFBTSxXQUFXLEdBQWMsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDeEIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsT0FBTztJQUNBLG9DQUFPLEdBQWQsVUFBZSxPQUFlLEVBQUUsR0FBUTtRQUNwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNuQixFQUFFLE9BQU8sU0FBQSxFQUFFLENBQ2Q7YUFDSSxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2xDLEdBQUcsQ0FBQyxVQUFDLElBQUk7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLHdEQUF3RDtJQUN4RCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLEVBQUU7SUFDRiwrRUFBK0U7SUFDL0UsNkJBQTZCO0lBQzdCLEVBQUU7SUFDRixTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwrRUFBK0U7SUFDL0UsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLElBQUk7SUFDUSx5Q0FBWSxHQUFwQixVQUFxQixLQUFlO1FBQ2hDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFksa0JBQWtCO0lBRDlCLGlCQUFVLEVBQUU7cUNBR2lCLFdBQUk7R0FGckIsa0JBQWtCLENBeUQ5QjtBQXpEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgYmFybmV5IG9uIDIwMTcvNi8xMC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi9ncm9jZXJ5L2dyb2NlcnlcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBwdWJsaWMgbG9hZCgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIENvbmZpZy50b2tlbik7IC8vIOaOiOadg+S7pOeJjFxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IGhlYWRlcnMgfTtcbiAgICAgICAgY29uc3QgdXJsID0gQ29uZmlnLmFwaVVybCArIFwiR3JvY2VyaWVzXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAubWFwKChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvY2VyeUxpc3Q6IEdyb2NlcnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGpzb24uUmVzdWx0LmZvckVhY2goKGdyb2NlcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvY2VyeUxpc3QucHVzaChuZXcgR3JvY2VyeShncm9jZXJ5LklkLCBncm9jZXJ5Lk5hbWUpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvY2VyeUxpc3Q7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG4gICAgLy8g6K+35rGC5L6L5a2QXG4gICAgcHVibGljIHJlcXVlc3QobGFzdFVybDogc3RyaW5nLCBwYXI6IGFueSkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQ29uZmlnLnRva2VuKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBsYXN0VXJsLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocGFyKSxcbiAgICAgICAgICAgIHsgaGVhZGVycyB9LFxuICAgICAgICApXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLm1hcCgoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuLy8gICAgIHRoaXMucmVxdWVzdChcIkdyb2Nlcmllc1wiLCB7IE5hbWU6IHRoaXMuZ3JvY2VyeSB9KVxuLy8gLnN1YnNjcmliZShcbi8vICAgICBkYXRhID0+IHtcbi8vXG4vLyAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChuZXcgR3JvY2VyeShkYXRhLlJlc3VsdC5JZCwgdGhpcy5ncm9jZXJ5KSk7XG4vLyAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XG4vL1xuLy8gICAgIH0sXG4vLyAgICAgKCkgPT4ge1xuLy8gICAgICAgICBhbGVydCh7XG4vLyAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIixcbi8vICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuLy8gICAgIH1cbi8vIClcbiAgICBwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn1cbiJdfQ==