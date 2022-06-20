import {createSlice} from '@reduxjs/toolkit';

import cartInitialState from './cart-initial-state';
import {changeOrderCount, addOrder, deleteOrder} from '../../../utils/cart-utils';

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
    setLoadingCartPage: ({order}) => {
      order.isLoading = true;
    },
    addItemToOrder: (state, {payload}) => {
      const {price} = state.preorder;
      const order = addOrder(payload, state.orderConfig[payload], price);

      state.orderConfig[payload] = order;
      state.totalCount += 1;
      state.totalAmount += price;
    },
    deleteItemInOrder: (state, {payload}) => {
      const {count, amount} = state.orderConfig[payload];
      const orders = deleteOrder(payload, state.order.data);

      state.totalCount -= count;
      state.totalAmount -= amount;

      delete state.orderConfig[payload];
      state.order.data = orders;
      state.order.orderCount = orders.length;
    },
    changeItemInOrder: (state, {payload}) => {
      const {id, type} = payload;
      const {
        orderConfig,
        totalCount,
        totalAmount,
      } = changeOrderCount(state.orderConfig[id], state.totalCount, state.totalAmount, type);

      state.orderConfig[id] = orderConfig;
      state.totalCount = totalCount;
      state.totalAmount = totalAmount;
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
  deleteItemInOrder,
  changeItemInOrder,
  setLoadingCartPage,
  loadOrderData,
} = cartData.actions;

export default cartData.reducer;
