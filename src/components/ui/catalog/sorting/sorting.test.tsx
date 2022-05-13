import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import guitarInitialState from '../../../../store/reducers/guitar-data/guitar-initial-state';

import Sorting from './sorting';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
  },
});

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
