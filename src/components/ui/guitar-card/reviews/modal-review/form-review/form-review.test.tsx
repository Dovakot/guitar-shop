import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {mockGuitar} from '../../../../../../mock/mock';
import {mockInitialState} from '../../../../../../mock/store-mock';

import FormReview from './form-review';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockInitialState);

describe('FormReview component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormReview
            guitarId={mockGuitar.id}
            guitarName={mockGuitar.name}
            setModalType={jest.fn()}
          />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(mockGuitar.name)).toBeInTheDocument();
  });
});
