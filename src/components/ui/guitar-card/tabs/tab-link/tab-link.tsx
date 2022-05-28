import React, {MouseEvent} from 'react';
import {Link, generatePath} from 'react-router-dom';
import cn from 'classnames';

import './tab-link.css';

import {AppRoute} from '../../../../../const';
import {isActive} from '../../../../../utils/utils';

type TabLinkProps = {
  id: number,
  label: string,
  activeTab: string,
  onActiveTabChange: (a: string) => void;
};

function TabLink({id, label, activeTab, onActiveTabChange}: TabLinkProps): JSX.Element {
  const isActiveLink = isActive(label, activeTab);
  const tabLink = generatePath(AppRoute.Guitar, {id});

  const linkClass = cn('button button--medium tabs__button',
    {
      'button--black-border': !isActiveLink,
      'link--current': isActiveLink,
    },
  );

  const onLinkClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    onActiveTabChange(label);
  };

  return (
    <Link
      className={linkClass}
      to={tabLink}
      onClick={onLinkClick}
    >
      {label}
    </Link>
  );
}

export default TabLink;
