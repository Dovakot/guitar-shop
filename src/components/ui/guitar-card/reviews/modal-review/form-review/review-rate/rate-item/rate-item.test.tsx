import {render, screen} from '@testing-library/react';

import RateItem from './rate-item';

describe('RateItem component', () => {
  test('should be rendered correctly', () => {
    render(
      <RateItem
        id="rate-1"
        title="test"
        name="rate"
        type="radio"
        defaultValue={5}
      />,
    );

    expect(screen.getByTestId('review-input')).toBeInTheDocument();
  });
});
