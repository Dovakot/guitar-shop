import React from 'react';
import {NavLink} from 'react-router-dom';

import useGeneratePath from '../../../../../hooks/use-generate-path/use-generate-path';

type NavItemProps = {
  name: string,
  currentLink: string,
};

function NavItem({name, currentLink}: NavItemProps): JSX.Element {
  const generatedPath = useGeneratePath(currentLink);

  return (
    <li>
      <NavLink
        className="link main-nav__link"
        activeClassName="link--current"
        to={generatedPath}
        exact
      >
        {name}
      </NavLink>
    </li>
  );
}

export default NavItem;
