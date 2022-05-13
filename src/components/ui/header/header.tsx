import React from 'react';
import {NavLink} from 'react-router-dom';

import {AppRoute} from '../../../const';

import Logo from '../logo/logo';
import Nav from './nav/nav';
import Search from './search/search';

function Header(): JSX.Element {
  return (
    <header
      className="header"
      id="header"
      data-testid="header"
    >
      <div className="container header__wrapper">
        <Logo className="header" />
        <Nav />
        <Search />

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
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
