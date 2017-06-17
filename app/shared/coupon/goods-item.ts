/**
 * Created by musiwen on 2017/6/17.
 */
export class GoodsItem {
  constructor(public goods_id: number,
              public goods_name: string,
              public goods_pic: string,
              public goods_price: number,
              public selected?: boolean) {
  }
}