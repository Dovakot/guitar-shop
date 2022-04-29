import React from 'react';

import {AppRoute, NavLinkTitle} from '../../../const';
import useGeneratePath from '../../../hooks/use-generate-path/use-generate-path';

import BreadcrumbsItem from './breadcrumbs-item/breadcrumbs-item';

type BreadcrumbsProps = {
  name?: string,
  currentLink?: string,
};

function Breadcrumbs({name, currentLink}: BreadcrumbsProps): JSX.Element {
  const generatedPathToCatalog = useGeneratePath(AppRoute.Catalog);

  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      <BreadcrumbsItem name={NavLinkTitle.Root} link={AppRoute.Root} />
      <BreadcrumbsItem name={NavLinkTitle.Catalog} link={generatedPathToCatalog} />
      {name && currentLink && <BreadcrumbsItem name={name} link={currentLink} />}
    </ul>
  );
}

export default Breadcrumbs;
