/**
 * Created by musiwen on 2017/6/17.
 */
import {GoodsItem} from "./goods-item";
export class CouponGetResponse {
  constructor(public status: number, public goodsData: GoodsItem[]) {
  }
}
