import {createSlice} from '@reduxjs/toolkit';

import cartInitialState from './cart-initial-state';

const cartData = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    setInfoModalPreorder: (state, {payload}) => {
      state.preorder = payload;
    },
    setStateModalPreorder: (state, {payload}) => {
      state.isModalHidden = payload;
    },
    setUpdateTypeDelete: (state, {payload}) => {
      state.isDelete = payload;
    },
    addItemToOrder: (state, {payload}) => {
      const {price} = state.preorder;

      let amount = price;
      let count = 1;

      if (payload in state.orderConfig) {
        count = state.orderConfig[payload].count + 1;
        amount *= count;
      }

      state.orderConfig[payload] = {count, amount};
      state.totalCount = state.totalCount + 1;
      state.totalAmount += price;
    },
    setLoadingCartPage: ({order}) => {
      order.isLoading = true;
    },
    loadOrderData: ({order}, {payload}) => {
      order.data = payload.data;
      order.orderCount = payload.data.length;
      order.isLoading = payload.isError;
      order.isError = payload.isError;
    },
  },
});

export const {
  setInfoModalPreorder,
  setStateModalPreorder,
  setUpdateTypeDelete,
  addItemToOrder,
  setLoadingCartPage,
  loadOrderData,
} = cartData.actions;

export default cartData.reducer;
