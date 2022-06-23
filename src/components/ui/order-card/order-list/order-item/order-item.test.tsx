import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {mockGuitar} from '../../../../../mock/mock';
import cartInitialState from '../../../../../store/reducers/cart-data/cart-initial-state';

import OrderItem from './order-item';

const mockStore = configureMockStore([thunk]);

const renderTestingComponent = (orderCount = 1) => {
  const store = mockStore(cartInitialState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <OrderItem
          orderAmount={2}
          orderCount={orderCount}
          fieldName="1-count"
          {...mockGuitar}
        />
      </BrowserRouter>
    </Provider>,
  );
};

describe('OrderItem component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();
    expect(screen.getByText(mockGuitar.name)).toBeInTheDocument();
  });

  test('should display correctly during button click', () => {
    renderTestingComponent(2);

    userEvent.click(screen.getByTestId('quantity-button'));
    expect(screen.getByTestId('quantity-input')).toHaveValue(2);

  });

  test('should display correctly during input change', () => {
    renderTestingComponent(99);

    const field = screen.getByTestId('quantity-input');

    fireEvent.change(field, {target: {value: '99'}});
    expect(field).toHaveValue(99);
  });
});
