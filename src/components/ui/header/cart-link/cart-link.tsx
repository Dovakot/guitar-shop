import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import cn from 'classnames';

import './cart-link.css';

import {AppRoute, MAX_COUNT_GUITAR_IN_CART} from '../../../../const';
import {getOrderCount} from '../../../../store/reducers/cart-data/selectors';

function CartLink(): JSX.Element {
  const totalCount = useSelector(getOrderCount);

  const countClass = cn('header__cart-count', {
    'header__cart-count--limit': totalCount > MAX_COUNT_GUITAR_IN_CART,
  });

  return (
    <NavLink
      className="header__cart-link"
      aria-label="Корзина"
      activeClassName="link--current"
      to={AppRoute.Cart}
      exact
    >
      <svg className="header__cart-icon" width={14} height={14} aria-hidden="true">
        <use xlinkHref="#icon-basket" />
      </svg>
      <span className="visually-hidden">Перейти в корзину</span>
      {totalCount ? <span className={countClass}>{totalCount}</span> : ''}
    </NavLink>
  );
}

export default CartLink;
