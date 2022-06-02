import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from './modal';
import TextStub from '../ui/text-stub/text-stub';

const setStateModal = jest.fn();

const renderTestingComponent = () => {
  render(
    <Modal
      setStateModal={setStateModal}
      isModalHidden={false}
    >
      <TextStub />
    </Modal>,
  );
};

describe('Modal component', () => {
  test('should be rendered correctly', () => {
    renderTestingComponent();

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText(/Извините,/i)).toBeInTheDocument();
  });

  test('should be closed modal', () => {
    renderTestingComponent();

    userEvent.click(screen.getByTestId('modal-overlay'));
    fireEvent.keyDown(screen.getByTestId('modal'), {key: 'Esc' || 'Escape'});
    userEvent.click(screen.getByTestId('close-btn'));

    expect(setStateModal).toBeCalledWith(true);
    expect(setStateModal).toBeCalledTimes(4);
  });
});
