import {createSlice} from '@reduxjs/toolkit';

import {addStringToArray} from '../../../utils/utils';
import {changeCatalogPage} from '../../../utils/pagination-utils';
import {adaptSearchParamsToStore} from '../../../utils/query-utils';
import queryStringInitialState from './query-string-initial-state';

const queryStringData = createSlice({
  name: 'queryString',
  initialState: queryStringInitialState,
  reducers: {
    setGuitarCountParam: (state, {payload}) => {
      const changedPage = changeCatalogPage(payload);

      state.guitarsFrom = addStringToArray(changedPage);
    },
    setGuitarTypesParam: (state, {payload}) => {
      state.guitarTypes = payload;
    },
    setGuitarStringsParam: (state, {payload}) => {
      state.stringCount = payload;
    },
    setMinPriceParam: (state, {payload}) => {
      state.minPrice = addStringToArray(payload);
    },
    setMaxPriceParam: (state, {payload}) => {
      state.maxPrice = addStringToArray(payload);
    },
    setSortParams: (state, {payload}) => {
      state.sortType = payload.sortType;
      state.sortOrder = payload.sortOrder;
    },
    setDefaultParams: (state, {payload}) => adaptSearchParamsToStore(state, payload),
  },
});

export const {
  setGuitarCountParam,
  setGuitarTypesParam,
  setGuitarStringsParam,
  setMinPriceParam,
  setMaxPriceParam,
  setSortParams,
  setDefaultParams,
} = queryStringData.actions;

export default queryStringData.reducer;
