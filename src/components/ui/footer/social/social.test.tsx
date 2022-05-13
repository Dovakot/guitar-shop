import {render, screen} from '@testing-library/react';

import Social from './social';

describe('Social component', () => {
  test('should be rendered correctly', () => {
    render(<Social />);

    expect(screen.getAllByTestId('social-item')).toHaveLength(3);
  });
});
