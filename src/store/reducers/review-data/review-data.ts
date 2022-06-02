import {createSlice} from '@reduxjs/toolkit';

import reviewInitialState from './review-initial-state';

import {addLoadedReviews, addNewReview} from '../../../utils/review-utils';

const reviewData = createSlice({
  name: 'reviews',
  initialState: reviewInitialState,
  reducers: {
    loadGuitarReviews: (state, {payload}) => {
      state.reviews = payload.data;
      state.totalCount = payload.totalCount;
      state.shownReviews = addLoadedReviews(state.shownReviews, state.reviews);
      state.count = state.shownReviews.length;
      state.isLoading = false;
    },
    addGuitarReview: (state, {payload}) => {
      state.reviews = addNewReview(state.reviews, payload);
      state.totalCount = ++state.totalCount;
      state.shownReviews = state.reviews;
      state.count = state.shownReviews.length;
    },
    isLoadingReviews: (state) => {
      state.isLoading = true;
    },
    resetGuitarReviews: (state) => {
      state.reviews = reviewInitialState.reviews;
      state.totalCount = reviewInitialState.totalCount;
      state.shownReviews = reviewInitialState.shownReviews;
      state.count = reviewInitialState.count;
      state.isLoading = reviewInitialState.isLoading;
    },
  },
});

export const {
  loadGuitarReviews,
  addGuitarReview,
  isLoadingReviews,
  resetGuitarReviews,
} = reviewData.actions;

export default reviewData.reducer;
