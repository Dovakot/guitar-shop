import {createReducer} from '@reduxjs/toolkit';

import {
  loadGuitars,
  resetMainPageData
} from '../../actions/actions';

const GUITARS_DATA_DEFAULT = {
  data: [],
  isLoading: true,
  isError: false,
};

const initialState = {
  guitars: GUITARS_DATA_DEFAULT,
};

const guitarData = createReducer(initialState, (builder) => {
  builder
    .addCase(resetMainPageData, (state) => {
      state.guitars = GUITARS_DATA_DEFAULT;
    })
    .addCase(loadGuitars, ({guitars}, {payload}) => {
      guitars.data = payload.data;
      guitars.isLoading = payload.isLoading;
      guitars.isError = payload.isError;
    });
});

export default guitarData;
