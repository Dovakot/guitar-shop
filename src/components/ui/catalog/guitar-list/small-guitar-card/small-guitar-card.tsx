import React from 'react';
import {Link, generatePath} from 'react-router-dom';

import {AppRoute} from '../../../../../const';
import {formatPrice} from '../../../../../utils/utils';
import {IconSize} from '../../../../../types/types';
import {Guitar} from '../../../../../types/guitar-types';

import Rating from '../../../rating/rating';

const iconSize:IconSize = {
  width: 12,
  height: 11,
};

function SmallGuitarCard({
  id,
  name,
  previewImg,
  stringCount,
  rating,
  price,
  comments,
}: Guitar): JSX.Element {
  const pathToGuitar = generatePath(AppRoute.Guitar, {id});
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
          iconSize={iconSize}
        />

        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {formattedPrice} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link
          className="button button--mini"
          to={pathToGuitar}
        >
          Подробнее
        </Link>
        <a className="button button--red button--mini button--add-to-cart" href="#top">Купить</a>
      </div>
    </div>
  );
}

export default SmallGuitarCard;
