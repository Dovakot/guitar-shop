import React from 'react';

import {AppRoute, NavLinkTitle} from '../../../../const';

import NavItem from './nav-item/nav-item';

type NavItemProps = {
  name: string,
  route: string,
};

const navList = [
  {
    name: NavLinkTitle.Catalog,
    route: AppRoute.Catalog,
  },
  {
    name: NavLinkTitle.Stores,
    route: AppRoute.Stores,
  },
  {
    name: NavLinkTitle.About,
    route: AppRoute.About,
  },
];

const getNavItem = ({name, route}: NavItemProps) => (
  <NavItem
    key={name}
    name={name}
    currentLink={route}
  />
);

function Nav(): JSX.Element {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {navList.map(getNavItem)}
      </ul>
    </nav>
  );
}

export default Nav;
