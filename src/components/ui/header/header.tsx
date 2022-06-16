import React from 'react';

import Logo from '../logo/logo';
import Nav from './nav/nav';
import Search from './search/search';
import CartLink from './cart-link/cart-link';

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
        <CartLink />
      </div>
    </header>
  );
}

export default Header;
