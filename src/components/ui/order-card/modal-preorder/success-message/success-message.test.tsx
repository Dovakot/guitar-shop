import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

import SuccessMessage from './success-message';

describe('SuccessMessage component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <SuccessMessage onButtonClick={jest.fn()} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Товар успешно добавлен в корзину')).toBeInTheDocument();
  });
});
