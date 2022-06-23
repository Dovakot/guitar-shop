import {Action} from 'redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {ThunkDispatch} from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {ApiRoute, TOTAL_COUNT_HEADER, MAX_GUITAR_COUNT, MAX_REVIEW_COUNT} from '../../const';
import {NameSpace} from '../../store/reducers/root-reducer';
import {replaceGuitarReviewParams, getUrlToQuery} from '../../utils/query-utils';
import createApi from '../../services/api';
import {RootState} from '../../types/store-types';
import {mockInitialState, getMockState} from '../../mock/store-mock';
import {setCatalogPages, setDefaultPriceFilter} from '../reducers/catalog-data/catalog-data';
import {loadGuitarReviews, addGuitarReview} from '../reducers/review-data/review-data';
import {loadOrderData, setLoadingCartPage, setDiscount, applyDiscount} from '../reducers/cart-data/cart-data';
import queryStringInitialState from '../reducers/query-string-data/query-string-initial-state';
import cartInitialState from '../reducers/cart-data/cart-initial-state';

import {
  mockCatalogGuitars,
  mockTotalCount,
  mockGuitar,
  mockMaxComments,
  mockCommentCount
} from '../../mock/mock';

import {
  fetchGuitars,
  fetchGuitarPrice,
  fetchFoundGuitars,
  fetchGuitar,
  fetchGuitarReviews,
  sendGuitarReview,
  fetchOrderData,
  sendOrderCoupon
} from './api-actions';

import {
  loadGuitars,
  searchGuitars,
  isLoadingGuitars,
  setGuitarName,
  loadGuitar
} from '../reducers/product-data/product-data';

const STATUS_OK = 200;

const api = createApi();
const mockApi = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  RootState,
  Action,
  ThunkDispatch<RootState, typeof api, Action>
>(middlewares);

describe('Api-actions', () => {
  it('should handle succeed get catalog guitars request', async () => {
    const store = mockStore(mockInitialState);

    mockApi.onGet(`${ApiRoute.Guitars}?_limit=${MAX_GUITAR_COUNT}&_embed=comments`)
      .reply(STATUS_OK, mockCatalogGuitars, {
        [TOTAL_COUNT_HEADER]: mockTotalCount,
      });

    await store.dispatch(fetchGuitars());

    expect(store.getActions())
      .toEqual([
        isLoadingGuitars(false),
        loadGuitars(mockCatalogGuitars),
        setCatalogPages(mockTotalCount),
      ]);
  });

  it('should fetch guitar price', async () => {
    const store = mockStore(mockInitialState);

    const [minData] = mockCatalogGuitars;
    const [maxData] = mockCatalogGuitars;

    mockApi.onGet(`${ApiRoute.Guitars}?_limit=1&_sort=price&_order=asc`).reply(STATUS_OK, mockCatalogGuitars);
    mockApi.onGet(`${ApiRoute.Guitars}?_limit=1&_sort=price&_order=desc`).reply(STATUS_OK, mockCatalogGuitars);

    await store.dispatch(fetchGuitarPrice());

    expect(store.getActions())
      .toEqual([
        setDefaultPriceFilter({minPrice: minData.price, maxPrice: maxData.price}),
      ]);
  });

  it('should fetch similar guitars by name', async () => {
    const store = mockStore();
    const name = 'roman';

    mockApi.onGet(`${ApiRoute.Guitars}?name_like=${name}`).reply(STATUS_OK, mockCatalogGuitars);

    await store.dispatch(fetchFoundGuitars(name));

    expect(store.getActions())
      .toEqual([
        searchGuitars(mockCatalogGuitars),
      ]);
  });

  it('should fetch guitar', async () => {
    const store = mockStore(mockInitialState);

    mockApi.onGet(`${ApiRoute.Guitars}/${mockGuitar.id}`).reply(STATUS_OK, mockGuitar);

    await store.dispatch(fetchGuitar(mockGuitar.id.toString()));

    expect(store.getActions())
      .toEqual([
        loadGuitar({data: mockGuitar, isError: false}),
        setGuitarName(mockGuitar.name),
      ]);
  });

  it('should fetch guitar reviews', async () => {
    const store = mockStore(mockInitialState);
    const url = getUrlToQuery({...queryStringInitialState, ...replaceGuitarReviewParams(0)});

    mockApi.onGet(`${ApiRoute.Guitars}/${mockGuitar.id}/${ApiRoute.Comments}?_limit=${MAX_REVIEW_COUNT}${url}`)
      .reply(STATUS_OK, mockMaxComments, {
        [TOTAL_COUNT_HEADER]: mockCommentCount,
      });

    await store.dispatch(fetchGuitarReviews(mockGuitar.id));

    expect(store.getActions())
      .toEqual([
        loadGuitarReviews({data: mockMaxComments, totalCount: mockCommentCount}),
      ]);
  });

  it('should send guitar review', async () => {
    const store = mockStore(mockInitialState);
    const [comment] = mockMaxComments;

    mockApi.onPost(ApiRoute.Comments).reply(STATUS_OK, comment);

    await store.dispatch(sendGuitarReview(comment));

    expect(store.getActions())
      .toEqual([
        addGuitarReview(comment),
      ]);
  });

  it('should fetch order data', async () => {
    const mockOrders = mockCatalogGuitars.slice(0, 1);
    const {id, price} = mockOrders[0];

    const mockOrderConfig = {
      [id]: {
        count: 1,
        amount: price,
        price,
      },
    };

    const mockState = getMockState(NameSpace.Cart, {
      ...cartInitialState,
      orderConfig: mockOrderConfig,
    });

    const store = mockStore(mockState);

    mockApi.onGet(`${ApiRoute.Guitars}?id=${id}`).reply(STATUS_OK, mockOrders);

    await store.dispatch(fetchOrderData());

    expect(store.getActions())
      .toEqual([
        setLoadingCartPage(),
        loadOrderData({data: mockOrders, isError: false}),
      ]);
  });

  it('should send coupon', async () => {
    const store = mockStore();

    mockApi.onPost(`${ApiRoute.Coupons}`).reply(STATUS_OK, 15);

    await store.dispatch(sendOrderCoupon('test'));

    expect(store.getActions())
      .toEqual([
        setDiscount({percent: 15, name: 'test'}),
        applyDiscount(),
      ]);
  });
});
