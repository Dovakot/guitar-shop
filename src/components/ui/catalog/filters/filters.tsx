import React from 'react';

import PriceRange from './price-range/price-range';
import GuitarTypeList from './guitar-type-list/guitar-type-list';
import GuitarStringList from './guitar-string-list/guitar-string-list';

function Filters(): JSX.Element {
  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>

      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Цена, ₽</legend>

        <PriceRange />
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>

        <GuitarTypeList />
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>

        <GuitarStringList />
      </fieldset>
    </form>
  );
}

export default Filters;
