import {UNKNOWN_ACTION} from '../../../const';
import productInitialState from './product-initial-state';

import productData, {
  loadGuitars,
  loadGuitar,
  setGuitarName,
  searchGuitars,
  resetFoundGuitars,
  isLoadingGuitars
} from './product-data';

import {
  mockGuitar,
  mockCatalogGuitars
} from '../../../mock/mock';

describe('Reducer: Product', () => {
  it('without additional parameters should return initial state', () => {
    expect(productData(void 0, UNKNOWN_ACTION)).toEqual(productInitialState);
  });

  it('should load catalog guitars data', () => {
    expect(
      productData(productInitialState, loadGuitars(mockCatalogGuitars)),
    ).toEqual({
      ...productInitialState,
      guitars: mockCatalogGuitars,
    });
  });

  it('should load guitar data', () => {
    expect(
      productData(productInitialState, loadGuitar({data: mockGuitar, isError: false})),
    ).toEqual({
      ...productInitialState,
      guitar: {
        ...productInitialState.guitar,
        data: mockGuitar,
        isLoading: false,
        isError: false,
      },
    });
  });

  it('should set guitar name', () => {
    expect(
      productData(productInitialState, setGuitarName(mockGuitar.name)),
    ).toEqual({
      ...productInitialState,
      guitar: {
        ...productInitialState.guitar,
        name: mockGuitar.name,
      },
    });
  });

  it('should set found guitars data', () => {
    expect(
      productData(productInitialState, searchGuitars(mockCatalogGuitars)),
    ).toEqual({
      ...productInitialState,
      foundGuitars: mockCatalogGuitars,
      guitarCount: mockCatalogGuitars.length,
    });
  });

  it('should reset found guitars data', () => {
    expect(
      productData(productInitialState, resetFoundGuitars()),
    ).toEqual({
      ...productInitialState,
      foundGuitars: productInitialState.foundGuitars,
      guitarCount: productInitialState.guitarCount,
    });
  });

  it('should set status is loading', () => {
    expect(
      productData(productInitialState, isLoadingGuitars(true)),
    ).toEqual({
      ...productInitialState,
      isLoading: true,
    });
  });
});
