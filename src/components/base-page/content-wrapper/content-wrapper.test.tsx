import {render, screen} from '@testing-library/react';

import ContentWrapper from './content-wrapper';

describe('ContentWrapper component', () => {
  test('should be rendered correctly', () => {
    render(<ContentWrapper title="Каталог гитар" />);

    expect(screen.getByText('Каталог гитар')).toBeInTheDocument();
  });
});
