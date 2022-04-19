import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';

import {rootReducer} from '../reducers/root-reducer';
import {loadGuitars} from '../actions/actions';

type State = ReturnType<typeof rootReducer>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Action
>

const fetchGuitars = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get('/guitars?_end=9');

      dispatch(loadGuitars(data, false));
    } catch {
      dispatch(loadGuitars([], true));
    }
  };

export {
  fetchGuitars
};
