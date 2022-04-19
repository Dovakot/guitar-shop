import React from 'react';
import {useLocation} from 'react-router-dom';

import {AppRoute, NavLinkTitle} from '../../../../const';

import NavItem from './nav-item/nav-item';

type NavProps = {
  name: string;
  route: string;
};

const navList = [
  {
    name: NavLinkTitle.Stores,
    route: AppRoute.Stores,
  },
  {
    name: NavLinkTitle.Blog,
    route: AppRoute.Blog,
  },
  {
    name: NavLinkTitle.Faq,
    route: AppRoute.Faq,
  },
  {
    name: NavLinkTitle.Return,
    route: AppRoute.Return,
  },
  {
    name: NavLinkTitle.Rehab,
    route: AppRoute.Rehab,
  },
];

function Nav(): JSX.Element {
  const {pathname} = useLocation();

  const getNavItem = ({name, route}: NavProps) => pathname !== route
    ? (
      <NavItem
        key={route}
        name={name}
        currentLink={route}
      />
    ) : '';

  return (
    <ul className="footer__nav-list">
      {navList.map(getNavItem)}
    </ul>
  );
}

export default Nav;
