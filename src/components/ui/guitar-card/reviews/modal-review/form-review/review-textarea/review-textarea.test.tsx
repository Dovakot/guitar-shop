import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ReviewTextarea from './review-textarea';

describe('ReviewTextarea component', () => {
  test('should be rendered correctly', () => {
    render(
      <ReviewTextarea
        id="user"
        name="user"
      />,
    );

    userEvent.type(screen.getByTestId('review-textarea'), 'Красивое');
    expect(screen.getByDisplayValue('Красивое')).toBeInTheDocument();
  });
});
