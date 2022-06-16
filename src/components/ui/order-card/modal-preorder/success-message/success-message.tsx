import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../../../const';

type SuccessMessageProps = {
  onButtonClick: () => void,
};

function SuccessMessage({onButtonClick}: SuccessMessageProps): JSX.Element {
  return (
    <>
      <svg className="modal__icon" width={26} height={20} aria-hidden="true">
        <use xlinkHref="#icon-success" />
      </svg>
      <p className="modal__message">
        Товар успешно добавлен в корзину
      </p>
      <div className="modal__button-container modal__button-container--add">
        <Link
          className="button button--small modal__button"
          onClick={onButtonClick}
          to={AppRoute.Cart}
        >
          Перейти в корзину
        </Link>

        <button
          className="button button--black-border button--small modal__button modal__button--right"
          onClick={onButtonClick}
        >
          Продолжить покупки
        </button>
      </div>
    </>
  );
}

export default SuccessMessage;
