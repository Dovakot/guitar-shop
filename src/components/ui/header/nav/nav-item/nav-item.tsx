import React from 'react';
import {NavLink} from 'react-router-dom';

type NavItemProps = {
  name: string;
  currentLink: string;
};

function NavItem({name, currentLink}: NavItemProps): JSX.Element {
  return (
    <li>
      <NavLink
        className="link main-nav__link"
        activeClassName="link--current"
        to={currentLink}
        exact
      >
        {name}
      </NavLink>
    </li>
  );
}

export default NavItem;
