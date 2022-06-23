import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {mockInitialState} from '../../../mock/store-mock';

import OrderCard from './order-card';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);

describe('OrderCard component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OrderCard />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByTestId('coupon-form')).toBeInTheDocument();
    expect(screen.getByTestId('total-info')).toBeInTheDocument();
  });
});
