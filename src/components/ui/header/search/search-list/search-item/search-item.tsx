import React from 'react';
import {Link, generatePath} from 'react-router-dom';

import {AppRoute} from '../../../../../../const';

type SearchItemProps = {
  id: number,
  name: string,
};

function SearchItem({id, name}: SearchItemProps): JSX.Element {
  const pathToGuitar = generatePath(AppRoute.Guitar, {id});

  return (
    <li
      className="form-search__select-item"
      data-testid="search-item"
    >
      <Link to={pathToGuitar}>{name}</Link>
    </li>
  );
}

export default SearchItem;
