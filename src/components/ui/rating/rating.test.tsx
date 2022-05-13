import {render, screen} from '@testing-library/react';

import Rating from './rating';

describe('Rating component', () => {
  test('should be rendered correctly', () => {
    render(
      <Rating
        rating={4}
        comments={0}
        className="product-card__rate"
      />,
    );

    expect(screen.getAllByTestId('icon-full-star')).toHaveLength(4);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
