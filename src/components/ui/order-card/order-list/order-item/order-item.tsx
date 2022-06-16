import React from 'react';

import {GUITAR_TYPE_RU} from '../../../../../const';
import {formatPrice} from '../../../../../utils/utils';
import {Guitar} from '../../../../../types/guitar-types';

type OrderItemProps = Guitar & {
  orderAmount: number,
  orderCount: number,
  fieldName: string,
};

function OrderItem({
  id,
  name,
  vendorCode,
  type,
  previewImg,
  stringCount,
  price,
  orderAmount,
  orderCount,
  fieldName,
}: OrderItemProps): JSX.Element {
  const formattedPrice = formatPrice(price);
  const formattedAmount = formatPrice(orderAmount);
  const typeRu = GUITAR_TYPE_RU[type];

  return (
    <div className="cart-item">
      <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить">
        <span className="button-cross__icon" />
        <span className="cart-item__close-button-interactive-area" />
      </button>
      <div className="cart-item__image">
        <img
          src={previewImg}
          alt={name}
          width={55}
          height={130}
        />
      </div>

      <div className="product-info cart-item__info">
        <p className="product-info__title">
          {name}
        </p>
        <p className="product-info__info">
          Артикул: {vendorCode}
        </p>
        <p className="product-info__info">
          {typeRu}, {stringCount} струнная
        </p>
      </div>
      <div className="cart-item__price">
        {formattedPrice} ₽
      </div>
      <div className="quantity cart-item__quantity">
        <button className="quantity__button" aria-label="Уменьшить количество">
          <svg width={8} height={8} aria-hidden="true">
            <use xlinkHref="#icon-minus" />
          </svg>
        </button>
        <input
          className="quantity__input"
          type="number"
          name={fieldName}
          defaultValue={orderCount}
          min={1}
          max={99}
        />
        <button className="quantity__button" aria-label="Увеличить количество">
          <svg width={8} height={8} aria-hidden="true">
            <use xlinkHref="#icon-plus" />
          </svg>
        </button>
      </div>
      <div className="cart-item__price-total">
        {formattedAmount} ₽
      </div>
    </div>
  );
}

export default OrderItem;
