import {createReducer} from '@reduxjs/toolkit';

import {
  addStringToArray
} from '../../../utils/utils';

import {
  getCatalogTotalPages,
  changeCatalogPage
} from '../../../utils/pagination-utils';

import {
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
  setCatalogPage,
  resetMainPageData,
  isLoadingGuitars
} from '../../actions/actions';

import guitarInitialState from './guitar-initial-state';

const guitarData = createReducer(guitarInitialState, (builder) => {
  builder
    .addCase(setStatusIsLoading, (state, {payload}) => {
      state.isLoading = payload.isLoading;
      state.isError = payload.isError;
    })
    .addCase(loadGuitars, (state, {payload}) => {
      state.guitars.data = payload.guitars;
      state.guitars.totalCount = payload.totalCount;
      state.pages = getCatalogTotalPages(payload.totalCount);
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
    .addCase(setCatalogPage, ({options}, {payload}) => {
      const changedPage = changeCatalogPage(payload);

      options.guitarsFrom = addStringToArray(changedPage);
    })
    .addCase(isLoadingGuitars, ({guitars}, {payload}) => {
      guitars.isLoading = payload;
    })
    .addCase(resetMainPageData, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
});

export default guitarData;
