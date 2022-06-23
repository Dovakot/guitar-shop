import {createSlice} from '@reduxjs/toolkit';

import cartInitialState from './cart-initial-state';
import {changeOrderCount, addOrder, deleteOrder, calculateDiscount} from '../../../utils/cart-utils';

const cartData = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    setInfoModalPreorder: ({preorder}, {payload}) => {
      preorder.data = payload;
    },
    setStateModalPreorder: ({preorder}, {payload}) => {
      preorder.isHidden = payload;
    },
    setUpdateTypeDelete: ({preorder}, {payload}) => {
      preorder.isDelete = payload;
    },
    setLoadingCartPage: ({order}) => {
      order.isLoading = true;
    },
    addItemToOrder: (state, {payload}) => {
      const {price} = state.preorder.data;

      state.orderConfig[payload] = addOrder(payload, state.orderConfig[payload], price);
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
    setDiscount: ({coupon}, {payload}) => {
      coupon.percent = payload.percent;
      coupon.name = payload.name;
    },
    applyDiscount: (state) => {
      const {toPay, discount} = calculateDiscount(state.totalAmount, state.coupon.percent);

      state.discount = discount;
      state.toPay = toPay;
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
  setDiscount,
  applyDiscount,
} = cartData.actions;

export default cartData.reducer;
