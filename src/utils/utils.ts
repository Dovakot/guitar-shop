import {debounce} from 'ts-debounce';

const WAIT_1000_MILLISECONDS = 1000;

const fetchData = (
  dispatch: any,
  fetchData: any,
  resetData: any,
  value?: string
) => value ? dispatch(fetchData(value)) : dispatch(resetData());

const debouncedFetchData = debounce(fetchData, WAIT_1000_MILLISECONDS);

const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU').format(price);

export {
  debouncedFetchData,
  formatPrice
};
