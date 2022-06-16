import {CartData} from '../../../types/store-types';
import {Guitar} from '../../../types/guitar-types';

const cartInitialState: CartData = {
  preorder: {} as Guitar,
  order: {
    data: [],
    orderCount: 0,
    isLoading: false,
    isError: false,
  },
  orderConfig: {},
  totalAmount: 0,
  totalCount: 0,
  isDelete: false,
  isModalHidden: true,
};

export default cartInitialState;
