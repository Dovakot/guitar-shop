import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

import {mockGuitar} from '../../../../../../mock/mock';

import SearchItem from './search-item';

describe('SearchItem component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <SearchItem
          id={mockGuitar.id}
          name={mockGuitar.name}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText(mockGuitar.name)).toBeInTheDocument();
  });
});
