import {createAction} from '@reduxjs/toolkit';

enum ActionType {
  SetStatusIsLoading = 'guitar/setStatusIsLoading',
  LoadGuitars = 'guitar/loadGuitars',
  ResetMainPageData = 'guitar/resetMainPageData',
  SearchGuitars = 'guitar/searchGuitars',
  SetSortTypes = 'guitar/setSortTypes',
  SetGuitarStrings = 'guitar/setGuitarStrings',
  SetGuitarTypes = 'guitar/setGuitarTypes',
  SetDefaultGuitarPrices = 'guitar/setDefaultGuitarPrices',
  SetGuitarPriceMin = 'guitar/setGuitarPriceMin',
  SetGuitarPriceMax = 'guitar/setGuitarPriceMax',
  SetOptions = 'guitar/setOptions',
  SetCatalogPage = 'guitar/setCatalogPage',
  IsLoadingGuitars = 'guitar/isLoadingGuitars',
  RedirectToRoute = 'app/redirect',
}

const setStatusIsLoading = createAction(ActionType.SetStatusIsLoading, (isError) => ({
  payload: {
    isLoading: isError,
    isError,
  },
}));

const loadGuitars = createAction(ActionType.LoadGuitars, (guitars, totalCount) => ({
  payload: {
    guitars,
    totalCount,
  },
}));

const setDefaultGuitarPrices = createAction(ActionType.SetDefaultGuitarPrices, (minPrice, maxPrice) => ({
  payload:{
    minPrice,
    maxPrice,
  },
}));

const setGuitarStrings = createAction(ActionType.SetGuitarStrings, (guitarString) => ({
  payload: guitarString,
}));

const redirect = createAction(ActionType.RedirectToRoute, (url) => ({
  payload: url,
}));

const searchGuitars = createAction(ActionType.SearchGuitars, (guitars = []) => ({
  payload: guitars,
}));

const setSortTypes = createAction(ActionType.SetSortTypes, (types) => ({
  payload: types,
}));

const setGuitarTypes = createAction(ActionType.SetGuitarTypes, (guitarTypes) => ({
  payload: guitarTypes,
}));

const setGuitarPriceMin = createAction(ActionType.SetGuitarPriceMin, (price) => ({
  payload: price,
}));

const setGuitarPriceMax = createAction(ActionType.SetGuitarPriceMax, (price) => ({
  payload: price,
}));

const setOptions = createAction(ActionType.SetOptions, (search) => ({
  payload: search,
}));

const setCatalogPage = createAction(ActionType.SetCatalogPage, (page) => ({
  payload: page,
}));

const isLoadingGuitars = createAction(ActionType.IsLoadingGuitars, (isLoading) => ({
  payload: isLoading,
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
  setGuitarTypes,
  setGuitarStrings,
  setDefaultGuitarPrices,
  setGuitarPriceMin,
  setGuitarPriceMax,
  setOptions,
  setCatalogPage,
  isLoadingGuitars
};
