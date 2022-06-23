import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import cartInitialState from '../../../../store/reducers/cart-data/cart-initial-state';
import {getMockState} from '../../../../mock/store-mock';
import {mockGuitar} from '../../../../mock/mock';

import ModalPreorder from './modal-preorder';

const mockStore = configureMockStore();

const renderTestingComponent = () => {
  const mockState = getMockState(NameSpace.Cart, {
    ...cartInitialState,
    preorder:  {
      data: mockGuitar,
      isHidden: false,
      isDelete: false,
    },
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ModalPreorder />
      </BrowserRouter>
    </Provider>,
  );
};

describe('ModalPreorder component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getByText('Добавить товар в корзину')).toBeInTheDocument();
  });
});
