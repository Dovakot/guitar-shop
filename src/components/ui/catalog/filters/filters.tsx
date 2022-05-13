import React from 'react';
import {useDispatch} from 'react-redux';
import {generatePath} from 'react-router-dom';

import {AppRoute, PageInfo} from '../../../../const';
import {debouncedFetchGuitars} from '../../../../utils/utils';
import {setCatalogPage} from '../../../../store/actions/actions';
import {fetchGuitars} from '../../../../store/api-actions/api-actions';

import PriceRange from './price-range/price-range';
import GuitarTypeList from './guitar-type-list/guitar-type-list';
import GuitarStringList from './guitar-string-list/guitar-string-list';

function Filters(): JSX.Element {
  const dispatch = useDispatch();
  const pageLink = generatePath(AppRoute.Catalog, {page: PageInfo.DefaultPage});

  const getGuitarsForDefaultPage = async () => {
    await dispatch(setCatalogPage(PageInfo.DefaultPage));
    debouncedFetchGuitars(dispatch, fetchGuitars, undefined, pageLink);
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
