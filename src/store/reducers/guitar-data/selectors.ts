import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getGuitars = (state: RootState) => state[NameSpace.Guitar].guitars;
const getFoundGuitars = (state: RootState) => state[NameSpace.Guitar].search;

export {
  getGuitars,
  getFoundGuitars
};
