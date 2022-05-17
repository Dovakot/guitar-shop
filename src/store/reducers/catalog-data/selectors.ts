import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getIsLoadingCatalog = (state: RootState) => ({
  isLoading: state[NameSpace.Catalog].isLoading,
  isError: state[NameSpace.Catalog].isError,
});

const getGuitarPrice = (state: RootState) => ({
  defaultMinPrice: state[NameSpace.Catalog].defaultMinPrice,
  defaultMaxPrice: state[NameSpace.Catalog].defaultMaxPrice,
});

const getValidatedFilterValues = (state: RootState) => ({
  validatedGuitarTypes: state[NameSpace.Catalog].guitarTypes,
  validatedGuitarStrings: state[NameSpace.Catalog].guitarStrings,
});

const getCatalogPages = (state: RootState) => state[NameSpace.Catalog].pages;

export {
  getIsLoadingCatalog,
  getGuitarPrice,
  getValidatedFilterValues,
  getCatalogPages
};
