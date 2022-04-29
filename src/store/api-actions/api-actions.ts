import {toast} from 'react-toastify';

import {SearchParams, MessageText, MAX_GUITAR_COUNT} from '../../const';
import {getUrlToQuery} from '../../utils/query-utils';
import {ThunkActionResult} from '../../types/store-types';
import {GeneratedParams} from '../../types/types';
import {loadGuitars, searchGuitars, redirect} from '../actions/actions';

const fetchGuitars = (currentValue?: GeneratedParams): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {options, isLoading} = _getState().GUITAR;
    const url = getUrlToQuery({...options, ...currentValue});
    const location = {search: url.replace('&', '')};

    if (!isLoading) {
      dispatch(loadGuitars(true));
      dispatch(redirect(location));
    }

    try {
      const {data, headers} = await api.get(`/guitars?${SearchParams.GuitarsTo}=${MAX_GUITAR_COUNT}${url}`);

      dispatch(loadGuitars(false, data, headers['x-total-count']));
    } catch {
      dispatch(loadGuitars(false));
      toast.error(MessageText.Error);
    }
  };

const fetchFoundGuitars = (name: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get(`/guitars?name_like=${name}`);

      dispatch(searchGuitars(data));
    } catch {
      toast.error(MessageText.Error);
    }
  };

export {
  fetchGuitars,
  fetchFoundGuitars
};
