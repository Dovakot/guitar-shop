import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {mockInitialState} from '../../../../mock/store-mock';

import Sorting from './sorting';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);

describe('Sorting component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <Sorting />
      </Provider>,
    );

    expect(screen.getAllByTestId('sort-type-button')).toHaveLength(2);
    expect(screen.getAllByTestId('sort-order-button')).toHaveLength(2);
  });
});
