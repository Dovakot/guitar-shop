import {createSlice} from '@reduxjs/toolkit';

import {NavLinkTitle} from '../../../const';
import productInitialState from './product-initial-state';

const productData = createSlice({
  name: 'product',
  initialState: productInitialState,
  reducers: {
    loadGuitar: ({guitar}, {payload}) => {
      guitar.data = payload.data;
      guitar.isLoading = payload.isError;
      guitar.isError = payload.isError;
    },
    setGuitarName: ({guitar}, {payload}) => {
      guitar.name = payload;
    },
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
    resetGuitar: ({guitar}) => {
      guitar.name = NavLinkTitle.Guitar;
      guitar.isLoading = true;
      guitar.isError = false;
    },
    isLoadingGuitars: (state, {payload}) => {
      state.isLoading = payload;
    },
  },
});

export const {
  loadGuitar,
  setGuitarName,
  loadGuitars,
  searchGuitars,
  resetFoundGuitars,
  resetGuitar,
  isLoadingGuitars,
} = productData.actions;

export default productData.reducer;
