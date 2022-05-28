import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getGuitar = (state: RootState) => ({
  guitar: state[NameSpace.Product].guitar.data,
  isLoading: state[NameSpace.Product].guitar.isLoading,
  isError: state[NameSpace.Product].guitar.isError,
});

const getGuitars = (state: RootState) => ({
  guitars: state[NameSpace.Product].guitars,
  isLoading: state[NameSpace.Product].isLoading,
});

const getFoundGuitars = (state: RootState) => ({
  foundGuitars: state[NameSpace.Product].foundGuitars,
  guitarCount: state[NameSpace.Product].guitarCount,
});

const getGuitarName = (state: RootState) => state[NameSpace.Product].guitar.name;

export {
  getGuitar,
  getGuitars,
  getFoundGuitars,
  getGuitarName
};
