import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {AxiosInstance} from 'axios';

import {rootReducer} from '../store/reducers/root-reducer';

type RootState = ReturnType<typeof rootReducer>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  RootState,
  AxiosInstance,
  Action
>

export type {
  RootState,
  ThunkActionResult
};
