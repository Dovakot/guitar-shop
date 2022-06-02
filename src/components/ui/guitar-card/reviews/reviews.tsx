import React, {MouseEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './reviews.css';

import {MessageText} from '../../../../const';
import {GuitarComment} from '../../../../types/guitar-types';
import {fetchGuitarReviews} from '../../../../store/api-actions/api-actions';
import {isLoadingReviews} from '../../../../store/reducers/review-data/review-data';
import {getGuitarReviews} from '../../../../store/reducers/review-data/selectors';

import Review from './review/review';
import ModalReview from './modal-review/modal-review';
import ButtonUp from '../../button-up/button-up';

type ReviewsProps = {
  guitarId: number,
  guitarName: string,
};

function Reviews({guitarId, guitarName}: ReviewsProps): JSX.Element {
  const dispatch = useDispatch();
  const {shownReviews, totalCount, count, isLoading} = useSelector(getGuitarReviews);

  const isNotFound = !totalCount && !isLoading;
  const isMoreButton = count < totalCount;
  const isNoLoading = isLoading && !count;

  const buttonText = isLoading ? MessageText.Loading : 'Показать еще отзывы';

  const getReview = (review: GuitarComment) => (
    <Review
      key={review.id}
      {...review}
    />
  );

  const handleButtonMoreClick = (evt: MouseEvent<HTMLElement>) => {
    dispatch(isLoadingReviews());
    dispatch(fetchGuitarReviews(guitarId, count));
  };

  return (
    <section
      className="reviews"
      data-testid="reviews"
    >
      <h3 className="reviews__title title title--bigger">Отзывы</h3>

      <ModalReview
        guitarId={guitarId}
        guitarName={guitarName}
      />

      {isNoLoading ? MessageText.Loading : shownReviews.map(getReview)}

      {isNotFound && MessageText.NotFound}

      {isMoreButton &&
        <button
          className="button button--medium reviews__more-button"
          onClick={handleButtonMoreClick}
          disabled={isLoading}
        >
          {buttonText}
        </button>}

      {totalCount ? <ButtonUp className="reviews__up-button" /> : ''}
    </section>
  );
}

export default Reviews;
