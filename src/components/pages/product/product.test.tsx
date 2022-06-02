import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {MessageText} from '../../../const';
import {NameSpace} from '../../../store/reducers/root-reducer';
import {mockGuitar} from '../../../mock/mock';
import {getMockState} from '../../../mock/store-mock';
import productInitialState from '../../../store/reducers/product-data/product-initial-state';

import Product from './product';

const mockStore = configureMockStore([thunk]);

const renderTestingComponent = (isLoading: boolean, isError: boolean) => {
  const mockState = getMockState(NameSpace.Product, {
    ...productInitialState,
    guitar: {
      name: mockGuitar.name,
      data: mockGuitar,
      isLoading: isLoading,
      isError: isError,
    },
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    </Provider>,
  );
};

describe('Product component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent(false, false);

    expect(screen.getAllByText(mockGuitar.name)).toHaveLength(3);
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
