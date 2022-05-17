import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {mockInitialState} from '../../../../mock/store-mock';

import Filters from './filters';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);

describe('Filters component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <Filters />
      </Provider>,
    );

    expect(screen.getByTestId('price-range')).toBeInTheDocument();
    expect(screen.getAllByTestId('checkbox')).toHaveLength(7);
  });
});
