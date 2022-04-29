import {Middleware} from 'redux';

import {RootState} from '../../types/store-types';
import browserHistory from '../../browser-history';
import {ActionType} from '../actions/actions';

const redirect: Middleware<unknown, RootState> = (_store) => (next) => (action) => {
  if (action.type === ActionType.RedirectToRoute) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export default redirect;
