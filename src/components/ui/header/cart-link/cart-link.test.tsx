import {fireEvent, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import {getMockState} from '../../../../mock/store-mock';

import CartLink from './cart-link';

const mockStore = configureMockStore();

const renderTestingComponent = (totalCount = 0) => {
  const mockState = getMockState(NameSpace.Cart, {
    totalCount,
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <CartLink />
      </BrowserRouter>
    </Provider>,
  );
};

describe('CartLink component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();
    expect(screen.getByText('Перейти в корзину')).toBeInTheDocument();
  });

  test('should add the class name of the link that was clicked', () => {
    renderTestingComponent();

    const linkCatalog = screen.getByTestId('nav-link-cart');

    fireEvent.click(linkCatalog);
    expect(linkCatalog).toHaveClass('link--current');
  });

  test('should be show guitar count added in cart', () => {
    renderTestingComponent(3);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
