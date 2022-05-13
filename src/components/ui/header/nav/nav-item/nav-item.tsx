import React from 'react';
import {NavLink} from 'react-router-dom';

import useGeneratePath from '../../../../../hooks/use-generate-path/use-generate-path';

type NavItemProps = {
  id: string,
  name: string,
  currentLink: string,
};

function NavItem({id, name, currentLink}: NavItemProps): JSX.Element {
  const generatedPath = useGeneratePath(currentLink);
  const testId = `nav-link-${id}`;

  return (
    <li data-testid="nav-link">
      <NavLink
        className="link main-nav__link"
        activeClassName="link--current"
        to={generatedPath}
        data-testid={testId}
        exact
      >
        {name}
      </NavLink>
    </li>
  );
}

export default NavItem;
