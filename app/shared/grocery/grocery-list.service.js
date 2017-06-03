"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var GroceryListService = (function () {
    function GroceryListService(http) {
        this.http = http;
    }
    GroceryListService.prototype.add = function (name) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token); // 授权令牌
        headers.append("Content-Type", "application/json");
        var options = { headers: headers };
        var url = config_1.Config.apiUrl + "Groceries";
        var params = {
            Name: name,
        };
        var body = JSON.stringify(params);
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .map(function (json) {
            return new grocery_1.Grocery(json.Result.Id, name);
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.load = function () {
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
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroceryListService);
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixvQ0FBbUM7QUFDbkMscUNBQW9DO0FBR3BDLElBQWEsa0JBQWtCO0lBRTNCLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsZ0NBQUcsR0FBSCxVQUFJLElBQVk7UUFDWixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQ2xFLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBTSxPQUFPLEdBQUcsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO1FBQzVCLElBQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQ3hDLElBQU0sTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO1FBQ0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsTUFBTSxDQUFDLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBSSxHQUFKO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTztRQUVsRSxJQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNyQyxJQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzthQUNqQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxJQUFJLFdBQVcsR0FBa0IsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDMUIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8seUNBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUdpQixXQUFJO0dBRnJCLGtCQUFrQixDQTRDOUI7QUE1Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4vZ3JvY2VyeVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvY2VyeUxpc3RTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIGFkZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pOyAvLyDmjojmnYPku6TniYxcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0geyBoZWFkZXJzIH07XG4gICAgICAgIGNvbnN0IHVybCA9IENvbmZpZy5hcGlVcmwgKyBcIkdyb2Nlcmllc1wiO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBOYW1lOiBuYW1lLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucylcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLm1hcChqc29uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvY2VyeShqc29uLlJlc3VsdC5JZCwgbmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pOyAvLyDmjojmnYPku6TniYxcblxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBoZWFkZXJzOiBoZWFkZXJzIH07XG4gICAgICAgIGNvbnN0IHVybCA9IENvbmZpZy5hcGlVcmwgKyBcIkdyb2Nlcmllc1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpXG4gICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAubWFwKGpzb24gPT4ge1xuICAgICAgICAgICAgbGV0IGdyb2NlcnlMaXN0OkFycmF5PEdyb2Nlcnk+ID0gW107XG4gICAgICAgICAgICBqc29uLlJlc3VsdC5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICAgICAgICAgIGdyb2NlcnlMaXN0LnB1c2gobmV3IEdyb2NlcnkoZ3JvY2VyeS5JZCwgZ3JvY2VyeS5OYW1lKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59XG4iXX0=