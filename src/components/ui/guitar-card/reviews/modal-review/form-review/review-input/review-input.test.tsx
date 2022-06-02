import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ReviewInput from './review-input';

describe('ReviewInput component', () => {
  test('should be rendered correctly', () => {
    render(
      <ReviewInput
        id="user"
        name="user"
        type="text"
      />,
    );

    userEvent.type(screen.getByTestId('review-input'), 'Ивасик');
    expect(screen.getByDisplayValue('Ивасик')).toBeInTheDocument();
  });
});
