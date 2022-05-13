import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../store/reducers/root-reducer';
import guitarInitialState from '../../store/reducers/guitar-data/guitar-initial-state';

import BasePage from './base-page';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
  },
});

describe('BasePage component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BasePage title='Test' />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('page-content')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
