import {render, screen} from '@testing-library/react';

import ReviewRate from './review-rate';

const renderTestingComponent = (isValid = true) => {
  render(
    <ReviewRate
      name="rate"
      message="test"
      isValid={isValid}
    />,
  );
};

describe('ReviewRate component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getAllByTestId('rate-label')).toHaveLength(5);
  });

  test('should be rendered if field invalid', () => {
    renderTestingComponent(false);

    expect(screen.getByTestId('warning-text')).toBeInTheDocument();
  });
});
