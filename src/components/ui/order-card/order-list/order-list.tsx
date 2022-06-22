import React from 'react';
import {useSelector} from 'react-redux';

import {Guitar} from '../../../../types/guitar-types';
import {getOrderData, getOrderConfig} from '../../../../store/reducers/cart-data/selectors';

import OrderItem from './order-item/order-item';

function OrderList(): JSX.Element {
  const order = useSelector(getOrderConfig);
  const {data} = useSelector(getOrderData);

  const getOrderItem = (item: Guitar, index: number) => {
    const {id} = item;
    const {amount, count} = order[id];
    const fieldName = `${index}-count`;

    return (
      <OrderItem
        key={id}
        orderAmount={amount}
        orderCount={count}
        fieldName={fieldName}
        {...item}
      />
    );
  };

  return (
    <>
      {data.map(getOrderItem)}
    </>
  );
}

export default OrderList;
