import {configureStore} from '@reduxjs/toolkit';

import {rootReducer} from './reducers/root-reducer';
import createApi from '../services/api';

const api = createApi();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
});

export default store;
