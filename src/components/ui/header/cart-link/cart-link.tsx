import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {AppRoute} from '../../../../const';
import {getOrderCount} from '../../../../store/reducers/cart-data/selectors';

function CartLink(): JSX.Element {
  const totalCount = useSelector(getOrderCount);

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
      {totalCount ? <span className="header__cart-count">{totalCount}</span> : ''}
    </NavLink>
  );
}

export default CartLink;
