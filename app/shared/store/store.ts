export class StoreHome {
    constructor(public name: string, public data: StoreHomeGoods[], public date_data: string) {}
}
export class StoreHomeGoods {
    constructor(public goods_current_price: string, public goods_main_photo: string,
    public goods_name: string, public id: string, public name?: string, public date_data?: string) {}
}
export class StoreInfo {
    constructor(public fans_count: string, public favourited: string,
    public store_logo: string, public store_name: string, public new_count: string, public all_count: string) {}
}
export class StoreClassify {
    constructor(public name: string, public id: string, public section?: boolean) {}
}