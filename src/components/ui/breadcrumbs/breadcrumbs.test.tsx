import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Breadcrumbs from './breadcrumbs';

describe('Breadcrumbs component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <Breadcrumbs />
      </BrowserRouter>,
    );

    expect(screen.getAllByTestId('breadcrumbs-item')).toHaveLength(2);
  });
});
