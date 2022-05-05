import {Dispatch} from 'react';
import {debounce} from 'ts-debounce';

import {ThunkActionResult} from '../types/store-types';
import {GeneratedParams} from '../types/types';

enum TabIndexValue {
  Default = 0,
  Negative = -1,
}

const DELAY_MILLISECONDS = 1000;

const debouncedFindGuitars = debounce((
  dispatch: Dispatch<ThunkActionResult | void>,
  getData: (a: string) => ThunkActionResult,
  resetData: () => void,
  value?: string,
) => value ? dispatch(getData(value)) : dispatch(resetData()), DELAY_MILLISECONDS);

const debouncedFetchGuitars = debounce((
  dispatch: Dispatch<ThunkActionResult | void>,
  getData: (a?: GeneratedParams) => ThunkActionResult,
  currentValue?: GeneratedParams,
) => dispatch(getData(currentValue)), DELAY_MILLISECONDS);

const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU').format(price);

const getTabIndexValue = (isActive: boolean) => isActive ? TabIndexValue.Negative : TabIndexValue.Default;

const isActive = (currentValue: string, activeValue: string) => currentValue === activeValue;

export {
  debouncedFindGuitars,
  debouncedFetchGuitars,
  formatPrice,
  getTabIndexValue,
  isActive
};
