import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import {getMockState} from '../../../../mock/store-mock';
import cartInitialState from '../../../../store/reducers/cart-data/cart-initial-state';

import CouponForm from './coupon-form';

const mockStore = configureMockStore([thunk]);

const renderTestingComponent = (name = '', percent = 0) => {
  const mockState = getMockState(NameSpace.Cart, {
    ...cartInitialState,
    coupon: {
      percent,
      name,
    },
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <CouponForm />
      </BrowserRouter>
    </Provider>,
  );
};

describe('CouponForm component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();
    expect(screen.getByText('Промокод')).toBeInTheDocument();
  });

  test('should be shown after entering the promo code', () => {
    renderTestingComponent('Ивасик');
    expect(screen.getByDisplayValue('Ивасик')).toBeInTheDocument();
  });
});
