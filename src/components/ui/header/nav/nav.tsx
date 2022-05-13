import React from 'react';

import {AppRoute, NavLinkTitle} from '../../../../const';

import NavItem from './nav-item/nav-item';

type NavItemProps = {
  id: string,
  name: string,
  route: string,
};

const navList = [
  {
    id: 'catalog',
    name: NavLinkTitle.Catalog,
    route: AppRoute.Catalog,
  },
  {
    id: 'stores',
    name: NavLinkTitle.Stores,
    route: AppRoute.Stores,
  },
  {
    id: 'about',
    name: NavLinkTitle.About,
    route: AppRoute.About,
  },
];

const getNavItem = ({id, name, route}: NavItemProps) => (
  <NavItem
    key={id}
    id={id}
    name={name}
    currentLink={route}
  />
);

function Nav(): JSX.Element {
  return (
    <nav
      className="main-nav"
      data-testid="header-nav"
    >
      <ul className="main-nav__list">
        {navList.map(getNavItem)}
      </ul>
    </nav>
  );
}

export default Nav;
