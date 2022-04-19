import {createAction} from '@reduxjs/toolkit';

enum ActionType {
  LoadGuitars = 'guitar/loadGuitars',
  ResetMainPageData = 'guitar/resetMainPageData',
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

export {
  ActionType,
  loadGuitars,
  resetMainPageData
};
