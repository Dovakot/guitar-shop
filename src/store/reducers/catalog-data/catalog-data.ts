import {createSlice} from '@reduxjs/toolkit';

import {checkGuitarTypes, checkGuitarStrings} from '../../../utils/filter-utils';
import {getCatalogTotalPages} from '../../../utils/pagination-utils';
import catalogInitialState from './catalog-initial-state';

const catalogData = createSlice({
  name: 'catalog',
  initialState: catalogInitialState,
  reducers: {
    setCatalogPages: (state, {payload}) => {
      state.pages = getCatalogTotalPages(payload);
      state.totalCount = payload;
    },
    setGuitarTypesFilter: (state, {payload}) => {
      state.guitarTypes = checkGuitarTypes(payload);
    },
    setGuitarStringsFilter: (state, {payload}) => {
      state.guitarStrings = checkGuitarStrings(payload);
    },
    setDefaultPriceFilter: (state, {payload}) => {
      state.defaultMinPrice = payload.minPrice;
      state.defaultMaxPrice = payload.maxPrice;
    },
    resetCatalogData: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    isLoadingCatalog: (state, {payload}) => {
      state.isLoading = payload;
      state.isError = payload;
    },
  },
});

export const {
  setCatalogPages,
  setGuitarTypesFilter,
  setGuitarStringsFilter,
  setDefaultPriceFilter,
  resetCatalogData,
  isLoadingCatalog,
} = catalogData.actions;

export default catalogData.reducer;
