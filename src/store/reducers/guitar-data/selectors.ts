import {NameSpace, rootReducer} from '../root-reducer';

type RootState = ReturnType<typeof rootReducer>;

const getGuitars = (state: RootState) => state[NameSpace.Guitar].guitars;

export {
  getGuitars
};
