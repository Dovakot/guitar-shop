import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {mockInitialState} from '../../../../../mock/store-mock';

import GuitarTypeList from './guitar-type-list';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockInitialState);

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
