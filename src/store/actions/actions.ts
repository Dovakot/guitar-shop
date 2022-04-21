import {createAction} from '@reduxjs/toolkit';

enum ActionType {
  LoadGuitars = 'guitar/loadGuitars',
  ResetMainPageData = 'guitar/resetMainPageData',
  SearchGuitars = 'guitar/searchGuitars',
}

const loadGuitars = createAction(ActionType.LoadGuitars, (data = [], isError) => ({
  payload: {
    data,
    isLoading: isError,
    isError,
  },
}));

const searchGuitars = createAction(ActionType.SearchGuitars, (data = []) => ({
  payload: data,
}));

const resetMainPageData = createAction(ActionType.ResetMainPageData);

export {
  ActionType,
  loadGuitars,
  searchGuitars,
  resetMainPageData
};
