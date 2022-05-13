import {fireEvent, render, screen} from '@testing-library/react';
import {SortType} from '../../../../../const';

import SortOrderButton from './sort-order-button';

const renderTestingComponent = (activeOrder = '') => render(
  <SortOrderButton
    currentOrder={SortType.Up}
    activeOrder={activeOrder}
    title="По возрастанию"
    onSortOrderButtonClick={jest.fn()}
  />,
);

describe('SortTypeButton component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getByTestId('sort-order-button')).toBeInTheDocument();
  });

  test('should add the class name of the link that was clicked', () => {
    renderTestingComponent(SortType.Up);

    const button = screen.getByTestId('sort-order-button');

    fireEvent.click(button);
    expect(button).toHaveClass('catalog-sort__order-button--active');
  });
});
