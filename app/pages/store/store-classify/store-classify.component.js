"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_home_service_1 = require("../../../shared/store/store-home.service");
var store_1 = require("../../../shared/store/store"); // 数据模型
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("@angular/router");
var StoreClassifyComponent = (function () {
    function StoreClassifyComponent(storeHomeService, routerExtensions, router) {
        this.storeHomeService = storeHomeService;
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.dataAry = []; // 数据源
        this.searchPhrase = "";
    }
    // OnInit 必须实现
    StoreClassifyComponent.prototype.ngOnInit = function () {
        this.getStoreClassifyList();
    };
    StoreClassifyComponent.prototype.getStoreClassifyList = function () {
        var _this = this;
        this.storeHomeService.getStoreClassifyList({ store_id: "5" }).subscribe(function (json) {
            var ary = [];
            json.data.forEach(function (store) {
                ary.push(new store_1.StoreClassify(store.name, store.id));
                ary.push({});
                if (!!store.children) {
                    if (store.children.length % 2 !== 0) {
                        store.children.push({});
                    }
                    store.children.forEach(function (child) {
                        ary.push(new store_1.StoreClassify(child.name, child.id, true));
                    });
                }
            });
            _this.dataAry = ary;
        });
    };
    StoreClassifyComponent.prototype.back = function () {
        this.routerExtensions.back();
    };
    StoreClassifyComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        this.router.navigate(["/home//goodsSearch"], {
            queryParams: {
                gbId: selectedItems[0].id.toString(),
                word: selectedItems[0].name,
            },
        });
    };
    StoreClassifyComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        if (searchBar.text === "") {
            alert("搜索内容不能为空");
        }
        else {
            this.router.navigate(["/home//goodsSearch"], {
                queryParams: {
                    gbId: "5",
                    word: searchBar.text,
                },
            });
        }
    };
    StoreClassifyComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        this.searchPhrase = searchBar.text;
    };
    return StoreClassifyComponent;
}());
StoreClassifyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "store-classify",
        templateUrl: "./store-classify.component.html",
        styleUrls: ["./store-classify-common.css"],
        providers: [store_home_service_1.StoreHomeService],
    }),
    __metadata("design:paramtypes", [store_home_service_1.StoreHomeService, nativescript_angular_1.RouterExtensions, router_1.Router])
], StoreClassifyComponent);
exports.StoreClassifyComponent = StoreClassifyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtY2xhc3NpZnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmUtY2xhc3NpZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlGO0FBQ2pGLCtFQUE0RTtBQUM1RSxxREFBNEQsQ0FBQyxPQUFPO0FBQ3BFLDZEQUFzRDtBQUV0RCwwQ0FBdUM7QUFVdkMsSUFBYSxzQkFBc0I7SUFHL0IsZ0NBQTJCLGdCQUFrQyxFQUFVLGdCQUFrQyxFQUFVLE1BQWM7UUFBdEcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnpILFlBQU8sR0FBb0IsRUFBRSxDQUFDLENBQUMsTUFBTTtRQUNyQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUMwRyxDQUFDO0lBQ3JJLGNBQWM7SUFDUCx5Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNPLHFEQUFvQixHQUE1QjtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQ3pELFVBQUMsSUFBSTtZQUNELElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUNiLFVBQUMsS0FBSztnQkFDTixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNiLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1QixDQUFDO29CQUNBLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUNsQixVQUFDLEtBQUs7d0JBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzNELENBQUMsQ0FDSixDQUFBO2dCQUNOLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLENBQUMsQ0FDSixDQUFDO0lBQ2QsQ0FBQztJQUNPLHFDQUFJLEdBQVo7UUFDQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNNLCtDQUFjLEdBQXJCLFVBQXNCLElBQXVCO1FBQ3ZDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFxQixDQUFDO1FBQzFDLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBMEIsQ0FBQztRQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDekMsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDcEMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQzlCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLHlDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO2dCQUM3QyxXQUFXLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO2lCQUN2QjthQUNBLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBQ00sOENBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDO0FBN0RZLHNCQUFzQjtJQVBsQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLGlDQUFpQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztRQUMxQyxTQUFTLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztLQUNoQyxDQUFDO3FDQUkrQyxxQ0FBZ0IsRUFBNEIsdUNBQWdCLEVBQWtCLGVBQU07R0FIeEgsc0JBQXNCLENBNkRsQztBQTdEWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmVIb21lU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc3RvcmUvc3RvcmUtaG9tZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdG9yZUNsYXNzaWZ5IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zdG9yZS9zdG9yZVwiOyAvLyDmlbDmja7mqKHlnotcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXdcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLCAvLyDliqDov5nkuKrvvIzku6XkuIvot6/lvoTkuLrnm7jlr7not6/lvoRcbiAgICBzZWxlY3RvcjogXCJzdG9yZS1jbGFzc2lmeVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3RvcmUtY2xhc3NpZnkuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc3RvcmUtY2xhc3NpZnktY29tbW9uLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtTdG9yZUhvbWVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVDbGFzc2lmeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBkYXRhQXJ5OiBTdG9yZUNsYXNzaWZ5W10gPSBbXTsgLy8g5pWw5o2u5rqQXG4gICAgcHJpdmF0ZSBzZWFyY2hQaHJhc2UgPSBcIlwiO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlSG9tZVNlcnZpY2U6IFN0b3JlSG9tZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cbiAgICAvLyBPbkluaXQg5b+F6aG75a6e546wXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFN0b3JlQ2xhc3NpZnlMaXN0KCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U3RvcmVDbGFzc2lmeUxpc3QoKSB7XG4gICAgICAgIHRoaXMuc3RvcmVIb21lU2VydmljZS5nZXRTdG9yZUNsYXNzaWZ5TGlzdCh7c3RvcmVfaWQ6IFwiNVwifSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJ5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uLmRhdGEuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RvcmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnkucHVzaChuZXcgU3RvcmVDbGFzc2lmeShzdG9yZS5uYW1lLCBzdG9yZS5pZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyeS5wdXNoKHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFzdG9yZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmUuY2hpbGRyZW4ubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5jaGlsZHJlbi5wdXNoKHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmNoaWxkcmVuLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnkucHVzaChuZXcgU3RvcmVDbGFzc2lmeShjaGlsZC5uYW1lLCBjaGlsZC5pZCx0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhQXJ5ID0gYXJ5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBiYWNrKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cbiAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtcyA9IGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxTdG9yZUNsYXNzaWZ5PjtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWUvL2dvb2RzU2VhcmNoXCJdLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIGdiSWQ6IHNlbGVjdGVkSXRlbXNbMF0uaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB3b3JkOiBzZWxlY3RlZEl0ZW1zWzBdLm5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGlmIChzZWFyY2hCYXIudGV4dCA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCLmkJzntKLlhoXlrrnkuI3og73kuLrnqbpcIik7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lLy9nb29kc1NlYXJjaFwiXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBnYklkOiBcIjVcIixcbiAgICAgICAgICAgICAgICB3b3JkOiBzZWFyY2hCYXIudGV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaEJhci50ZXh0O1xuICAgIH1cbn0iXX0=