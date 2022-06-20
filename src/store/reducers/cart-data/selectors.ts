import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getPreorder = (state: RootState) => state[NameSpace.Cart].preorder;

const getOrderData = (state: RootState) => state[NameSpace.Cart].order;

const getOrderConfig = (state: RootState) => state[NameSpace.Cart].orderConfig;

const getOrderCount = (state: RootState) => state[NameSpace.Cart].totalCount;

const getTotalInfo = (state: RootState) => state[NameSpace.Cart].totalAmount;

const getStateModalPreorder = (state: RootState) => ({
  isModalPreorderHidden: state[NameSpace.Cart].isModalHidden,
  isUpdateTypeDelete: state[NameSpace.Cart].isDelete,
});

export {
  getPreorder,
  getOrderData,
  getOrderConfig,
  getOrderCount,
  getTotalInfo,
  getStateModalPreorder
};
