import {render, screen} from '@testing-library/react';

import WarningText from './warning-text';

describe('WarningText component', () => {
  test('should be rendered correctly', () => {
    render(
      <WarningText
        message="test"
        className="warning"
        isValid={false}
      />,
    );

    expect(screen.getByTestId('warning-text')).toHaveClass('warning');
  });
});
