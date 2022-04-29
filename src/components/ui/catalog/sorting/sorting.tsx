import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './sorting.css';

import {SortType} from '../../../../const';
import {debouncedSortGuitars} from '../../../../utils/utils';
import {setSortTypes} from '../../../../store/actions/actions';
import {fetchGuitars} from '../../../../store/api-actions/api-actions';
import {getSortType, getSortOrder} from '../../../../store/reducers/guitar-data/selectors';

import SortTypeButton from './sort-type-button/sort-type-button';
import SortOrderButton from './sort-order-button/sort-order-button';

function Sorting(): JSX.Element {
  const dispatch = useDispatch();
  const [sortType] = useSelector(getSortType);
  const [sortOrder] = useSelector(getSortOrder);

  const sortGuitars = (type: string, order: string) => {
    const currentValue = {sortType: [type], sortOrder: [order]};

    dispatch(setSortTypes(currentValue));
    debouncedSortGuitars(dispatch, fetchGuitars, currentValue);
  };

  const handleSortTypeButtonClick = (type: string) => sortGuitars(type, sortOrder || SortType.Up);
  const handleSortOrderButtonClick = (order: string) => sortGuitars(sortType || SortType.Price, order);

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>

      <div className="catalog-sort__type">
        <SortTypeButton
          currentType={SortType.Price}
          activeType={sortType}
          title="по цене"
          handleSortTypeButtonClick={handleSortTypeButtonClick}
        />
        <SortTypeButton
          currentType={SortType.Rating}
          activeType={sortType}
          title="по популярности"
          handleSortTypeButtonClick={handleSortTypeButtonClick}
        />
      </div>

      <div className="catalog-sort__order">
        <SortOrderButton
          currentOrder={SortType.Up}
          activeOrder={sortOrder}
          title="По возрастанию"
          handleSortOrderButtonClick={handleSortOrderButtonClick}
        />
        <SortOrderButton
          currentOrder={SortType.Down}
          activeOrder={sortOrder}
          title="По убыванию"
          handleSortOrderButtonClick={handleSortOrderButtonClick}
        />
      </div>
    </div>
  );
}

export default Sorting;
