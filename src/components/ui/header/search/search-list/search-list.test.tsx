import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

import {mockCatalogGuitars} from '../../../../../mock/mock';

import SearchList from './search-list';

describe('SearchList component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <SearchList guitars={mockCatalogGuitars} />
      </BrowserRouter>,
    );

    expect(screen.getAllByTestId('search-item')).toHaveLength(mockCatalogGuitars.length);
  });
});
