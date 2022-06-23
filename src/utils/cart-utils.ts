import {toast} from 'react-toastify';

import {CartActionType, MAX_COUNT_GUITAR_IN_CART} from '../const';
import {OrderConfig} from '../types/store-types';
import {Guitars} from '../types/guitar-types';

const MAX_PERCENT = 100;

const changeOrderCount = (
  order: OrderConfig,
  totalCount: number,
  totalAmount: number,
  type: number | string,
) => {
  const {count, price, amount} = order;
  let newCount = 0;

  switch (type) {
    case CartActionType.Increase:
      newCount = count + 1;
      break;
    case CartActionType.Decrease:
      newCount = count - 1;
      break;
    default:
      newCount = type as number;
  }

  const newAmount = price * newCount;

  return {
    orderConfig: {count: newCount, amount: newAmount, price},
    totalCount: totalCount + newCount - count,
    totalAmount: totalAmount + newAmount - amount,
  };
};

const addOrder = (id: number, order: OrderConfig, price: number) => {
  let count = 1;
  let amount = price;

  if (order) {
    count += order.count;
    amount *= count;
  }

  return {count, amount, price};
};

const deleteOrder = (id: number, orders: Guitars) => orders.filter((order) => order.id !== id);

const checkQuantityField = (target: HTMLInputElement, сount: number) => {
  const {validity, value} = target;
  const newValue = validity.valid ? +value : сount;

  target.value = newValue.toString();

  return newValue;
};

const showLimitToast = (name: string) => toast
  .info(`Количество «${name}» не должно превышать ${MAX_COUNT_GUITAR_IN_CART} шт.`);

const showInvalidToast = () => toast.error('Промокод не может содержать символы пробела.');

const calculateDiscount = (amount: number, percDiscount: number) => {
  let discount = percDiscount;
  let toPay = amount;

  if (percDiscount) {
    discount = amount / MAX_PERCENT * percDiscount;
    toPay = amount - discount;
  }

  return {toPay, discount};
};

const isInvalidCoupon = (value: string) => /\s/.test(value);

const getGuitarIdsForUrl = (orderConfig: {[key: string]: OrderConfig}) => Object
  .keys(orderConfig).join('&id=');

export {
  changeOrderCount,
  addOrder,
  deleteOrder,
  checkQuantityField,
  showLimitToast,
  showInvalidToast,
  calculateDiscount,
  isInvalidCoupon,
  getGuitarIdsForUrl
};
