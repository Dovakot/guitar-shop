import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {AxiosInstance} from 'axios';

import {GeneratedParams} from './types';
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

type ProductData = {
  guitars: Guitars,
  foundGuitars: Guitars,
  guitarCount: number,
  isLoading: boolean,
};

type RootState = ReturnType<typeof rootReducer>;
type RootStateIndex = keyof RootState;

type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  RootState,
  AxiosInstance,
  Action
>

type RootStatePartial<T = CatalogData | ProductData | GeneratedParams> = {
  [P in keyof T]?: T[P];
};

export type {
  CatalogData,
  ProductData,
  RootState,
  RootStateIndex,
  ThunkActionResult,
  RootStatePartial
};
