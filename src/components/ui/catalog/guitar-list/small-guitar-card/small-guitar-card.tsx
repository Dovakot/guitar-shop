import React, {MouseEvent} from 'react';
import {Link, generatePath} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {AppRoute} from '../../../../../const';
import {formatPrice} from '../../../../../utils/utils';
import {IconSize} from '../../../../../types/types';
import {Guitar} from '../../../../../types/guitar-types';
import {
  setInfoModalPreorder,
  setStateModalPreorder
} from '../../../../../store/reducers/cart-data/cart-data';

import Rating from '../../../rating/rating';

type SmallGuitarCardProps = Guitar & {
  isToCart: boolean,
};

const iconSize:IconSize = {
  width: 12,
  height: 11,
};

function SmallGuitarCard(props: SmallGuitarCardProps): JSX.Element {
  const dispatch = useDispatch();
  const {
    id,
    name,
    previewImg,
    rating,
    price,
    comments,
    isToCart,
  } = props;

  const pathToGuitar = generatePath(AppRoute.Guitar, {id});
  const formattedPrice = formatPrice(price);
  const commentCount = comments.length;

  const handleButtonBuyClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    dispatch(setInfoModalPreorder(props));
    dispatch(setStateModalPreorder(false));
  };

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

        {isToCart
          ? (
            <Link
              className="button button--red-border button--mini button--in-cart"
              to={AppRoute.Cart}
            >
              В Корзине
            </Link>
          )
          : (
            <button
              className="button button--red button--mini button--add-to-cart"
              onClick={handleButtonBuyClick}
            >
              Купить
            </button>
          )}
      </div>
    </div>
  );
}

export default SmallGuitarCard;
