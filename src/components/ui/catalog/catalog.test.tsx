import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {mockInitialState} from '../../../mock/store-mock';

import Catalog from './catalog';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);

describe('Catalog component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Catalog />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByTestId('catalog-filter')).toBeInTheDocument();
    expect(screen.getByTestId('catalog-cards')).toBeInTheDocument();
    expect(screen.getByTestId('catalog-pagination')).toBeInTheDocument();
    expect(screen.getByTestId('catalog-sort')).toBeInTheDocument();
  });
});
