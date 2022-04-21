import React from 'react';
import {Link} from 'react-router-dom';

type NavItemProps = {
  name: string,
  currentLink: string,
};

function NavItem({name, currentLink}: NavItemProps): JSX.Element {
  return (
    <li className="footer__nav-list-item">
      <Link
        className="link"
        to={currentLink}
      >
        {name}
      </Link>
    </li>
  );
}

export default NavItem;
