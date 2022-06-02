import {render, screen} from '@testing-library/react';

import SuccessMessage from './success-message';

describe('SuccessMessage component', () => {
  test('should be rendered correctly', () => {
    render(
      <SuccessMessage
        setStateModal={jest.fn()}
        setModalType={jest.fn()}
      />,
    );

    expect(screen.getByText('Спасибо за ваш отзыв!')).toBeInTheDocument();
  });
});
