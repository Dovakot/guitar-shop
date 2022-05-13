import React, {MouseEvent} from 'react';
import {Link, generatePath} from 'react-router-dom';
import cn from 'classnames';

import {AppRoute} from '../../../../../const';
import {isActive} from '../../../../../utils/utils';

type PaginationItemProps = {
  id: number | string,
  page: number,
  name: number | string,
  pathname?: string,
  onLinkClick: (a: number, b: string) => Promise<void>,
};

function PaginationItem({id, name, page, pathname = '', onLinkClick}: PaginationItemProps): JSX.Element {
  const link = generatePath(AppRoute.Catalog, {page});
  const testId = `page-${id}`;

  const itemClass = cn('pagination__page', {
    'pagination__page--active': isActive(pathname, link),
    'pagination__page--next': !pathname,
  });

  const handleLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    onLinkClick(page, link);
  };

  return (
    <li
      className={itemClass}
      data-testid={testId}
    >
      <Link
        className="link pagination__page-link"
        to={link}
        onClick={handleLinkClick}
      >
        {name}
      </Link>
    </li>
  );
}

export default PaginationItem;
