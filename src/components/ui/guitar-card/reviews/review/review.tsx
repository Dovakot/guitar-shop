import React from 'react';

import {humanizeDate} from '../../../../../utils/utils';
import {GuitarComment} from '../../../../../types/guitar-types';
import {IconSize} from '../../../../../types/types';

import Rating from '../../../rating/rating';
import ReviewText from './review-text/review-text';

const iconSize:IconSize = {
  width: 16,
  height: 16,
};

function Review({
  userName,
  advantage,
  disadvantage,
  comment,
  rating,
  createAt,
}: GuitarComment): JSX.Element {
  const date = humanizeDate(createAt);

  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">
          {userName}
        </h4>
        <span className="review__date">
          {date}
        </span>
      </div>

      <Rating
        rating={rating}
        className="review__rating-panel"
        iconSize={iconSize}
      />

      <ReviewText title="Достоинства" text={advantage} />
      <ReviewText title="Недостатки" text={disadvantage} />
      <ReviewText title="Комментарий" text={comment} />
    </div>
  );
}

export default Review;
