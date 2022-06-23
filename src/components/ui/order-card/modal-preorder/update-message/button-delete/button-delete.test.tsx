import {render, screen} from '@testing-library/react';

import ButtonDelete from './button-delete';

describe('ButtonDelete component', () => {
  test('should be rendered correctly', () => {
    render(
      <ButtonDelete
        onButtonDeleteClick={jest.fn()}
        onButtonReturnClick={jest.fn()}
      />,
    );

    expect(screen.getByText('Удалить товар')).toBeInTheDocument();
    expect(screen.getByText('Продолжить покупки')).toBeInTheDocument();
  });
});
