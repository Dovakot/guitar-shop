import {render, screen} from '@testing-library/react';

import SearchField from './search-field';

describe('SearchField component', () => {
  test('should be rendered correctly', () => {
    render(<SearchField fieldValue="" onInputChange={jest.fn()} />);

    expect(screen.getByText('Поиск')).toBeInTheDocument();
  });
});
