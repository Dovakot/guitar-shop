import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {mockGuitar} from '../../../mock/mock';
import {mockInitialState} from '../../../mock/store-mock';

import GuitarCard from './guitar-card';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockInitialState);

describe('GuitarCard component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GuitarCard
            {...mockGuitar}
          />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
    expect(screen.getByTestId('reviews')).toBeInTheDocument();
    expect(screen.getAllByTestId('breadcrumbs-item')).toHaveLength(3);
    expect(screen.getAllByTestId('icon-full-star')).toHaveLength(5);
    expect(screen.getAllByTestId('tab-link')).toHaveLength(2);
  });
});
