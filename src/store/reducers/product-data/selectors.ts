import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getGuitars = (state: RootState) => ({
  guitars: state[NameSpace.Product].guitars,
  isLoading: state[NameSpace.Product].isLoading,
});

const getFoundGuitars = (state: RootState) => ({
  foundGuitars: state[NameSpace.Product].foundGuitars,
  guitarCount: state[NameSpace.Product].guitarCount,
});

export {
  getGuitars,
  getFoundGuitars
};
