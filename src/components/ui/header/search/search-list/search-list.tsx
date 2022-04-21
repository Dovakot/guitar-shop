import React from 'react';

import './search-list.css';

import {Guitars} from '../../../../../types/guitar-types';

import SearchItem from './search-item/search-item';

type SearchItemProps = {
  id: number,
  name: string,
};

type GuitarProps = {
  guitars: Guitars,
};

const getSearchItem = ({id, name}: SearchItemProps) => (
  <SearchItem
    key={name}
    id={id}
    name={name}
  />
);

function SearchList({guitars}: GuitarProps): JSX.Element {
  return (
    <ul className="form-search__select-list">
      {guitars.map(getSearchItem)}
    </ul>
  );
}

export default SearchList;
