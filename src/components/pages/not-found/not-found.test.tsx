import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import NotFound from './not-found';

describe('NotFound component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
