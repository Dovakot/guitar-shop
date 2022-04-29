import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getStatusIsLoading = (state: RootState) => ({
  isLoading: state[NameSpace.Guitar].isLoading,
  isError: state[NameSpace.Guitar].isError,
});

const getGuitars = (state: RootState) => state[NameSpace.Guitar].guitars;
const getFoundGuitars = (state: RootState) => state[NameSpace.Guitar].search;
const getGuitarOptions = (state: RootState) => state[NameSpace.Guitar].options;
const getSortType = (state: RootState) => state[NameSpace.Guitar].options.sortType;
const getSortOrder = (state: RootState) => state[NameSpace.Guitar].options.sortOrder;

export {
  getStatusIsLoading,
  getGuitars,
  getFoundGuitars,
  getGuitarOptions,
  getSortType,
  getSortOrder
};
