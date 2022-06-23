import React, {ChangeEvent, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';

import {isInvalidCoupon, showInvalidToast} from '../../../../utils/cart-utils';
import {sendOrderCoupon} from '../../../../store/api-actions/api-actions';
import {getCouponName} from '../../../../store/reducers/cart-data/selectors';

import Spinner from '../../spinner/spinner';

enum CouponState {
  Default = 'default',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

const couponMessage = {
  [CouponState.Default]: '',
  [CouponState.Loading]: 'Проверяем...',
  [CouponState.Success]: 'Промокод принят',
  [CouponState.Error]: 'Неверный промокод',
};

function CouponForm(): JSX.Element {
  const dispatch = useDispatch();
  const [couponState, setCouponState] = useState(CouponState.Default);
  const couponName = useSelector(getCouponName);

  const couponClass = cn('form-input__message', `form-input__message--${couponState}`);
  const isLoading = couponState === CouponState.Loading;

  const handleFormSubmit = async (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const {coupon} = evt.target;
    const value = coupon.value.trim();

    if (!value || couponName === value) {
      return;
    }

    if (isInvalidCoupon(value)) {
      return showInvalidToast();
    }

    setCouponState(CouponState.Loading);

    try {
      await dispatch(sendOrderCoupon(value));
      setCouponState(CouponState.Success);
    } catch {
      setCouponState(CouponState.Error);
    }
  };

  useEffect(() => () => setCouponState(CouponState.Default), []);

  return (
    <form
      className="coupon__form"
      id="coupon-form"
      method="post"
      onSubmit={handleFormSubmit}
      data-testid="coupon-form"
    >
      {isLoading && <Spinner />}

      <div className="form-input coupon__input">
        <label className="visually-hidden">Промокод</label>
        <input
          type="text"
          placeholder="Введите промокод"
          id="coupon"
          name="coupon"
          defaultValue={couponName}
        />
        <p className={couponClass}>
          {couponMessage[couponState]}
        </p>
      </div>
      <button className="button button--big coupon__button">Применить</button>
    </form>
  );
}

export default CouponForm;
