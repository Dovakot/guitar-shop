import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import cn from 'classnames';

import {NavItem} from '../../../../types/types';
import useGeneratePath from '../../../../hooks/use-generate-path/use-generate-path';
import {isActive} from '../../../../utils/utils';

type BreadcrumbsItemProps = NavItem;

function BreadcrumbsItem({id, name, route}: BreadcrumbsItemProps): JSX.Element {
  const {pathname} = useLocation();
  const generatedPath = useGeneratePath(route);

  const testId = `breadcrumbs-${id}`;
  const linkClass = cn('link', {
    'link--current': isActive(pathname, generatedPath),
  });


  return (
    <li
      className="breadcrumbs__item"
      data-testid="breadcrumbs-item"
    >
      <Link
        className={linkClass}
        to={generatedPath}
        data-testid={testId}
      >
        {name}
      </Link>
    </li>
  );
}

export default BreadcrumbsItem;
