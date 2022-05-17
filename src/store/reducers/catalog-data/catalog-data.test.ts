import {UNKNOWN_ACTION} from '../../../const';
import {getCatalogTotalPages} from '../../../utils/pagination-utils';
import {checkGuitarTypes, checkGuitarStrings} from '../../../utils/filter-utils';
import catalogInitialState from './catalog-initial-state';

import catalogData, {
  setCatalogPages,
  setGuitarTypesFilter,
  setGuitarStringsFilter,
  setDefaultPriceFilter,
  resetCatalogData,
  isLoadingCatalog
} from './catalog-data';

import {
  mockTotalCount,
  mockLoadingStatus,
  mockGuitarTypes,
  mockGuitarStrings,
  mockDefaultPrices
} from '../../../mock/mock';

describe('Reducer: Catalog', () => {
  it('without additional parameters should return initial state', () => {
    expect(catalogData(void 0, UNKNOWN_ACTION)).toEqual(catalogInitialState);
  });

  it('should set catalog page', () => {
    expect(
      catalogData(catalogInitialState, setCatalogPages(mockTotalCount)),
    ).toEqual({
      ...catalogInitialState,
      pages: getCatalogTotalPages(mockTotalCount),
      totalCount: mockTotalCount,
    });
  });

  it('should set guitar types', () => {
    expect(
      catalogData(catalogInitialState, setGuitarTypesFilter(mockGuitarStrings)),
    ).toEqual({
      ...catalogInitialState,
      guitarTypes: checkGuitarTypes(mockGuitarStrings),
    });
  });

  it('should set guitar strings', () => {
    expect(
      catalogData(catalogInitialState, setGuitarStringsFilter(mockGuitarTypes)),
    ).toEqual({
      ...catalogInitialState,
      guitarStrings: checkGuitarStrings(mockGuitarTypes),
    });
  });

  it('should set default guitar prices', () => {
    expect(
      catalogData(catalogInitialState, setDefaultPriceFilter(mockDefaultPrices)),
    ).toEqual({
      ...catalogInitialState,
      defaultMinPrice: mockDefaultPrices.minPrice,
      defaultMaxPrice: mockDefaultPrices.maxPrice,
    });
  });

  it('should reset main page data', () => {
    expect(
      catalogData(catalogInitialState, resetCatalogData()),
    ).toEqual({
      ...catalogInitialState,
    });
  });

  it('should set status is loading', () => {
    expect(
      catalogData(catalogInitialState, isLoadingCatalog(mockLoadingStatus)),
    ).toEqual({
      ...catalogInitialState,
      isLoading: mockLoadingStatus,
      isError: mockLoadingStatus,
    });
  });
});
