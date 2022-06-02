import {UNKNOWN_ACTION} from '../../../const';
import reviewInitialState from './review-initial-state';

import {addNewReview} from '../../../utils/review-utils';

import reviewData, {
  loadGuitarReviews,
  addGuitarReview,
  isLoadingReviews,
  resetGuitarReviews
} from './review-data';

import {
  mockComments,
  mockCommentCount
} from '../../../mock/mock';

describe('Reducer: Review', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewData(void 0, UNKNOWN_ACTION)).toEqual(reviewInitialState);
  });

  it('should load reviews', () => {
    expect(
      reviewData(reviewInitialState, loadGuitarReviews({
        data: mockComments,
        totalCount: mockCommentCount,
      })),
    ).toEqual({
      ...reviewInitialState,
      reviews: mockComments,
      totalCount: mockCommentCount,
      shownReviews: mockComments,
      count: mockComments.length,
      isLoading: false,
    });
  });

  it('should add new review', () => {
    const [review] = mockComments;
    const newReviews = addNewReview([], review);
    const count = newReviews.length;

    expect(
      reviewData(reviewInitialState, addGuitarReview(review)),
    ).toEqual({
      ...reviewInitialState,
      reviews: newReviews,
      totalCount: count,
      shownReviews: newReviews,
      count,
    });
  });

  it('should reset reviews', () => {
    expect(
      reviewData(reviewInitialState, resetGuitarReviews()),
    ).toEqual({
      ...reviewInitialState,
    });
  });

  it('should set status is loading', () => {
    expect(
      reviewData(reviewInitialState, isLoadingReviews()),
    ).toEqual({
      ...reviewInitialState,
      isLoading: true,
    });
  });
});
