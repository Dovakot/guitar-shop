import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {AxiosInstance} from 'axios';

import {GeneratedParams} from './types';
import {Guitars, Guitar, GuitarComments} from './guitar-types';
import {rootReducer} from '../store/reducers/root-reducer';

type OrderConfig = {
  count: number,
  price: number,
  amount: number,
};

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
  guitar: {
    name: string,
    data: Guitar,
    isError: boolean,
    isLoading: boolean,
  },
  guitars: Guitars,
  foundGuitars: Guitars,
  guitarCount: number,
  isLoading: boolean,
};

type ReviewData = {
  reviews: GuitarComments,
  shownReviews: GuitarComments,
  totalCount: number,
  count: number,
  isLoading: boolean,
};

type CartData = {
  preorder: {
    data: Guitar,
    isDelete: boolean,
    isHidden: boolean,
  },
  order: {
    data: Guitars,
    orderCount: number,
    isError: boolean,
    isLoading: boolean,
  },
  orderConfig: {
    [key: string]: OrderConfig,
  },
  coupon: {
    percent: number,
    name: string,
  },
  totalAmount: number,
  discount: number,
  toPay: number,
  totalCount: number,
};

type RootState = ReturnType<typeof rootReducer>;
type RootStateIndex = keyof RootState;

type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  RootState,
  AxiosInstance,
  Action
>

type RootStatePartial<T = CatalogData | ProductData | GeneratedParams | ReviewData | CartData> = {
  [P in keyof T]?: T[P];
};

export type {
  OrderConfig,
  CatalogData,
  ProductData,
  ReviewData,
  CartData,
  RootState,
  RootStateIndex,
  ThunkActionResult,
  RootStatePartial
};
