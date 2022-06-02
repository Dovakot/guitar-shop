import {render, screen} from '@testing-library/react';

import ButtonUp from './button-up';

describe('ButtonUp component', () => {
  test('should be rendered correctly', () => {
    render(<ButtonUp className="reviews__up-button" />);

    expect(screen.getByText('Наверх')).toBeInTheDocument();
  });
});
