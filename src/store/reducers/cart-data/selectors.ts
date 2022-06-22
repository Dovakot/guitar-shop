import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getPreorder = (state: RootState) => state[NameSpace.Cart].preorder.data;

const getOrderData = (state: RootState) => state[NameSpace.Cart].order;

const getOrderConfig = (state: RootState) => state[NameSpace.Cart].orderConfig;

const getOrderCount = (state: RootState) => state[NameSpace.Cart].totalCount;

const getCouponName = (state: RootState) => state[NameSpace.Cart].coupon.name;

const getTotalInfo = (state: RootState) => ({
  totalAmount: state[NameSpace.Cart].totalAmount,
  discount: state[NameSpace.Cart].discount,
  toPay: state[NameSpace.Cart].toPay,
});

const getStateModalPreorder = (state: RootState) => ({
  isModalPreorderHidden: state[NameSpace.Cart].preorder.isHidden,
  isUpdateTypeDelete: state[NameSpace.Cart].preorder.isDelete,
});

export {
  getPreorder,
  getOrderData,
  getOrderConfig,
  getOrderCount,
  getCouponName,
  getTotalInfo,
  getStateModalPreorder
};
