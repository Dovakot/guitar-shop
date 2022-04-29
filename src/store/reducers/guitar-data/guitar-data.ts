import {createReducer} from '@reduxjs/toolkit';

import {
  setDefaultOptionsToStore,
  adaptSearchParamsToStore
} from '../../../utils/query-utils';

import {
  setStatusIsLoading,
  loadGuitars,
  searchGuitars,
  setSortTypes,
  setOptions,
  resetMainPageData
} from '../../actions/actions';

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
      search.guitars = payload;
      search.guitarCount = payload.length;
    })
    .addCase(setSortTypes, ({options}, {payload}) => {
      options.sortType = payload.sortType;
      options.sortOrder = payload.sortOrder;
    })
    .addCase(setOptions, (state, {payload}) => {
      state.options = adaptSearchParamsToStore(state.options, payload);
    })
    .addCase(resetMainPageData, (state) => {
      state.guitars = GUITARS_DATA_DEFAULT;
      state.options = OPTIONS_DATA_DEFAULT;
      state.isLoading = true;
      state.isError = false;
    });
});

export default guitarData;
