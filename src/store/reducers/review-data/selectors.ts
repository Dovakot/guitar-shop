import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getGuitarReviews = (state: RootState) => state[NameSpace.Review];

export {
  getGuitarReviews
};
