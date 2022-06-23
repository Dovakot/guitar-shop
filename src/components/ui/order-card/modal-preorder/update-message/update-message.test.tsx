import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../../../store/reducers/root-reducer';
import {getMockState} from '../../../../../mock/store-mock';
import {mockGuitar} from '../../../../../mock/mock';
import cartInitialState from '../../../../../store/reducers/cart-data/cart-initial-state';

import UpdateMessage from './update-message';

const mockStore = configureMockStore();

const renderTestingComponent = (isDelete = false) => {
  const mockState = getMockState(NameSpace.Cart, {
    ...cartInitialState,
    preorder:  {
      data: mockGuitar,
      isHidden: false,
      isDelete,
    },
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <UpdateMessage
          onButtonAddClick={jest.fn()}
          onButtonDeleteClick={jest.fn()}
          onButtonReturnClick={jest.fn()}
        />
      </BrowserRouter>
    </Provider>,
  );
};

describe('UpdateMessage component', () => {
  test('should be rendered correctly (Add to Cart)', () => {
    renderTestingComponent();

    expect(screen.getByText('Добавить товар в корзину')).toBeInTheDocument();
  });

  test('should be rendered correctly (Remove from Cart)', () => {
    renderTestingComponent(true);

    expect(screen.getByText('Удалить этот товар?')).toBeInTheDocument();
  });
});
