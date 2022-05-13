import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Footer from './footer';

describe('Footer component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('footer-nav')).toBeInTheDocument();
    expect(screen.getByTestId('social')).toBeInTheDocument();
  });
});
