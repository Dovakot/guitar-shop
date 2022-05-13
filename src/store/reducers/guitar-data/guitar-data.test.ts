import {AppRoute} from '../../../const';

import {
  getCatalogTotalPages,
  changeCatalogPage
} from '../../../utils/pagination-utils';

import {
  checkGuitarTypes,
  checkGuitarStrings
} from '../../../utils/filter-utils';

import {
  adaptSearchParamsToStore
} from '../../../utils/query-utils';

import guitarInitialState from './guitar-initial-state';
import guitarData from './guitar-data';

import {
  setStatusIsLoading,
  loadGuitars,
  searchGuitars,
  setSortTypes,
  setGuitarTypes,
  setGuitarStrings,
  setDefaultGuitarPrices,
  setGuitarPriceMin,
  setGuitarPriceMax,
  setOptions,
  setCatalogPage,
  resetMainPageData,
  isLoadingGuitars
} from '../../actions/actions';

import {
  mockTotalCount,
  mockLoadingStatus,
  mockCatalogGuitars,
  mockSortType,
  mockGuitarTypes,
  mockGuitarStrings,
  mockPriceMin,
  mockPriceMax,
  mockCatalogPage
} from '../../../mock/mock';

const UNKNOWN_ACTION = {
  type: 'UNKNOWN_ACTION',
} as const;

describe('Reducer: Guitar', () => {
  it('without additional parameters should return initial state', () => {
    expect(guitarData(void 0, UNKNOWN_ACTION)).toEqual(guitarInitialState);
  });

  it('should set status is loading', () => {
    expect(
      guitarData(guitarInitialState, setStatusIsLoading(mockLoadingStatus)),
    ).toEqual({
      ...guitarInitialState,
      isLoading: mockLoadingStatus,
      isError: mockLoadingStatus,
    });
  });

  it('should load catalog guitars data', () => {
    expect(
      guitarData(guitarInitialState, loadGuitars(mockCatalogGuitars, mockTotalCount)),
    ).toEqual({
      ...guitarInitialState,
      guitars: {
        ...guitarInitialState.guitars,
        data: mockCatalogGuitars,
        totalCount: mockTotalCount,
      },
      pages: getCatalogTotalPages(mockTotalCount),
    });
  });

  it('should set found guitars data', () => {
    expect(
      guitarData(guitarInitialState, searchGuitars(mockCatalogGuitars)),
    ).toEqual({
      ...guitarInitialState,
      search: {
        guitars: mockCatalogGuitars,
        guitarCount: mockCatalogGuitars.length,
      },
    });
  });

  it('should set sort types', () => {
    expect(
      guitarData(guitarInitialState, setSortTypes(mockSortType)),
    ).toEqual({
      ...guitarInitialState,
      options: {
        ...guitarInitialState.options,
        ...mockSortType,
      },
    });
  });

  it('should set guitar types', () => {
    expect(
      guitarData(guitarInitialState, setGuitarTypes(mockGuitarTypes[0])),
    ).toEqual({
      ...guitarInitialState,
      options: {
        ...guitarInitialState.options,
        guitarTypes: mockGuitarTypes,
      },
      filter: {
        ...guitarInitialState.filter,
        guitarStrings: checkGuitarStrings(mockGuitarTypes),
      },
    });
  });

  it('should set guitar strings', () => {
    expect(
      guitarData(guitarInitialState, setGuitarStrings(mockGuitarStrings[0])),
    ).toEqual({
      ...guitarInitialState,
      options: {
        ...guitarInitialState.options,
        stringCount: mockGuitarStrings,
      },
      filter: {
        ...guitarInitialState.filter,
        guitarTypes: checkGuitarTypes(mockGuitarStrings),
      },
    });
  });

  it('should set default guitar prices', () => {
    expect(
      guitarData(guitarInitialState, setDefaultGuitarPrices(mockPriceMin, mockPriceMax)),
    ).toEqual({
      ...guitarInitialState,
      filter: {
        ...guitarInitialState.filter,
        defaultPriceMin: mockPriceMin,
        defaultPriceMax: mockPriceMax,
      },
    });
  });

  it('should set guitar price min', () => {
    expect(
      guitarData(guitarInitialState, setGuitarPriceMin(mockPriceMin)),
    ).toEqual({
      ...guitarInitialState,
      options: {
        ...guitarInitialState.options,
        minPrice: [mockPriceMin],
      },
    });
  });

  it('should set guitar price max', () => {
    expect(
      guitarData(guitarInitialState, setGuitarPriceMax(mockPriceMax)),
    ).toEqual({
      ...guitarInitialState,
      options: {
        ...guitarInitialState.options,
        maxPrice: [mockPriceMax],
      },
    });
  });

  it('should set options', () => {
    expect(
      guitarData(guitarInitialState, setOptions(AppRoute.Root)),
    ).toEqual({
      ...guitarInitialState,
      options: adaptSearchParamsToStore(guitarInitialState.options, AppRoute.Root),
      filter: {
        ...guitarInitialState.filter,
        guitarStrings: guitarInitialState.options.stringCount,
        guitarTypes: guitarInitialState.options.guitarTypes,
      },
    });
  });

  it('should set catalog page', () => {
    expect(
      guitarData(guitarInitialState, setCatalogPage(mockCatalogPage)),
    ).toEqual({
      ...guitarInitialState,
      options: {
        ...guitarInitialState.options,
        guitarsFrom: [changeCatalogPage(mockCatalogPage)],
      },
    });
  });

  it('should set status is loading guitars', () => {
    expect(
      guitarData(guitarInitialState, isLoadingGuitars(mockLoadingStatus)),
    ).toEqual({
      ...guitarInitialState,
      guitars: {
        ...guitarInitialState.guitars,
        isLoading: mockLoadingStatus,
      },
    });
  });

  it('should reset main page data', () => {
    expect(
      guitarData(guitarInitialState, resetMainPageData()),
    ).toEqual({
      ...guitarInitialState,
      isLoading: guitarInitialState.isLoading,
      isError: guitarInitialState.isError,
    });
  });
});
