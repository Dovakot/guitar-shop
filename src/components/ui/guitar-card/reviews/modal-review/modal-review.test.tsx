import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {mockGuitar} from '../../../../../mock/mock';
import {mockInitialState} from '../../../../../mock/store-mock';

import ModalReview from './modal-review';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockInitialState);

const renderTestingComponent = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ModalReview
          guitarId={mockGuitar.id}
          guitarName={mockGuitar.name}
        />
      </BrowserRouter>
    </Provider>,
  );
};

describe('ModalReview component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getByText('Оставить отзыв')).toBeInTheDocument();
  });

  test('should display review form', () => {
    renderTestingComponent();

    userEvent.click(screen.getByTestId('btn-feedback'));
    expect(screen.getByTestId('form-review')).toBeInTheDocument();
  });
});
