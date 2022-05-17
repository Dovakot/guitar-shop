import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getSortParams = (state: RootState) => ({
  sortType: state[NameSpace.QueryString].sortType,
  sortOrder: state[NameSpace.QueryString].sortOrder,
});

const getFilterParams = (state: RootState) => ({
  checkedGuitarStrings: state[NameSpace.QueryString].stringCount,
  checkedGuitarTypes: state[NameSpace.QueryString].guitarTypes,
});

const getPriceParams = (state: RootState) => ({
  minPrice: state[NameSpace.QueryString].minPrice,
  maxPrice: state[NameSpace.QueryString].maxPrice,
});

export {
  getSortParams,
  getFilterParams,
  getPriceParams
};
