import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {MessageText} from '../../../const';
import {NameSpace} from '../../../store/reducers/root-reducer';
import {getMockState} from '../../../mock/store-mock';
import cartInitialState from '../../../store/reducers/cart-data/cart-initial-state';

import Cart from './cart';

const mockStore = configureMockStore([thunk]);

const renderTestingComponent = (isLoading: boolean, isError: boolean) => {
  const mockState = getMockState(NameSpace.Cart, {
    ...cartInitialState,
    order: {
      ...cartInitialState.order,
      isLoading: isLoading,
      isError: isError,
    },
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </Provider>,
  );
};

describe('Cart component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent(false, false);

    expect(screen.getByText('Ваша корзина пуста.')).toBeInTheDocument();
  });

  test('should display correctly during loading', () => {
    renderTestingComponent(true, false);

    expect(screen.getByText(MessageText.Loading)).toBeInTheDocument();
  });

  test('should display correctly if error', () => {
    renderTestingComponent(true, true);

    expect(screen.getByText('Ошибка загрузки')).toBeInTheDocument();
  });
});
