import React, {ChangeEvent} from 'react';
import {useDispatch} from 'react-redux';

import {CartActionType, GUITAR_TYPE_RU, MAX_COUNT_GUITAR_IN_CART} from '../../../../../const';
import {formatPrice} from '../../../../../utils/utils';
import {checkQuantityField, showLimitToast} from '../../../../../utils/cart-utils';
import {Guitar} from '../../../../../types/guitar-types';
import {
  changeItemInOrder,
  setInfoModalPreorder,
  setStateModalPreorder,
  setUpdateTypeDelete,
  applyDiscount
} from '../../../../../store/reducers/cart-data/cart-data';

type OrderItemProps = Guitar & {
  orderAmount: number,
  orderCount: number,
  fieldName: string,
};

function OrderItem(props: OrderItemProps): JSX.Element {
  const dispatch = useDispatch();
  const {
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
  } = props;

  const formattedPrice = formatPrice(price);
  const formattedAmount = formatPrice(orderAmount);
  const typeRu = GUITAR_TYPE_RU[type];

  const showModalDelete = () => {
    dispatch(setInfoModalPreorder(props));
    dispatch(setStateModalPreorder(false));
    dispatch(setUpdateTypeDelete(true));
  };

  const changeOrderCount = async (actionType: string | number) => {
    await dispatch(changeItemInOrder({id, type: actionType}));
    dispatch(applyDiscount());
  };

  const handleIncreaseButtonClick = () => orderCount === MAX_COUNT_GUITAR_IN_CART
    ? showLimitToast(name)
    : changeOrderCount(CartActionType.Increase);

  const handleDecreaseButtonClick = () => orderCount === 1 ? showModalDelete()
    : changeOrderCount(CartActionType.Decrease);

  const handleQuantityFieldChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const value = checkQuantityField(target, orderCount);

    changeOrderCount(value);
  };

  const handleDeleteButtonClick = () => showModalDelete();

  return (
    <div className="cart-item">
      <button
        className="cart-item__close-button button-cross"
        type="button"
        aria-label="Удалить"
        onClick={handleDeleteButtonClick}
      >
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
        <button
          className="quantity__button"
          aria-label="Уменьшить количество"
          onClick={handleDecreaseButtonClick}
        >
          <svg width={8} height={8} aria-hidden="true">
            <use xlinkHref="#icon-minus" />
          </svg>
        </button>
        <input
          className="quantity__input"
          type="number"
          name={fieldName}
          value={orderCount}
          min={1}
          max={MAX_COUNT_GUITAR_IN_CART}
          required
          onChange={handleQuantityFieldChange}
        />
        <button
          className="quantity__button"
          aria-label="Увеличить количество"
          onClick={handleIncreaseButtonClick}
        >
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
