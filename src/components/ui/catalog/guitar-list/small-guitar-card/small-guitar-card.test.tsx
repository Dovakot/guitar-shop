import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {mockGuitar} from '../../../../../mock/mock';
import {mockInitialState} from '../../../../../mock/store-mock';

import SmallGuitarCard from './small-guitar-card';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);

describe('SmallGuitarCard component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SmallGuitarCard
            {...mockGuitar}
            isToCart={false}
          />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(mockGuitar.name)).toBeInTheDocument();
  });
});
