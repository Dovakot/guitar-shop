import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {MessageText} from '../../../const';
import {mockInitialState} from '../../../mock/store-mock';

import LoadingCatalog from './loading-catalog';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockInitialState);

const renderTestingComponent = (isError: boolean) => render(
  <Provider store={store}>
    <BrowserRouter>
      <LoadingCatalog isError={isError} />
    </BrowserRouter>
  </Provider>,
);

describe('LoadingCatalog component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent(false);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByText(MessageText.Loading)).toBeInTheDocument();
  });

  test('should be an error text in case of failed data upload', () => {
    renderTestingComponent(true);

    expect(screen.getByText('Ошибка загрузки')).toBeInTheDocument();
  });
});
