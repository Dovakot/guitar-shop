import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';
import cn from 'classnames';

import {subscribeEscEvent} from '../../utils/utils';

type ModalProps = {
  modifier?: string,
  children: React.ReactElement,
  setStateModal: (a: boolean, b?: boolean) => void;
  isModalHidden: boolean,
};

function Modal({
  modifier,
  children,
  setStateModal,
  isModalHidden,
}: ModalProps): JSX.Element | null {
  const modalClass = cn('modal is-active', {
    [`modal--${modifier}`]: modifier,
  });

  const closeModal = () => setStateModal(true);

  const handleElementCloseClick = () => closeModal();

  useEffect(() => {
    if (isModalHidden) {
      return;
    }

    subscribeEscEvent(closeModal);

    return () => {
      subscribeEscEvent();
    };
  });

  return isModalHidden ? null : ReactDOM.createPortal(
    <RemoveScroll>
      <FocusLock>
        <div
          className={modalClass}
          data-testid="modal"
        >
          <div className="modal__wrapper">
            <div
              className="modal__overlay"
              data-close-modal
              onClick={handleElementCloseClick}
              data-testid="modal-overlay"
            />

            <div className="modal__content">
              {children}

              <button
                className="modal__close-btn button-cross"
                type="button"
                aria-label="Закрыть"
                onClick={handleElementCloseClick}
                data-testid="close-btn"
              >
                <span className="button-cross__icon" />
                <span className="modal__close-btn-interactive-area" />
              </button>
            </div>
          </div>
        </div>
      </FocusLock>
    </RemoveScroll>,
    document.body,
  );
}

export default Modal;
