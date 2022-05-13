import React from 'react';

import {AppRoute, NavLinkTitle} from '../../../const';
import {NavItem} from '../../../types/types';
import {addBreadcrumbsItem} from '../../../utils/utils';

import BreadcrumbsItem from './breadcrumbs-item/breadcrumbs-item';

type BreadcrumbsProps = {
  newItem?: NavItem,
};

const navList = [
  {
    id: 'root',
    name: NavLinkTitle.Root,
    route: AppRoute.Root,
  },
  {
    id: 'catalog',
    name: NavLinkTitle.Catalog,
    route: AppRoute.Catalog,
  },
];

const getBreadcrumbsItem = ({id, name, route}: NavItem) => (
  <BreadcrumbsItem
    key={id}
    id={id}
    name={name}
    route={route}
  />
);

function Breadcrumbs({newItem}: BreadcrumbsProps): JSX.Element {
  const breadcrumbs = newItem ? addBreadcrumbsItem(navList, newItem) : navList;

  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      {breadcrumbs.map(getBreadcrumbsItem)}
    </ul>
  );
}

export default Breadcrumbs;
