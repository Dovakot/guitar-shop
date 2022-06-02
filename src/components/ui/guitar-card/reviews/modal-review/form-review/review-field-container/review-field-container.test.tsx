import {render, screen} from '@testing-library/react';

import ReviewFieldContainer from './review-field-container';

const renderTestingComponent = (type?: string, message?: string, isValid?: boolean) => {
  render(
    <ReviewFieldContainer
      id="user"
      name="user"
      label="test"
      type={type}
      message={message}
      isValid={isValid}
    />,
  );
};


describe('ReviewFieldContainer component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent('text');

    expect(screen.getByTestId('review-input')).toBeInTheDocument();
  });

  test('should be rendered textaria', () => {
    renderTestingComponent();

    expect(screen.getByTestId('review-textarea')).toBeInTheDocument();
  });

  test('should be rendered if field invalid', () => {
    renderTestingComponent('text', 'test', false);

    expect(screen.getByTestId('warning-text')).toBeInTheDocument();
  });
});
