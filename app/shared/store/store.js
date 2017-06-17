"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreHome = (function () {
    function StoreHome(name, data, date_data) {
        this.name = name;
        this.data = data;
        this.date_data = date_data;
    }
    return StoreHome;
}());
exports.StoreHome = StoreHome;
var StoreHomeGoods = (function () {
    function StoreHomeGoods(goods_current_price, goods_main_photo, goods_name, id, name, date_data) {
        this.goods_current_price = goods_current_price;
        this.goods_main_photo = goods_main_photo;
        this.goods_name = goods_name;
        this.id = id;
        this.name = name;
        this.date_data = date_data;
    }
    return StoreHomeGoods;
}());
exports.StoreHomeGoods = StoreHomeGoods;
var StoreInfo = (function () {
    function StoreInfo(fans_count, favourited, store_logo, store_name, new_count, all_count) {
        this.fans_count = fans_count;
        this.favourited = favourited;
        this.store_logo = store_logo;
        this.store_name = store_name;
        this.new_count = new_count;
        this.all_count = all_count;
    }
    return StoreInfo;
}());
exports.StoreInfo = StoreInfo;
var StoreClassify = (function () {
    function StoreClassify(name, id, section) {
        this.name = name;
        this.id = id;
        this.section = section;
    }
    return StoreClassify;
}());
exports.StoreClassify = StoreClassify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQ0ksbUJBQW1CLElBQVksRUFBUyxJQUFzQixFQUFTLFNBQWlCO1FBQXJFLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7SUFBRyxDQUFDO0lBQ2hHLGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSw4QkFBUztBQUd0QjtJQUNJLHdCQUFtQixtQkFBMkIsRUFBUyxnQkFBd0IsRUFDeEUsVUFBa0IsRUFBUyxFQUFVLEVBQVMsSUFBYSxFQUFTLFNBQWtCO1FBRDFFLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBUTtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUN4RSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVM7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFTO0lBQUcsQ0FBQztJQUNyRyxxQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksd0NBQWM7QUFJM0I7SUFDSSxtQkFBbUIsVUFBa0IsRUFBUyxVQUFrQixFQUN6RCxVQUFrQixFQUFTLFVBQWtCLEVBQVMsU0FBaUIsRUFBUyxTQUFpQjtRQURyRixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN6RCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO0lBQUcsQ0FBQztJQUNoSCxnQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksOEJBQVM7QUFJdEI7SUFDSSx1QkFBbUIsSUFBWSxFQUFTLEVBQVUsRUFBUyxPQUFpQjtRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVU7SUFBRyxDQUFDO0lBQ3BGLG9CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdG9yZUhvbWUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBkYXRhOiBTdG9yZUhvbWVHb29kc1tdLCBwdWJsaWMgZGF0ZV9kYXRhOiBzdHJpbmcpIHt9XG59XG5leHBvcnQgY2xhc3MgU3RvcmVIb21lR29vZHMge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBnb29kc19jdXJyZW50X3ByaWNlOiBzdHJpbmcsIHB1YmxpYyBnb29kc19tYWluX3Bob3RvOiBzdHJpbmcsXG4gICAgcHVibGljIGdvb2RzX25hbWU6IHN0cmluZywgcHVibGljIGlkOiBzdHJpbmcsIHB1YmxpYyBuYW1lPzogc3RyaW5nLCBwdWJsaWMgZGF0ZV9kYXRhPzogc3RyaW5nKSB7fVxufVxuZXhwb3J0IGNsYXNzIFN0b3JlSW5mbyB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGZhbnNfY291bnQ6IHN0cmluZywgcHVibGljIGZhdm91cml0ZWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgc3RvcmVfbG9nbzogc3RyaW5nLCBwdWJsaWMgc3RvcmVfbmFtZTogc3RyaW5nLCBwdWJsaWMgbmV3X2NvdW50OiBzdHJpbmcsIHB1YmxpYyBhbGxfY291bnQ6IHN0cmluZykge31cbn1cbmV4cG9ydCBjbGFzcyBTdG9yZUNsYXNzaWZ5IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgaWQ6IHN0cmluZywgcHVibGljIHNlY3Rpb24/OiBib29sZWFuKSB7fVxufSJdfQ==