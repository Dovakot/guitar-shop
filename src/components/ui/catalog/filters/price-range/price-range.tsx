import React, {FocusEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {checkValue} from '../../../../../utils/filter-utils';
import {setGuitarPriceMin, setGuitarPriceMax} from '../../../../../store/actions/actions';
import {getDefaultGuitarPrice, getGuitarPrice} from '../../../../../store/reducers/guitar-data/selectors';

import PriceField from './price-field/price-field';

type PriceRangeProps = {
  getGuitarsForDefaultPage: () => void,
};

function PriceRange({getGuitarsForDefaultPage}: PriceRangeProps): JSX.Element {
  const dispatch = useDispatch();
  const {defaultPriceMin, defaultPriceMax} = useSelector(getDefaultGuitarPrice);
  const {minPrice, maxPrice} = useSelector(getGuitarPrice);

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
    changeGuitarPrice(target, defaultPriceMin, minPrice, setGuitarPriceMin);

  const handleGuitarPriceMaxBlur = ({target}: FocusEvent<HTMLInputElement>) =>
    changeGuitarPrice(target, defaultPriceMax, maxPrice, setGuitarPriceMax);

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
          defaultValueMin={defaultPriceMin}
          defaultValueMax={defaultPriceMax}
          placeholder={defaultPriceMin}
          onFieldBlur={handleGuitarPriceMinBlur}
        />
      </div>
      <div className="form-input">
        <label className="visually-hidden">Максимальная цена</label>

        <PriceField
          id="priceMax"
          name="до"
          value={maxPrice}
          defaultValueMin={defaultPriceMin}
          defaultValueMax={defaultPriceMax}
          placeholder={defaultPriceMax}
          onFieldBlur={handleGuitarPriceMaxBlur}
        />
      </div>
    </div>
  );
}

export default PriceRange;
