import {render} from '@testing-library/react';

import SvgIcon from './svg-icon';

const mockIcon = {
  id: 'icon-full-star',
  width: 12,
  height: 11,
};

describe('SvgIcon component', () => {
  test('should be rendered correctly', () => {
    render(<SvgIcon icon={mockIcon} />);
  });
});
