import {Dispatch} from 'react';
import {debounce} from 'ts-debounce';

import {ThunkActionResult} from '../types/store-types';
import {GeneratedParams, NavItem} from '../types/types';

enum TabIndexValue {
  Default = 0,
  Negative = -1,
}

const DELAY_MILLISECONDS = 1000;
const LANG = 'ru-RU';

const debouncedFindGuitars = debounce((
  dispatch: Dispatch<ThunkActionResult | void>,
  getData: (a: string) => ThunkActionResult,
  resetData: () => void,
  value?: string,
) => value ? dispatch(getData(value)) : dispatch(resetData()), DELAY_MILLISECONDS);

const debouncedFetchGuitars = debounce((
  dispatch: Dispatch<ThunkActionResult | void>,
  getData: (a?: GeneratedParams, b?: string) => ThunkActionResult,
  currentValue?: GeneratedParams | undefined,
  currentPath?: string,
) => dispatch(getData(currentValue, currentPath)), DELAY_MILLISECONDS);

const createArrayOfObjects = <T>(
  createObject: () => T,
  amount: number,
): T[] => new Array(amount).fill(null).map(() => createObject());

const addBreadcrumbsItem = (nav: NavItem[], item: NavItem) => {
  const newNav = nav.slice();
  newNav.push(item);

  return newNav;
};

const formatPrice = (price: number) => new Intl.NumberFormat(LANG).format(price);

const getTabIndexValue = (isActive: boolean) => isActive ? TabIndexValue.Negative
  : TabIndexValue.Default;

const scrollToTop = () => window.scrollTo(0, 0);

const addStringToArray = (value: string) => value ? [value] : [];

const isActive = (currentValue: string, activeValue: string) => currentValue === activeValue;

const humanizeDate = (date: string) => new Date(date)
  .toLocaleDateString(LANG, {day: '2-digit', month: 'long'});

const isEscEvent = (key: string) => key === 'Escape' || key === 'Esc';

const subscribeEscEvent = (performActions?: () => void | undefined) => {
  const onEscKeyPress = (evt: KeyboardEvent) => isEscEvent(evt.key)
    && performActions && performActions();

  return performActions
    ? document.addEventListener('keydown', onEscKeyPress)
    : document.removeEventListener('keydown', onEscKeyPress);
};

const getSelectedElements = (nodes: HTMLFormElement) => Object.values(nodes)
  .filter((node) => node.checked);

export {
  debouncedFindGuitars,
  debouncedFetchGuitars,
  createArrayOfObjects,
  addBreadcrumbsItem,
  formatPrice,
  getTabIndexValue,
  scrollToTop,
  addStringToArray,
  isActive,
  humanizeDate,
  subscribeEscEvent,
  getSelectedElements
};
