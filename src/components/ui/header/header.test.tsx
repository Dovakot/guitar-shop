import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../store/reducers/root-reducer';
import guitarInitialState from '../../../store/reducers/guitar-data/guitar-initial-state';

import Header from './header';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
  },
});

describe('Header component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
    expect(screen.getByTestId('header-search')).toBeInTheDocument();
    expect(screen.getByText('Перейти в корзину')).toBeInTheDocument();
  });
});
