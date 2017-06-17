/**
 * Created by musiwen on 2017/6/16.
 */
export class Coupon {
  constructor(public capture_status: number,
              public coupon_amount: number,
              public coupon_begin_time: string,
              public coupon_end_time: string,
              public coupon_id: number,
              public coupon_name: string,
              public coupon_order_amount: number,
              public coupon_pic: string,
              public coupon_surplus_amount: number) {
  }
}
