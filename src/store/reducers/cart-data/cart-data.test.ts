import {UNKNOWN_ACTION} from '../../../const';
import cartInitialState from './cart-initial-state';

import cartData, {
  setInfoModalPreorder,
  setStateModalPreorder,
  setUpdateTypeDelete,
  addItemToOrder,
  deleteItemInOrder,
  changeItemInOrder,
  setLoadingCartPage,
  loadOrderData,
  setDiscount,
  applyDiscount
} from './cart-data';

import {
  mockGuitar,
  mockCatalogGuitars
} from '../../../mock/mock';

const {id, price} = mockGuitar;

const mockDiscount = {percent: 5, name: 'test'};

const mockPreorder = {
  ...cartInitialState.preorder,
  data: mockGuitar,
};

const mockItemCart = {
  ...cartInitialState,
  preorder: mockPreorder,
  orderConfig: {
    [id]: {
      count: 1,
      amount: price,
      price,
    },
  },
  totalCount: 1,
  totalAmount: price,
};

describe('Reducer: Cart', () => {
  it('without additional parameters should return initial state', () => {
    expect(cartData(void 0, UNKNOWN_ACTION)).toEqual(cartInitialState);
  });

  it('should set guitar info', () => {
    expect(
      cartData(cartInitialState, setInfoModalPreorder(mockGuitar)),
    ).toEqual({
      ...cartInitialState,
      preorder: mockPreorder,
    });
  });

  it('should set modal state cart (show)', () => {
    expect(
      cartData(cartInitialState, setStateModalPreorder(false)),
    ).toEqual({
      ...cartInitialState,
      preorder: {
        ...cartInitialState.preorder,
        isHidden: false,
      },
    });
  });

  it('should set modal state cart (delete)', () => {
    expect(
      cartData(cartInitialState, setUpdateTypeDelete(true)),
    ).toEqual({
      ...cartInitialState,
      preorder: {
        ...cartInitialState.preorder,
        isDelete: true,
      },
    });
  });

  it('should set flag about load cart data', () => {
    expect(
      cartData(cartInitialState, setLoadingCartPage()),
    ).toEqual({
      ...cartInitialState,
      order: {
        ...cartInitialState.order,
        isLoading: true,
      },
    });
  });

  it('should add item to order', () => {
    expect(
      cartData({
        ...cartInitialState,
        preorder: mockPreorder,
      },
      addItemToOrder(id)),
    ).toEqual(mockItemCart);
  });

  it('should delete item in the order', () => {
    expect(
      cartData(mockItemCart, deleteItemInOrder(id)),
    ).toEqual({
      ...cartInitialState,
      preorder: mockPreorder,
    });
  });

  it('should change item in the order', () => {
    expect(
      cartData(mockItemCart, changeItemInOrder({id, type: 1})),
    ).toEqual(mockItemCart);
  });

  it('should load order data', () => {
    expect(
      cartData(cartInitialState, loadOrderData({data: mockCatalogGuitars, isError: false})),
    ).toEqual({
      ...cartInitialState,
      order: {
        data: mockCatalogGuitars,
        orderCount: mockCatalogGuitars.length,
        isLoading: false,
        isError: false,
      },
    });
  });

  it('should set discount', () => {
    expect(
      cartData(cartInitialState, setDiscount(mockDiscount)),
    ).toEqual({
      ...cartInitialState,
      coupon: mockDiscount,
    });
  });

  it('should apply discount', () => {
    expect(
      cartData({
        ...cartInitialState,
        coupon: mockDiscount,
        totalAmount: 1000,
      },
      applyDiscount()),
    ).toEqual({
      ...cartInitialState,
      coupon: mockDiscount,
      totalAmount: 1000,
      discount: 50,
      toPay: 950,
    });
  });
});
