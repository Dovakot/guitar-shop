import React from 'react';

type ButtonDeleteProps = {
  onButtonDeleteClick: () => void,
  onButtonReturnClick: () => void,
};

function ButtonDelete({onButtonDeleteClick, onButtonReturnClick}: ButtonDeleteProps): JSX.Element {
  return (
    <>
      <button
        className="button button--small modal__button"
        onClick={onButtonDeleteClick}
      >
        Удалить товар
      </button>
      <button
        className="button button--black-border button--small modal__button modal__button--right"
        onClick={onButtonReturnClick}
      >
        Продолжить покупки
      </button>
    </>
  );
}

export default ButtonDelete;
