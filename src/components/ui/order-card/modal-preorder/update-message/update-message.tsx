import React from 'react';
import {useSelector} from 'react-redux';
import cn from 'classnames';

import {GUITAR_TYPE_RU} from '../../../../../const';
import {formatPrice} from '../../../../../utils/utils';
import {getStateModalPreorder, getPreOrder} from '../../../../../store/reducers/cart-data/selectors';

import ButtonAdd from './button-add/button-add';
import ButtonDelete from './button-delete/button-delete';

type UpdateMessageProps = {
  onButtonAddClick: () => void,
  onButtonDeleteClick: () => void,
  onButtonReturnClick: () => void,
};

function UpdateMessage({
  onButtonAddClick,
  onButtonDeleteClick,
  onButtonReturnClick,
}: UpdateMessageProps): JSX.Element {
  const {isUpdateTypeDelete} = useSelector(getStateModalPreorder);
  const {
    name,
    vendorCode,
    type,
    previewImg,
    stringCount,
    price,
  } = useSelector(getPreOrder);

  const titleClass = cn('modal__header title title--medium', {
    'title--red': isUpdateTypeDelete,
  });

  const formattedPrice = formatPrice(price);
  const typeRu = GUITAR_TYPE_RU[type];

  return (
    <>
      <h2 className={titleClass}>
        {isUpdateTypeDelete ? 'Удалить этот товар?' : 'Добавить товар в корзину'}
      </h2>
      <div className="modal__info">
        <img
          className="modal__img"
          src={previewImg}
          alt={name}
          width={67}
          height={137}
        />
        <div className="modal__info-wrapper">
          <h3 className="modal__product-name title title--little title--uppercase">
            Гитара {name}
          </h3>
          <p className="modal__product-params modal__product-params--margin-11">
            Артикул: {vendorCode}
          </p>
          <p className="modal__product-params">
            {typeRu}, {stringCount} струнная
          </p>
          <p className="modal__price-wrapper">
            <span className="modal__price">Цена:</span>
            <span className="modal__price">
              {formattedPrice} ₽
            </span>
          </p>
        </div>
      </div>
      <div className="modal__button-container">
        {isUpdateTypeDelete
          ? (
            <ButtonDelete
              onButtonDeleteClick={onButtonDeleteClick}
              onButtonReturnClick={onButtonReturnClick}
            />
          ) : <ButtonAdd onButtonClick={onButtonAddClick} />}
      </div>
    </>
  );
}

export default UpdateMessage;
