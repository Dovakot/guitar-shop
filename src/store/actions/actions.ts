import {createAction} from '@reduxjs/toolkit';

enum ActionType {
  SetStatusIsLoading = 'guitar/setStatusIsLoading',
  LoadGuitars = 'guitar/loadGuitars',
  ResetMainPageData = 'guitar/resetMainPageData',
  SearchGuitars = 'guitar/searchGuitars',
  SetSortTypes = 'guitar/setSortTypes',
  SetOptions = 'guitar/setOptions',
  RedirectToRoute = 'app/redirect',
}

const redirect = createAction(ActionType.RedirectToRoute, (url) => ({
  payload: url,
}));

const setStatusIsLoading = createAction(ActionType.SetStatusIsLoading, (isError) => ({
  payload: {
    isLoading: isError,
    isError,
  },
}));

const loadGuitars = createAction(ActionType.LoadGuitars, (isLoading, guitars = [], totalCount = 0) => ({
  payload: {
    isLoading,
    guitars,
    totalCount,
  },
}));

const searchGuitars = createAction(ActionType.SearchGuitars, (guitars = []) => ({
  payload: guitars,
}));

const setSortTypes = createAction(ActionType.SetSortTypes, (types) => ({
  payload: types,
}));

const setOptions = createAction(ActionType.SetOptions, (search) => ({
  payload: search,
}));

const resetMainPageData = createAction(ActionType.ResetMainPageData);

export {
  ActionType,
  redirect,
  setStatusIsLoading,
  loadGuitars,
  searchGuitars,
  resetMainPageData,
  setSortTypes,
  setOptions
};
