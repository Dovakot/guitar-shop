import {Action} from 'redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {ThunkDispatch} from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {ApiRoute, TOTAL_COUNT_HEADER, MAX_GUITAR_COUNT} from '../../const';
import {mockCatalogGuitars, mockTotalCount} from '../../mock/mock';
import createApi from '../../services/api';
import {RootState} from '../../types/store-types';
import {fetchGuitars, fetchGuitarPrice, fetchFoundGuitars} from './api-actions';
import {loadGuitars, searchGuitars, isLoadingGuitars} from '../reducers/product-data/product-data';
import {setCatalogPages, setDefaultPriceFilter} from '../reducers/catalog-data/catalog-data';

import {mockInitialState} from '../../mock/store-mock';

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
});
