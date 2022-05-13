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

describe('Footer: Nav component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getAllByTestId('footer-nav-item')).toHaveLength(5);
  });

  test('should replace route on clicked link', () => {
    renderTestingComponent();

    history.replace(AppRoute.Cart);
    userEvent.click(screen.getByTestId('footer-link-stores'));

    expect(history.entries.length).toBeGreaterThan(1);
    expect(history.entries[1].pathname).toEqual(AppRoute.Stores);
  });
});
