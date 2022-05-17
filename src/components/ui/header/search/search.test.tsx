import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import {mockCatalogGuitars} from '../../../../mock/mock';
import {getMockState} from '../../../../mock/store-mock';

import Search from './search';

const mockStore = configureMockStore();
const mockState = getMockState(NameSpace.Product, {
  foundGuitars: mockCatalogGuitars,
  guitarCount: mockCatalogGuitars.length,
});

const store = mockStore(mockState);

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
