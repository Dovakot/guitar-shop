import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import guitarInitialState from '../../../../store/reducers/guitar-data/guitar-initial-state';
import {mockCatalogGuitars} from '../../../../mock/mock';

import Search from './search';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
    search: {
      guitars: mockCatalogGuitars,
      guitarCount: mockCatalogGuitars.length,
    },
  },
});

const renderTestingComponent = () => render(
  <Provider store={store}>
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  </Provider>,
);

describe('Search component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();
    expect(screen.getByText('Начать поиск')).toBeInTheDocument();
  });

  test('should call on change event', () => {
    renderTestingComponent();

    userEvent.type(screen.getByTestId('search'), 'Roman');
    expect(screen.getByDisplayValue(/Roman/i)).toBeInTheDocument();
  });
});
