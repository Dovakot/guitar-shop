import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import {getMockState} from '../../../../mock/store-mock';

import Pagination from './pagination';

const mockStore = configureMockStore();
const mockState = getMockState(NameSpace.Catalog, {
  pages: [1, 2, 3],
});

const store = mockStore(mockState);

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
