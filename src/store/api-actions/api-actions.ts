import {toast} from 'react-toastify';

import {ThunkActionResult} from '../../types/store-types';
import {loadGuitars, searchGuitars} from '../actions/actions';

const fetchGuitars = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get('/guitars?_end=9');

      dispatch(loadGuitars(data, false));
    } catch {
      dispatch(loadGuitars([], true));
    }
  };

const fetchFoundGuitars = (name: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get(`/guitars?name_like=${name}`);

      dispatch(searchGuitars(data));
    } catch {
      toast.error('Ошибка при загрузке данных');
    }
  };

export {
  fetchGuitars,
  fetchFoundGuitars
};
