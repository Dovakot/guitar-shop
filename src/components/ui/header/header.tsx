import React from 'react';
import {NavLink} from 'react-router-dom';

import {AppRoute} from '../../../const';

import Logo from '../logo/logo';
import Nav from './nav/nav';

function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Logo className="header" />
        <Nav />

        <div className="form-search">
          <form className="form-search__form">
            <button className="form-search__submit" type="submit">
              <svg className="form-search__icon" width={14} height={15} aria-hidden="true">
                <use xlinkHref="#icon-search" />
              </svg><span className="visually-hidden">Начать поиск</span>
            </button>
            <input className="form-search__input" id="search" type="text" autoComplete="off" placeholder="что вы ищите?" />
            <label className="visually-hidden" htmlFor="search">Поиск</label>
          </form>
          <ul className="form-search__select-list hidden">
            <li className="form-search__select-item" tabIndex={0}>Четстер Plus</li>
            <li className="form-search__select-item" tabIndex={0}>Четстер UX</li>
            <li className="form-search__select-item" tabIndex={0}>Четстер UX2</li>
            <li className="form-search__select-item" tabIndex={0}>Четстер UX3</li>
            <li className="form-search__select-item" tabIndex={0}>Четстер UX4</li>
            <li className="form-search__select-item" tabIndex={0}>Четстер UX5</li>
          </ul>
        </div>

        <NavLink
          className="header__cart-link"
          aria-label="Корзина"
          activeClassName="link--current"
          to={AppRoute.Cart}
          exact
        >
          <svg className="header__cart-icon" width={14} height={14} aria-hidden="true">
            <use xlinkHref="#icon-basket" />
          </svg><span className="visually-hidden">Перейти в корзину</span><span className="header__cart-count">2</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
