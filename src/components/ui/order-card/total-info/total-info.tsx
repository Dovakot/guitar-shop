import React from 'react';
import {useSelector} from 'react-redux';
import cn from 'classnames';

import {formatPrice} from '../../../../utils/utils';
import {getTotalInfo} from '../../../../store/reducers/cart-data/selectors';

function TotaInfo(): JSX.Element {
  const {totalAmount, discount, toPay} = useSelector(getTotalInfo);

  const discountClass = cn('cart__total-value', {
    'cart__total-value--bonus': discount,
  });

  const formattedTotalAmount = formatPrice(totalAmount);
  const formattedDiscount = formatPrice(discount);
  const formattedToPay = formatPrice(toPay);

  return (
    <div className="cart__total-info">
      <p className="cart__total-item">
        <span className="cart__total-value-name">Всего:</span>
        <span className="cart__total-value">
          {formattedTotalAmount} ₽
        </span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">Скидка:</span>
        <span className={discountClass}>
          {discount ? '- ' : ''}
          {formattedDiscount} ₽
        </span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">
          К оплате:
        </span>
        <span className="cart__total-value cart__total-value--payment">
          {formattedToPay} ₽
        </span>
      </p>
      <button className="button button--red button--big cart__order-button">Оформить заказ</button>
    </div>
  );
}

export default TotaInfo;
