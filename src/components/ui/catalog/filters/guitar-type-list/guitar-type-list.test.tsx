import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {NameSpace} from '../../../../../store/reducers/root-reducer';
import guitarInitialState from '../../../../../store/reducers/guitar-data/guitar-initial-state';

import GuitarTypeList from './guitar-type-list';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
  },
});

describe('GuitarTypeList component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <GuitarTypeList
          getGuitarsForDefaultPage={jest.fn()}
        />
      </Provider>,
    );

    expect(screen.getAllByTestId('checkbox')).toHaveLength(3);
  });
});
