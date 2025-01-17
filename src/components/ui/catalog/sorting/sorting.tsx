import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './sorting.css';

import {SortType} from '../../../../const';
import {debouncedFetchGuitars} from '../../../../utils/utils';
import {getSortParams} from '../../../../store/reducers/query-string-data/selectors';
import {setSortParams} from '../../../../store/reducers/query-string-data/query-string-data';
import {fetchGuitars} from '../../../../store/api-actions/api-actions';

import SortTypeButton from './sort-type-button/sort-type-button';
import SortOrderButton from './sort-order-button/sort-order-button';

function Sorting(): JSX.Element {
  const dispatch = useDispatch();
  const {sortType: [sortType], sortOrder: [sortOrder]} = useSelector(getSortParams);

  const sortGuitars = (type: string, order: string) => {
    const currentValue = {sortType: [type], sortOrder: [order]};

    dispatch(setSortParams(currentValue));
    debouncedFetchGuitars(dispatch, fetchGuitars, currentValue);
  };

  const handleSortTypeButtonClick = (type: string) => sortGuitars(type, sortOrder || SortType.Up);
  const handleSortOrderButtonClick = (order: string) => sortGuitars(sortType || SortType.Price, order);

  return (
    <div
      className="catalog-sort"
      data-testid="catalog-sort"
    >
      <h2 className="catalog-sort__title">Сортировать:</h2>

      <div className="catalog-sort__type">
        <SortTypeButton
          currentType={SortType.Price}
          activeType={sortType}
          title="по цене"
          onSortTypeButtonClick={handleSortTypeButtonClick}
        />
        <SortTypeButton
          currentType={SortType.Rating}
          activeType={sortType}
          title="по популярности"
          onSortTypeButtonClick={handleSortTypeButtonClick}
        />
      </div>

      <div className="catalog-sort__order">
        <SortOrderButton
          currentOrder={SortType.Up}
          activeOrder={sortOrder}
          title="По возрастанию"
          onSortOrderButtonClick={handleSortOrderButtonClick}
        />
        <SortOrderButton
          currentOrder={SortType.Down}
          activeOrder={sortOrder}
          title="По убыванию"
          onSortOrderButtonClick={handleSortOrderButtonClick}
        />
      </div>
    </div>
  );
}

export default Sorting;
