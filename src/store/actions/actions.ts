import {createAction} from '@reduxjs/toolkit';

enum ActionType {
  RedirectToRoute = 'app/redirect',
}

const redirect = createAction(ActionType.RedirectToRoute, (url) => ({
  payload: url,
}));

export {
  ActionType,
  redirect
};
