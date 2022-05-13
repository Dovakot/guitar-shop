import React from 'react';
import {Link} from 'react-router-dom';

type NavItemProps = {
  id: string,
  name: string,
  currentLink: string,
};

function NavItem({id, name, currentLink}: NavItemProps): JSX.Element {
  const testId = `footer-link-${id}`;

  return (
    <li
      className="footer__nav-list-item"
      data-testid="footer-nav-item"
    >
      <Link
        className="link"
        to={currentLink}
        data-testid={testId}
      >
        {name}
      </Link>
    </li>
  );
}

export default NavItem;
