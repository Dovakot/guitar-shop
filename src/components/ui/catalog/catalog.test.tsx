import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../store/reducers/root-reducer';
import guitarInitialState from '../../../store/reducers/guitar-data/guitar-initial-state';

import Catalog from './catalog';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
  },
});

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
