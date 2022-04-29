import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import cn from 'classnames';

type readcrumbsItemProps = {
  name: string,
  link: string,
};

function BreadcrumbsItem({name, link}: readcrumbsItemProps): JSX.Element {
  const {pathname} = useLocation();
  const linkClass = cn('link', {
    'link--current': pathname === link,
  });

  return (
    <li className="breadcrumbs__item">
      <Link className={linkClass} to={link}>
        {name}
      </Link>
    </li>
  );
}

export default BreadcrumbsItem;
