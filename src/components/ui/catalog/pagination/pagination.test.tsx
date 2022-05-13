import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import guitarInitialState from '../../../../store/reducers/guitar-data/guitar-initial-state';

import Pagination from './pagination';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
    pages: [1, 2, 3],
  },
});

describe('Pagination component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getAllByTestId(/page-/i)).toHaveLength(5);
  });
});
