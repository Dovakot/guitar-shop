import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {MessageText} from '../../../../const';
import {NameSpace} from '../../../../store/reducers/root-reducer';
import {Guitars} from '../../../../types/guitar-types';
import {mockCatalogGuitars} from '../../../../mock/mock';
import {getMockState} from '../../../../mock/store-mock';

import GuitarList from './guitar-list';

const mockStore = configureMockStore();

const renderTestingComponent = (guitars: Guitars = [], isLoading = false) => {
  const mockState = getMockState(NameSpace.Product, {
    guitars,
    isLoading,
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <GuitarList />
      </BrowserRouter>
    </Provider>,
  );
};

describe('GuitarList component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent(mockCatalogGuitars);

    expect(screen.getAllByTestId('small-card')).toHaveLength(mockCatalogGuitars.length);
  });

  test('should display correctly during loading', () => {
    renderTestingComponent(undefined, true);

    expect(screen.getByText(MessageText.Loading)).toBeInTheDocument();
  });

  test('should display correctly if the array is empty', () => {
    renderTestingComponent();

    expect(screen.getByText(MessageText.NotFound)).toBeInTheDocument();
  });
});
