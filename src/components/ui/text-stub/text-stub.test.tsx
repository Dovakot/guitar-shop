import {render, screen} from '@testing-library/react';

import TextStub from './text-stub';

describe('TextStub component', () => {
  test('should be rendered correctly', () => {
    render(<TextStub />);

    expect(screen.getByText(/Извините, данная страница/i)).toBeInTheDocument();
  });
});
