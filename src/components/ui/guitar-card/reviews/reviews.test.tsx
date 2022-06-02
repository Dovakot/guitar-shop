import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {MessageText} from '../../../../const';
import {NameSpace} from '../../../../store/reducers/root-reducer';
import {mockGuitar} from '../../../../mock/mock';
import {getMockState} from '../../../../mock/store-mock';

import Reviews from './reviews';

const mockStore = configureMockStore([thunk]);

const renderTestingComponent = (isLoading: boolean, totalCount: number, count: number) => {
  const mockState = getMockState(NameSpace.Review, {
    isLoading,
    totalCount,
    count,
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Reviews
          guitarId={mockGuitar.id}
          guitarName={mockGuitar.name}
        />
      </BrowserRouter>
    </Provider>,
  );
};

describe('Reviews component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent(false, 6, 3);

    expect(screen.getByText('Отзывы')).toBeInTheDocument();
    expect(screen.getByText('Показать еще отзывы')).toBeInTheDocument();
    expect(screen.getByText('Наверх')).toBeInTheDocument();
  });

  test('should display correctly during loading', () => {
    renderTestingComponent(true, 0, 0);

    expect(screen.getByText(MessageText.Loading)).toBeInTheDocument();
    expect(screen.queryByText('Показать еще отзывы')).not.toBeInTheDocument();
    expect(screen.queryByText('Наверх')).not.toBeInTheDocument();
  });

  test('should display correctly if no reviews', () => {
    renderTestingComponent(false, 0, 0);

    expect(screen.getByText(MessageText.NotFound)).toBeInTheDocument();
  });
});
