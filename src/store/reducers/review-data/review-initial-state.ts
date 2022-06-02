import {ReviewData} from '../../../types/store-types';

const reviewInitialState: ReviewData = {
  reviews: [],
  shownReviews: [],
  totalCount: 0,
  count: 0,
  isLoading: true,
};

export default reviewInitialState;
