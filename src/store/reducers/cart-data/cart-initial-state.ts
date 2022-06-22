import {CartData} from '../../../types/store-types';
import {Guitar} from '../../../types/guitar-types';

const cartInitialState: CartData = {
  preorder:  {
    data: {} as Guitar,
    isDelete: false,
    isHidden: true,
  },
  order: {
    data: [],
    orderCount: 0,
    isLoading: false,
    isError: false,
  },
  orderConfig: {},
  coupon: {
    percent: 0,
    name: '',
  },
  totalCount: 0,
  totalAmount: 0,
  discount: 0,
  toPay: 0,
};

export default cartInitialState;
