import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {mockInitialState} from '../../../../../mock/store-mock';

import GuitarStringList from './guitar-string-list';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockInitialState);

describe('GuitarStringList component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <GuitarStringList
          getGuitarsForDefaultPage={jest.fn()}
        />
      </Provider>,
    );

    expect(screen.getAllByTestId('checkbox')).toHaveLength(4);
  });
});
