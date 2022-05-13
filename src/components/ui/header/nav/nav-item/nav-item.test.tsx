import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import {AppRoute, NavLinkTitle} from '../../../../../const';

import NavItem from './nav-item';

const renderTestingComponent = () => render(
  <BrowserRouter>
    <NavItem
      id="catalog"
      name={NavLinkTitle.Catalog}
      currentLink={AppRoute.Catalog}
    />
  </BrowserRouter>,
);

describe('NavItem component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();
    expect(screen.getByText(NavLinkTitle.Catalog)).toBeInTheDocument();
  });

  test('should add the class name of the link that was clicked', () => {
    renderTestingComponent();

    const linkCatalog = screen.getByTestId('nav-link-catalog');

    fireEvent.click(linkCatalog);
    expect(linkCatalog).toHaveClass('link--current');
  });
});
