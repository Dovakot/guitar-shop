import React, {MouseEvent, useState} from 'react';

import {ModalType} from '../../../../../const';
import {isActive} from '../../../../../utils/utils';

import Modal from '../../../../modal/modal';
import FormReview from './form-review/form-review';
import SuccessMessage from './success-message/success-message';

type ModalReviewProps = {
  guitarId: number,
  guitarName: string,
};

function ModalReview({guitarId, guitarName}: ModalReviewProps): JSX.Element {
  const [isModalHidden, setStateModal] = useState(true);
  const [modalType, setModalType] = useState<string>(ModalType.Form);

  const getModalContent = () => isActive(modalType, ModalType.Form)
    ? (
      <FormReview
        guitarId={guitarId}
        guitarName={guitarName}
        setModalType={setModalType}
      />
    )
    : (
      <SuccessMessage
        setModalType={setModalType}
        setStateModal={setStateModal}
      />
    );

  const handleButtonReviewClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    setStateModal(false);
  };

  return (
    <>
      <a
        className="button button--red-border button--big reviews__submit-button"
        href="#modal"
        onClick={handleButtonReviewClick}
        data-testid="btn-feedback"
      >
        Оставить отзыв
      </a>

      <Modal
        modifier={modalType}
        setStateModal={setStateModal}
        isModalHidden={isModalHidden}
      >
        {getModalContent()}
      </Modal>
    </>
  );
}

export default ModalReview;
