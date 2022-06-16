import React from 'react';

type ButtonAddProps = {
  onButtonClick: () => void,
};

function ButtonAdd({onButtonClick}: ButtonAddProps): JSX.Element {
  return (
    <button
      className="button button--red button--big modal__button modal__button--add"
      onClick={onButtonClick}
    >
      Добавить в корзину
    </button>
  );
}

export default ButtonAdd;
