import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getStatusIsLoading = (state: RootState) => ({
  isLoading: state[NameSpace.Guitar].isLoading,
  isError: state[NameSpace.Guitar].isError,
});

const getDefaultGuitarPrice = (state: RootState) => ({
  defaultPriceMin: state[NameSpace.Guitar].filter.defaultPriceMin,
  defaultPriceMax: state[NameSpace.Guitar].filter.defaultPriceMax,
});

const getGuitarPrice = (state: RootState) => ({
  minPrice: state[NameSpace.Guitar].options.minPrice[0],
  maxPrice: state[NameSpace.Guitar].options.maxPrice[0],
});

const getGuitars = (state: RootState) => state[NameSpace.Guitar].guitars;

const getFoundGuitars = (state: RootState) => state[NameSpace.Guitar].search;

const getSortType = (state: RootState) => state[NameSpace.Guitar].options.sortType;
const getSortOrder = (state: RootState) => state[NameSpace.Guitar].options.sortOrder;

const getGuitarStrings = (state: RootState) => state[NameSpace.Guitar].options.stringCount;
const getGuitarTypes = (state: RootState) => state[NameSpace.Guitar].options.guitarTypes;

const getValidatedGuitarTypes = (state: RootState) => state[NameSpace.Guitar].filter.guitarTypes;
const getValidatedGuitarStrings = (state: RootState) => state[NameSpace.Guitar].filter.guitarStrings;

export {
  getStatusIsLoading,
  getDefaultGuitarPrice,
  getGuitars,
  getFoundGuitars,
  getSortType,
  getGuitarPrice,
  getValidatedGuitarTypes,
  getValidatedGuitarStrings,
  getGuitarTypes,
  getGuitarStrings,
  getSortOrder
};
