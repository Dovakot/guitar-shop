import {createSlice} from '@reduxjs/toolkit';

import productInitialState from './product-initial-state';

const productData = createSlice({
  name: 'product',
  initialState: productInitialState,
  reducers: {
    loadGuitars: (state, {payload}) => {
      state.guitars = payload;
    },
    searchGuitars: (state, {payload}) => {
      state.foundGuitars = payload;
      state.guitarCount = payload.length;
    },
    resetFoundGuitars: (state) => {
      state.foundGuitars = productInitialState.guitars;
      state.guitarCount = productInitialState.guitarCount;
    },
    isLoadingGuitars: (state, {payload}) => {
      state.isLoading = payload;
    },
  },
});

export const {
  loadGuitars,
  searchGuitars,
  resetFoundGuitars,
  isLoadingGuitars,
} = productData.actions;

export default productData.reducer;
