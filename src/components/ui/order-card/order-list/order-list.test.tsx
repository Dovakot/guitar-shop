import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import {Guitars} from '../../../../types/guitar-types';
import {mockCatalogGuitars} from '../../../../mock/mock';
import {getMockState} from '../../../../mock/store-mock';
import cartInitialState from '../../../../store/reducers/cart-data/cart-initial-state';

import OrderList from './order-list';

const mockStore = configureMockStore();
const mockCart = mockCatalogGuitars.slice(0, 1);
const {id} = mockCart[0];

const renderTestingComponent = (data: Guitars) => {
  const mockState = getMockState(NameSpace.Cart, {
    ...cartInitialState,
    order: {
      ...cartInitialState.order,
      data,
      orderCount: data.length,
    },
    orderConfig: {
      [+id]: {
        amount: 1,
        count: 1,
        price: 1,
      },
    },
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <OrderList />
      </BrowserRouter>
    </Provider>,
  );
};

describe('OrderList component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent(mockCart);

    expect(screen.getAllByTestId('cart-item')).toHaveLength(mockCart.length);
  });
});
