import {render, screen} from '@testing-library/react';

import ReviewText from './review-text';

describe('ReviewText component', () => {
  test('should be rendered correctly', () => {
    render(
      <ReviewText
        title="title"
        text="text"
      />,
    );

    expect(screen.getByText('text')).toBeInTheDocument();
  });
});
