import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import {NameSpace} from '../../../../store/reducers/root-reducer';
import {getMockState} from '../../../../mock/store-mock';

import TotaInfo from './total-info';

const mockStore = configureMockStore();

const renderTestingComponent = () => {
  const mockState = getMockState(NameSpace.Cart, {
    totalAmount: 10000,
    discount: 2000,
    toPay: 8000,
  });

  const store = mockStore(mockState);

  return render(
    <Provider store={store}>
      <TotaInfo />
    </Provider>,
  );
};

describe('TotaInfo component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getByText(/10 000/i)).toBeInTheDocument();
  });
});
