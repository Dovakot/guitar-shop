import {UNKNOWN_ACTION} from '../../../const';
import {changeCatalogPage} from '../../../utils/pagination-utils';
import queryStringInitialState from './query-string-initial-state';

import queryStringData, {
  setGuitarCountParam,
  setGuitarTypesParam,
  setGuitarStringsParam,
  setMinPriceParam,
  setMaxPriceParam,
  setSortParams,
  setDefaultParams
} from './query-string-data';

import {
  mockTotalCount,
  mockGuitarStrings,
  mockGuitarTypes,
  mockPriceMin,
  mockPriceMax,
  mockSortType
} from '../../../mock/mock';

describe('Reducer: Query String', () => {
  it('without additional parameters should return initial state', () => {
    expect(queryStringData(void 0, UNKNOWN_ACTION)).toEqual(queryStringInitialState);
  });

  it('should load catalog guitars data', () => {
    expect(
      queryStringData(queryStringInitialState, setGuitarCountParam(mockTotalCount)),
    ).toEqual({
      ...queryStringInitialState,
      guitarsFrom: [changeCatalogPage(mockTotalCount)],
    });
  });

  it('should set guitar count param', () => {
    expect(
      queryStringData(queryStringInitialState, setGuitarCountParam(mockTotalCount)),
    ).toEqual({
      ...queryStringInitialState,
      guitarsFrom: [changeCatalogPage(mockTotalCount)],
    });
  });

  it('should set guitar types param', () => {
    expect(
      queryStringData(queryStringInitialState, setGuitarTypesParam(mockGuitarTypes)),
    ).toEqual({
      ...queryStringInitialState,
      guitarTypes: mockGuitarTypes,
    });
  });

  it('should set guitar strings param', () => {
    expect(
      queryStringData(queryStringInitialState, setGuitarStringsParam(mockGuitarStrings)),
    ).toEqual({
      ...queryStringInitialState,
      stringCount: mockGuitarStrings,
    });
  });

  it('should set min price param', () => {
    expect(
      queryStringData(queryStringInitialState, setMinPriceParam(mockPriceMin)),
    ).toEqual({
      ...queryStringInitialState,
      minPrice: [mockPriceMin],
    });
  });

  it('should set max price param', () => {
    expect(
      queryStringData(queryStringInitialState, setMaxPriceParam(mockPriceMax)),
    ).toEqual({
      ...queryStringInitialState,
      maxPrice: [mockPriceMax],
    });
  });

  it('should set sort params', () => {
    expect(
      queryStringData(queryStringInitialState, setSortParams(mockSortType)),
    ).toEqual({
      ...queryStringInitialState,
      sortType: mockSortType.sortType,
      sortOrder: mockSortType.sortOrder,
    });
  });

  it('should set default params', () => {
    expect(
      queryStringData(queryStringInitialState, setDefaultParams('')),
    ).toEqual({
      ...queryStringInitialState,
    });
  });
});
