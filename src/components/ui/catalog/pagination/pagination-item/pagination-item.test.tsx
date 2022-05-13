import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter, generatePath} from 'react-router-dom';

import {AppRoute} from '../../../../../const';

import PaginationItem from './pagination-item';

const currentLink = generatePath(AppRoute.Catalog, {page: 1});

const renderTestingComponent = () => render(
  <BrowserRouter>
    <PaginationItem
      id={1}
      name={1}
      page={1}
      pathname={currentLink}
      onLinkClick={jest.fn()}
    />
  </BrowserRouter>,
);

describe('PaginationItem component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getByText(1)).toBeInTheDocument();
  });

  test('should add class name to active link', () => {
    renderTestingComponent();

    const page = screen.getByTestId('page-1');

    fireEvent.click(page);
    expect(page).toHaveClass('pagination__page--active');
  });
});
