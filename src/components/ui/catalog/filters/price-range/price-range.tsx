import React, {FocusEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {checkValue} from '../../../../../utils/filter-utils';
import {getGuitarPrice} from '../../../../../store/reducers/catalog-data/selectors';
import {getPriceParams} from '../../../../../store/reducers/query-string-data/selectors';
import {setMinPriceParam, setMaxPriceParam} from '../../../../../store/reducers/query-string-data/query-string-data';

import PriceField from './price-field/price-field';

type PriceRangeProps = {
  getGuitarsForDefaultPage: () => void,
};

function PriceRange({getGuitarsForDefaultPage}: PriceRangeProps): JSX.Element {
  const dispatch = useDispatch();
  const {defaultMinPrice, defaultMaxPrice} = useSelector(getGuitarPrice);
  const {minPrice: [minPrice], maxPrice: [maxPrice]} = useSelector(getPriceParams);

  const changeGuitarPrice = async (
    target: HTMLInputElement,
    defaultPrice: number,
    activePrice: string,
    cb: (a: string) => void,
  ) => {
    const isChecked = checkValue(target, defaultPrice, activePrice || '');

    await dispatch(cb(target.value));

    if (isChecked) {
      getGuitarsForDefaultPage();
    }
  };

  const handleGuitarPriceMinBlur = ({target}: FocusEvent<HTMLInputElement>) =>
    changeGuitarPrice(target, defaultMinPrice, minPrice, setMinPriceParam);

  const handleGuitarPriceMaxBlur = ({target}: FocusEvent<HTMLInputElement>) =>
    changeGuitarPrice(target, defaultMaxPrice, maxPrice, setMaxPriceParam);

  return (
    <div
      className="catalog-filter__price-range"
      data-testid="price-range"
    >
      <div className="form-input">
        <label className="visually-hidden">Минимальная цена</label>

        <PriceField
          id="priceMin"
          name="от"
          value={minPrice}
          defaultValueMin={defaultMinPrice}
          defaultValueMax={defaultMaxPrice}
          placeholder={defaultMinPrice}
          onFieldBlur={handleGuitarPriceMinBlur}
        />
      </div>
      <div className="form-input">
        <label className="visually-hidden">Максимальная цена</label>

        <PriceField
          id="priceMax"
          name="до"
          value={maxPrice}
          defaultValueMin={defaultMinPrice}
          defaultValueMax={defaultMaxPrice}
          placeholder={defaultMaxPrice}
          onFieldBlur={handleGuitarPriceMaxBlur}
        />
      </div>
    </div>
  );
}

export default PriceRange;
