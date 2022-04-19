import React from 'react';

import {formatPrice} from '../../../../../utils/utils';

import Rating from '../../../rating/rating';

type SmallGuitarCardProps = {
  id: number;
  name: string;
  previewImg: string;
  stringCount: number;
  rating: number;
  price: number;
};

function SmallGuitarCard({
  id,
  name,
  previewImg,
  stringCount,
  rating,
  price,
}: SmallGuitarCardProps): JSX.Element {
  const formattedPrice = formatPrice(price);

  return (
    <div className="product-card">
      <img
        src={previewImg}
        alt={name}
        width={75}
        height={190}
      />
      <div className="product-card__info">
        <Rating
          rating={rating}
          comments={stringCount}
          className="product-card__rate"
        />

        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {formattedPrice} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <a className="button button--mini" href="#">Подробнее</a>
        <a className="button button--red button--mini button--add-to-cart" href="#">Купить</a>
      </div>
    </div>
  );
}

export default SmallGuitarCard;
