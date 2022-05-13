import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import {AppRoute, NavLinkTitle} from '../../../../../const';

import NavItem from './nav-item';

describe('Footer: NavItem component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <NavItem
          id="stores"
          name={NavLinkTitle.Stores}
          currentLink={AppRoute.Stores}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText(NavLinkTitle.Stores)).toBeInTheDocument();
  });
});
