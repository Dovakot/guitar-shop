import {Action} from 'redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {ThunkDispatch} from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {ApiRoute, TOTAL_COUNT_HEADER, MAX_GUITAR_COUNT} from '../../const';
import createApi from '../../services/api';
import {RootState} from '../../types/store-types';
import {NameSpace} from '../reducers/root-reducer';
import guitarInitialState from '../reducers/guitar-data/guitar-initial-state';

import {fetchGuitars, fetchGuitarPrice, fetchFoundGuitars} from './api-actions';

import {
  isLoadingGuitars,
  loadGuitars,
  setDefaultGuitarPrices,
  searchGuitars
} from '../actions/actions';

import {
  mockCatalogGuitars,
  mockTotalCount
} from '../../mock/mock';

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
    const store = mockStore({
      [NameSpace.Guitar]: {
        ...guitarInitialState,
      },
    });

    mockApi.onGet(`${ApiRoute.Guitars}?_limit=${MAX_GUITAR_COUNT}&_embed=comments`)
      .reply(STATUS_OK, mockCatalogGuitars, {
        [TOTAL_COUNT_HEADER]: mockTotalCount,
      });

    await store.dispatch(fetchGuitars());

    expect(store.getActions())
      .toEqual([
        isLoadingGuitars(false),
        loadGuitars(mockCatalogGuitars, mockTotalCount),
      ]);
  });

  it('should fetch guitar price', async () => {
    const store = mockStore({
      [NameSpace.Guitar]: {
        ...guitarInitialState,
      },
    });

    const [minData] = mockCatalogGuitars;
    const [maxData] = mockCatalogGuitars;

    mockApi.onGet(`${ApiRoute.Guitars}?_limit=1&_sort=price&_order=asc`).reply(STATUS_OK, mockCatalogGuitars);
    mockApi.onGet(`${ApiRoute.Guitars}?_limit=1&_sort=price&_order=desc`).reply(STATUS_OK, mockCatalogGuitars);

    await store.dispatch(fetchGuitarPrice());

    expect(store.getActions())
      .toEqual([
        setDefaultGuitarPrices(minData.price, maxData.price),
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
