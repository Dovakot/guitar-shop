import React, {useEffect} from 'react';

import {ModalType} from '../../../../../../const';

type SuccessMessageProps = {
  setStateModal: (a: boolean) => void,
  setModalType: (a: string) => void,
};

function SuccessMessage({setStateModal, setModalType}: SuccessMessageProps): JSX.Element {
  const handleButtonClick = () => setStateModal(true);

  useEffect(() => () => setModalType(ModalType.Form));

  return (
    <>
      <svg className="modal__icon" width={26} height={20} aria-hidden="true">
        <use xlinkHref="#icon-success" />
      </svg>
      <p className="modal__message">
        Спасибо за ваш отзыв!
      </p>
      <div className="modal__button-container modal__button-container--review">
        <button
          className="button button--small modal__button modal__button--review"
          onClick={handleButtonClick}
        >
          К покупкам!
        </button>
      </div>
    </>
  );
}

export default SuccessMessage;
