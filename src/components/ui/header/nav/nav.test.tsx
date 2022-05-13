import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {AppRoute} from '../../../../const';

import Nav from './nav';

const history = createMemoryHistory();

const renderTestingComponent = () => render(
  <Router history={history}>
    <Nav />
  </Router>,
);

describe('Nav component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getAllByTestId('nav-link')).toHaveLength(3);
  });

  test('should replace route on clicked link', () => {
    renderTestingComponent();

    history.replace(AppRoute.Cart);
    userEvent.click(screen.getByTestId('nav-link-stores'));

    expect(history.entries.length).toBeGreaterThan(1);
    expect(history.entries[1].pathname).toEqual(AppRoute.Stores);
  });
});
