import React from 'react';
import {useLocation} from 'react-router-dom';

import {AppRoute, NavLinkTitle} from '../../../../const';

import NavItem from './nav-item/nav-item';

type NavProps = {
  id: string,
  name: string,
  route: string,
};

const navList = [
  {
    id: 'stores',
    name: NavLinkTitle.Stores,
    route: AppRoute.Stores,
  },
  {
    id: 'blog',
    name: NavLinkTitle.Blog,
    route: AppRoute.Blog,
  },
  {
    id: 'fag',
    name: NavLinkTitle.Faq,
    route: AppRoute.Faq,
  },
  {
    id: 'return',
    name: NavLinkTitle.Return,
    route: AppRoute.Return,
  },
  {
    id: 'rehab',
    name: NavLinkTitle.Rehab,
    route: AppRoute.Rehab,
  },
];

function Nav(): JSX.Element {
  const {pathname} = useLocation();

  const getNavItem = ({id, name, route}: NavProps) => pathname !== route
    ? (
      <NavItem
        key={id}
        id={id}
        name={name}
        currentLink={route}
      />
    ) : '';

  return (
    <ul
      className="footer__nav-list"
      data-testid="footer-nav"
    >
      {navList.map(getNavItem)}
    </ul>
  );
}

export default Nav;
