import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import guitarInitialState from '../../../../store/reducers/guitar-data/guitar-initial-state';

import Filters from './filters';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
  },
});

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
