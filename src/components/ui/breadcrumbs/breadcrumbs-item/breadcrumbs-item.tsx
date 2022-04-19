import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import cn from 'classnames';

type readcrumbsItemProps = {
  name: string;
  link: string;
};

function BreadcrumbsItem({name, link}: readcrumbsItemProps): JSX.Element {
  const {pathname} = useLocation();
  const isCurrent = pathname === link;

  const linkClass = cn('link', {
    'link--current': isCurrent,
  });

  return (
    <li className="breadcrumbs__item">
      {isCurrent
        ? <span className={linkClass}>{name}</span>
        : <Link className={linkClass} to={link}>{name}</Link>}
    </li>
  );
}

export default BreadcrumbsItem;
