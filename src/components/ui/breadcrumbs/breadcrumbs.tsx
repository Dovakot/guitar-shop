import React from 'react';

import {AppRoute, NavLinkTitle} from '../../../const';

import BreadcrumbsItem from './breadcrumbs-item/breadcrumbs-item';

type BreadcrumbsProps = {
  name?: string,
  currentLink?: string,
};

function Breadcrumbs({name, currentLink}: BreadcrumbsProps): JSX.Element {
  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      <BreadcrumbsItem name={NavLinkTitle.Root} link={AppRoute.Root} />
      <BreadcrumbsItem name={NavLinkTitle.Catalog} link={AppRoute.Catalog}  />
      {name && currentLink && <BreadcrumbsItem name={name} link={currentLink} />}
    </ul>
  );
}

export default Breadcrumbs;
