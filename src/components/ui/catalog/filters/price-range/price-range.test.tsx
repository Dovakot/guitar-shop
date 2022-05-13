import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../../../store/reducers/root-reducer';
import guitarInitialState from '../../../../../store/reducers/guitar-data/guitar-initial-state';

import PriceRange from './price-range';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
  },
});

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
