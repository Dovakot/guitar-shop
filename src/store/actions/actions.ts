import {createAction} from '@reduxjs/toolkit';

enum ActionType {
  LoadGuitars = 'guitar/loadGuitars',
  ResetMainPageData = 'guitar/resetMainPageData',
  SearchGuitars = 'guitar/searchGuitars',
}

const loadData = (data: [], isError: boolean) => ({
  payload: {
    data,
    isLoading: isError,
    isError,
  },
});

const loadGuitars = createAction(ActionType.LoadGuitars, loadData);
const resetMainPageData = createAction(ActionType.ResetMainPageData);

const searchGuitars =  createAction(ActionType.SearchGuitars, (data = []) => ({
  payload: data,
}));

export {
  ActionType,
  loadGuitars,
  searchGuitars,
  resetMainPageData
};
