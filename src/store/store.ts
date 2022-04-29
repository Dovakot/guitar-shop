import {configureStore} from '@reduxjs/toolkit';

import {rootReducer} from './reducers/root-reducer';
import createApi from '../services/api';
import redirect from './middlewares/redirect';

const api = createApi();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }).concat(redirect),
});

export default store;
