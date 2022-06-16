import {RootState, RootStatePartial, RootStateIndex} from '../types/store-types';
import {NameSpace} from '../store/reducers/root-reducer';
import catalogInitialState from '../store/reducers/catalog-data/catalog-initial-state';
import productInitialState from '../store/reducers/product-data/product-initial-state';
import queryStringInitialState from '../store/reducers/query-string-data/query-string-initial-state';
import reviewInitialState from '../store/reducers/review-data/review-initial-state';
import cartInitialState from '../store/reducers/cart-data/cart-initial-state';

const mockInitialState: RootState = {
  [NameSpace.Catalog]: {
    ...catalogInitialState,
  },
  [NameSpace.Product]: {
    ...productInitialState,
  },
  [NameSpace.QueryString]: {
    ...queryStringInitialState,
  },
  [NameSpace.Review]: {
    ...reviewInitialState,
  },
  [NameSpace.Cart]: {
    ...cartInitialState,
  },
};

const getMockState = (key: RootStateIndex, values: RootStatePartial) => ({
  ...mockInitialState,
  [key]: {
    ...mockInitialState[key],
    ...values,
  },
});

export {
  mockInitialState,
  getMockState
};
