import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';

import {NavLinkTitle} from '../../../const';
import {fetchOrderData} from '../../../store/api-actions/api-actions';
import {loadOrderData} from '../../../store/reducers/cart-data/cart-data';
import {getOrderData} from '../../../store/reducers/cart-data/selectors';

import BasePage from '../../base-page/base-page';
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs';
import OrderCard from '../../ui/order-card/order-card';
import Loading from '../../ui/loading/loading';
import ModalPreorder from '../../ui/order-card/modal-preorder/modal-preorder';

const getBreadcrumbsItem = (name: string, route: string) => ({
  id: 'cart',
  name,
  route,
});

const getOrderCard = (count: number) => count ? <OrderCard /> : 'Ваша корзина пуста.';

function Cart(): JSX.Element {
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const {orderCount, isLoading, isError} = useSelector(getOrderData);

  const breadcrumbsItem = getBreadcrumbsItem(NavLinkTitle.Cart, pathname);

  useEffect(() => {
    const resetCartPage = async () => await dispatch(
      loadOrderData({data: [], isError: false}),
    );

    dispatch(fetchOrderData());

    return () => {
      resetCartPage();
    };
  }, [dispatch]);

  return (
    <BasePage title={NavLinkTitle.Cart}>
      <Breadcrumbs newItem={breadcrumbsItem} />

      {isLoading
        ? <Loading isError={isError} />
        : getOrderCard(orderCount)}

      <ModalPreorder />
    </BasePage>
  );
}

export default Cart;
