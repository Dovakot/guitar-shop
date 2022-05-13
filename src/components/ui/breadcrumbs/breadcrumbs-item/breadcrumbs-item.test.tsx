import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

import {NavLinkTitle, AppRoute} from '../../../../const';

import BreadcrumbsItem from './breadcrumbs-item';

const history = createMemoryHistory();

const renderTestingComponent = () => render(
  <Router history={history}>
    <BreadcrumbsItem
      id="root"
      name={NavLinkTitle.Root}
      route={AppRoute.Root}
    />
  </Router>,
);

describe('BreadcrumbsItem component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getByText(NavLinkTitle.Root)).toBeInTheDocument();
  });

  test('should add class name to active link', () => {
    renderTestingComponent();

    history.replace(AppRoute.Root);
    expect(screen.getByTestId('breadcrumbs-root')).toHaveClass('link--current');
  });
});
