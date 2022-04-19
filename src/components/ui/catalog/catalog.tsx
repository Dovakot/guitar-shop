import React from 'react';

import Filters from './filters/filters';
import Sorting from './sorting/sorting';
import GuitarList from './guitar-list/guitar-list';
import Pagination from './pagination/pagination';

function Catalog(): JSX.Element {
  return (
    <div className="catalog">
      <Filters />
      <Sorting />
      <GuitarList />
      <Pagination />
    </div>
  );
}

export default Catalog;
