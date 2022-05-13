import React from 'react';

import {formatPrice} from '../../../../../utils/utils';
import {GuitarCard} from '../../../../../types/guitar-types';

import Rating from '../../../rating/rating';

function SmallGuitarCard({
  id,
  name,
  previewImg,
  stringCount,
  rating,
  price,
  comments,
}: GuitarCard): JSX.Element {
  const formattedPrice = formatPrice(price);
  const commentCount = comments.length;

  return (
    <div
      className="product-card"
      data-testid="small-card"
    >
      <img
        src={previewImg}
        alt={name}
        width={75}
        height={190}
      />
      <div className="product-card__info">
        <Rating
          rating={rating}
          comments={commentCount}
          className="product-card__rate"
        />

        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {formattedPrice} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <a className="button button--mini" href="#top">Подробнее</a>
        <a className="button button--red button--mini button--add-to-cart" href="#top">Купить</a>
      </div>
    </div>
  );
}

export default SmallGuitarCard;
