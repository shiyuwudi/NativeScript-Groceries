/**
 * Created by musiwen on 2017/6/12.
 */
export class SearchGoods {
  constructor(public evaluate: string,
              public goods_current_price: string,
              public goods_main_photo: string,
              public goods_name: string,
              public goods_salenum: string,
              public id: number,
              public status: string) {
  }
}
