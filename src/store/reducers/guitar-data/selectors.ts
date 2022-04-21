import {NameSpace, rootReducer} from '../root-reducer';

type RootState = ReturnType<typeof rootReducer>;

const getGuitars = (state: RootState) => state[NameSpace.Guitar].guitars;
const getFoundGuitars = (state: RootState) => state[NameSpace.Guitar].search;

export {
  getGuitars,
  getFoundGuitars
};
