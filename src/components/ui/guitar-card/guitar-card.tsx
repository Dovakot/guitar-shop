import React from 'react';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {formatPrice} from '../../../utils/utils';
import {Guitar} from '../../../types/guitar-types';
import {IconSize} from '../../../types/types';
import {getGuitarReviews} from '../../../store/reducers/review-data/selectors';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Rating from '../rating/rating';
import Tabs from './tabs/tabs';
import TabItem from './tabs/tab-item/tab-item';
import Features from './features/features';
import Description from './description/description';
import Reviews from './reviews/reviews';

const iconSize:IconSize = {
  width: 14,
  height: 14,
};

const getBreadcrumbsItem = (name: string, route: string) => ({
  id: 'guitar',
  name,
  route,
});

function GuitarCard({
  id,
  name,
  vendorCode,
  type,
  description,
  previewImg,
  stringCount,
  rating,
  price,
}: Guitar): JSX.Element {
  const {pathname} = useLocation();
  const {totalCount} = useSelector(getGuitarReviews);

  const formattedPrice = formatPrice(price);
  const breadcrumbsItem = getBreadcrumbsItem(name, pathname);
  const alt = `${name} ${type}`;

  return (
    <>
      <Breadcrumbs newItem={breadcrumbsItem} />

      <div className="product-container">
        <img
          className="product-container__img"
          src={previewImg}
          alt={alt}
          width={90}
          height={235}
        />
        <div className="product-container__info-wrapper">
          <h2 className="product-container__title title title--big title--uppercase">
            {name}
          </h2>

          <Rating
            rating={rating}
            comments={totalCount}
            className="product-container__rating"
            iconSize={iconSize}
          />

          <Tabs id={id}>
            <TabItem label="Характеристики">
              <Features
                vendorCode={vendorCode}
                typeKey={type}
                stringCount={stringCount}
              />
            </TabItem>

            <TabItem label="Описание">
              <Description text={description} />
            </TabItem>
          </Tabs>
        </div>
        <div className="product-container__price-wrapper">
          <p className="product-container__price-info product-container__price-info--title">Цена:</p>
          <p className="product-container__price-info product-container__price-info--value">
            {formattedPrice} ₽
          </p>
          <a className="button button--red button--big product-container__button" href="#top">Добавить в корзину</a>
        </div>
      </div>

      <Reviews
        guitarId={id}
        guitarName={name}
      />
    </>
  );
}

export default GuitarCard;
