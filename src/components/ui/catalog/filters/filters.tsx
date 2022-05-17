import React from 'react';
import {useDispatch} from 'react-redux';

import {PageInfo, DEFAULT_PAGE_PATH} from '../../../../const';
import {debouncedFetchGuitars} from '../../../../utils/utils';
import {fetchGuitars} from '../../../../store/api-actions/api-actions';
import {setGuitarCountParam} from '../../../../store/reducers/query-string-data/query-string-data';

import PriceRange from './price-range/price-range';
import GuitarTypeList from './guitar-type-list/guitar-type-list';
import GuitarStringList from './guitar-string-list/guitar-string-list';

function Filters(): JSX.Element {
  const dispatch = useDispatch();

  const getGuitarsForDefaultPage = async () => {
    await dispatch(setGuitarCountParam(PageInfo.DefaultPage));
    debouncedFetchGuitars(dispatch, fetchGuitars, undefined, DEFAULT_PAGE_PATH);
  };

  return (
    <form
      className="catalog-filter"
      data-testid="catalog-filter"
    >
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>

      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Цена, ₽</legend>

        <PriceRange
          getGuitarsForDefaultPage={getGuitarsForDefaultPage}
        />
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>

        <GuitarTypeList
          getGuitarsForDefaultPage={getGuitarsForDefaultPage}
        />
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>

        <GuitarStringList
          getGuitarsForDefaultPage={getGuitarsForDefaultPage}
        />
      </fieldset>
    </form>
  );
}

export default Filters;
