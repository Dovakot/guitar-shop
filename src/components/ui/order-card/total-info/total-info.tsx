import React from 'react';
import {useSelector} from 'react-redux';

import {formatPrice} from '../../../../utils/utils';
import {getTotalInfo} from '../../../../store/reducers/cart-data/selectors';

function TotaInfo(): JSX.Element {
  const totalAmount = formatPrice(useSelector(getTotalInfo));

  return (
    <div className="cart__total-info">
      <p className="cart__total-item">
        <span className="cart__total-value-name">Всего:</span>
        <span className="cart__total-value">
          {totalAmount} ₽
        </span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">Скидка:</span>
        <span className="cart__total-value cart__total-value--bonus">
          0 ₽
        </span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">
          К оплате:
        </span>
        <span className="cart__total-value cart__total-value--payment">
          {totalAmount} ₽
        </span>
      </p>
      <button className="button button--red button--big cart__order-button">Оформить заказ</button>
    </div>
  );
}

export default TotaInfo;
