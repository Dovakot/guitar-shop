import {createReducer} from '@reduxjs/toolkit';

import {
  setDefaultOptionsToStore,
  adaptSearchParamsToStore
} from '../../../utils/query-utils';

import {
  filterGuitarAttr,
  checkGuitarTypes,
  checkGuitarStrings
} from '../../../utils/filter-utils';

import {
  setStatusIsLoading,
  loadGuitars,
  searchGuitars,
  setSortTypes,
  setGuitarTypes,
  setGuitarStrings,
  setDefaultGuitarPrices,
  setGuitarPriceMin,
  setGuitarPriceMax,
  setOptions,
  resetMainPageData
} from '../../actions/actions';

const addStringToArray = (value: string) => value ? [value] : [];

const OPTIONS_DATA_DEFAULT = setDefaultOptionsToStore();
const GUITARS_DATA_DEFAULT = {
  data: [],
  totalCount: 0,
  isLoading: false,
};

const initialState = {
  guitars: GUITARS_DATA_DEFAULT,
  search: {
    guitars: [],
    guitarCount: 0,
  },
  filter: {
    defaultPriceMin: 0,
    defaultPriceMax: 0,
    guitarTypes: [],
    guitarStrings: [],
  },
  options: OPTIONS_DATA_DEFAULT,
  isLoading: true,
  isError: false,
};

const guitarData = createReducer(initialState, (builder) => {
  builder
    .addCase(setStatusIsLoading, (state, {payload}) => {
      state.isLoading = payload.isLoading;
      state.isError = payload.isError;
    })
    .addCase(loadGuitars, ({guitars}, {payload}) => {
      guitars.data = payload.guitars;
      guitars.totalCount = +payload.totalCount;
      guitars.isLoading = payload.isLoading;
    })
    .addCase(searchGuitars, ({search}, {payload}) => {
      search.guitars = payload ;
      search.guitarCount = payload.length;
    })
    .addCase(setSortTypes, ({options}, {payload}) => {
      options.sortType = payload.sortType;
      options.sortOrder = payload.sortOrder;
    })
    .addCase(setGuitarTypes, ({options, filter}, {payload}) => {
      options.guitarTypes = filterGuitarAttr(options.guitarTypes, payload);
      filter.guitarStrings = checkGuitarStrings(options.guitarTypes);
    })
    .addCase(setGuitarStrings, ({options, filter}, {payload}) => {
      options.stringCount = filterGuitarAttr(options.stringCount, payload);
      filter.guitarTypes = checkGuitarTypes(options.stringCount);
    })
    .addCase(setDefaultGuitarPrices, ({filter}, {payload}) => {
      filter.defaultPriceMin = payload.minPrice;
      filter.defaultPriceMax = payload.maxPrice;
    })
    .addCase(setGuitarPriceMin, ({options}, {payload}) => {
      options.minPrice = addStringToArray(payload);
    })
    .addCase(setGuitarPriceMax, ({options}, {payload}) => {
      options.maxPrice = addStringToArray(payload);
    })
    .addCase(setOptions, (state, {payload}) => {
      state.options = adaptSearchParamsToStore(state.options, payload);
      state.filter.guitarTypes = checkGuitarTypes(state.options.stringCount);
      state.filter.guitarStrings = checkGuitarStrings(state.options.guitarTypes);
    })
    .addCase(resetMainPageData, (state) => {
      state.guitars = GUITARS_DATA_DEFAULT;
      state.options = OPTIONS_DATA_DEFAULT;
      state.isLoading = true;
      state.isError = false;
    });
});

export default guitarData;
