import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {AxiosInstance} from 'axios';

import {Guitars} from './guitar-types';
import {rootReducer} from '../store/reducers/root-reducer';

type CatalogData = {
  defaultMinPrice: number,
  defaultMaxPrice: number,
  totalCount: number,
  pages: number[],
  guitarTypes: string[],
  guitarStrings: string[],
  isLoading: boolean,
  isError: boolean,
};

type ProductgData = {
  guitars: Guitars,
  foundGuitars: Guitars,
  guitarCount: number,
  isLoading: boolean,
};

type RootState = ReturnType<typeof rootReducer>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  RootState,
  AxiosInstance,
  Action
>

export type {
  CatalogData,
  ProductgData,
  RootState,
  ThunkActionResult
};
