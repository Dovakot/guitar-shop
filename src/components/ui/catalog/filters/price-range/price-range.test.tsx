import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {mockInitialState} from '../../../../../mock/store-mock';

import PriceRange from './price-range';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);

describe('PriceRange component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <PriceRange
          getGuitarsForDefaultPage={jest.fn()}
        />
      </Provider>,
    );

    expect(screen.getAllByTestId('price-field')).toHaveLength(2);
  });
});
