import {NameSpace} from '../root-reducer';
import {RootState} from '../../../types/store-types';

const getPreOrder = (state: RootState) => state[NameSpace.Cart].preorder;

const getOrderData = (state: RootState) => state[NameSpace.Cart].order;

const getPreOrderId = (state: RootState) => state[NameSpace.Cart].preorder.id;

const getOrderConfig = (state: RootState) => state[NameSpace.Cart].orderConfig;

const getOrderCount = (state: RootState) => state[NameSpace.Cart].totalCount;

const getTotalInfo = (state: RootState) => state[NameSpace.Cart].totalAmount;

const getStateModalPreorder = (state: RootState) => ({
  isModalPreorderHidden: state[NameSpace.Cart].isModalHidden,
  isUpdateTypeDelete: state[NameSpace.Cart].isDelete,
});

export {
  getPreOrder,
  getOrderData,
  getPreOrderId,
  getOrderConfig,
  getOrderCount,
  getTotalInfo,
  getStateModalPreorder
};
