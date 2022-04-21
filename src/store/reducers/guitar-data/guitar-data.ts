import {createReducer} from '@reduxjs/toolkit';

import {
  loadGuitars,
  searchGuitars,
  resetMainPageData
} from '../../actions/actions';

const GUITARS_DATA_DEFAULT = {
  data: [],
  isLoading: true,
  isError: false,
};

const initialState = {
  guitars: GUITARS_DATA_DEFAULT,
  search: {
    guitars: [],
    guitarCount: 0,
  },
};

const guitarData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, ({guitars}, {payload}) => {
      guitars.data = payload.data;
      guitars.isLoading = payload.isLoading;
      guitars.isError = payload.isError;
    })
    .addCase(searchGuitars, ({search}, {payload}) => {
      search.guitars = payload;
      search.guitarCount = search.guitars.length;
    })
    .addCase(resetMainPageData, (state) => {
      state.guitars = GUITARS_DATA_DEFAULT;
    })
});

export default guitarData;
