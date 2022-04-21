import React from 'react';

import './search-list.css';

import SearchItem from './search-item/search-item';

const getSearchItem = ({id, name}: any) => (
  <SearchItem
    key={name}
    id={id}
    name={name} />
);

function SearchList({guitars}: any): JSX.Element {
  return (
    <ul className="form-search__select-list">
      {guitars.map(getSearchItem)}
    </ul>
  );
}

export default SearchList;
