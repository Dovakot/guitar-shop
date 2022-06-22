import React from 'react';

import OrderList from './order-list/order-list';
import TotalInfo from './total-info/total-info';
import CouponForm from './coupon-form/coupon-form';

function OrderCard(): JSX.Element {
  return (
    <div className="cart">
      <OrderList />

      <div className="cart__footer">
        <div className="cart__coupon coupon">
          <h2 className="title title--little coupon__title">Промокод на скидку</h2>
          <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>

          <CouponForm />
        </div>

        <TotalInfo />
      </div>
    </div>
  );
}

export default OrderCard;
