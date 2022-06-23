import {render, screen} from '@testing-library/react';

import ButtonAdd from './button-add';

describe('ButtonAdd component', () => {
  test('should be rendered correctly', () => {
    render(<ButtonAdd onButtonClick={jest.fn()} />);

    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
  });
});
