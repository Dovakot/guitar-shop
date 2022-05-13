import {fireEvent, render, screen} from '@testing-library/react';
import {SortType} from '../../../../../const';

import SortTypeButton from './sort-type-button';

const renderTestingComponent = (activeType = '') => render(
  <SortTypeButton
    currentType={SortType.Price}
    activeType={activeType}
    title="по цене"
    onSortTypeButtonClick={jest.fn()}
  />,
);

describe('SortTypeButton component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getByTestId('sort-type-button')).toBeInTheDocument();
  });

  test('should add the class name of the link that was clicked', () => {
    renderTestingComponent(SortType.Price);

    const button = screen.getByTestId('sort-type-button');

    fireEvent.click(button);
    expect(button).toHaveClass('catalog-sort__type-button--active');
  });
});
