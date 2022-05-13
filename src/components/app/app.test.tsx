import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {AppRoute} from '../../const';
import {NameSpace} from '../../store/reducers/root-reducer';
import guitarInitialState from '../../store/reducers/guitar-data/guitar-initial-state';

import App from './app';

const history = createMemoryHistory();

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  [NameSpace.Guitar]: {
    ...guitarInitialState,
  },
});

const renderTestingComponent = (path: string) => {
  history.push(path);

  return render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
  );
};


describe('App component', () => {
  test('main page route works correctly', () => {
    renderTestingComponent(AppRoute.Root);

    expect(history.location.pathname).toBe(AppRoute.Root);
  });

  test('cart page route works correctly', () => {
    renderTestingComponent(AppRoute.Cart);

    expect(history.location.pathname).toBe(AppRoute.Cart);
  });
});
