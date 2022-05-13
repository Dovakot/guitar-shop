import {render} from '@testing-library/react';

import Spinner from './spinner';

describe('Spinner component', () => {
  test('should be rendered correctly', () => {
    render(<Spinner />);
  });
});
