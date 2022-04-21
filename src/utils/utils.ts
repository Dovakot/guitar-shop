import {Dispatch} from 'react';
import {debounce} from 'ts-debounce';

import {ThunkActionResult} from '../types/store-types';

const WAIT_1000_MILLISECONDS = 1000;

const fetchData = (
  dispatch: Dispatch<ThunkActionResult | void>,
  getData: (name: string) => ThunkActionResult,
  resetData: () => void,
  value?: string,
) => value ? dispatch(getData(value)) : dispatch(resetData());

const debouncedFetchData = debounce(fetchData, WAIT_1000_MILLISECONDS);

const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU').format(price);

export {
  debouncedFetchData,
  formatPrice
};
