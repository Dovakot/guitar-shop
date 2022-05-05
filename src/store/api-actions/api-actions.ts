import {toast} from 'react-toastify';

import {MessageText, ApiRoute, MAX_GUITAR_COUNT} from '../../const';
import {getUrlToQuery} from '../../utils/query-utils';
import {ThunkActionResult} from '../../types/store-types';
import {GeneratedParams} from '../../types/types';
import {loadGuitars, searchGuitars, setDefaultGuitarPrices, redirect} from '../actions/actions';

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
      const {data, headers} = await api.get(`${ApiRoute.Guitars}?_limit=${MAX_GUITAR_COUNT}${url}`);

      dispatch(loadGuitars(false, data, headers['x-total-count']));
    } catch {
      dispatch(loadGuitars(false));
      toast.error(MessageText.Error);
    }
  };

const fetchGuitarPrice = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data: [minData]} = await api.get(`${ApiRoute.Guitars}?${ApiRoute.MinPrice}`);
      const {data: [maxData]} = await api.get(`${ApiRoute.Guitars}?${ApiRoute.MaxPrice}`);

      dispatch(setDefaultGuitarPrices(minData.price, maxData.price));
    } catch {
      toast.error(MessageText.Error);
    }
  };

const fetchFoundGuitars = (name: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get(`${ApiRoute.Guitars}?name_like=${name}`);

      dispatch(searchGuitars(data));
    } catch {
      toast.error(MessageText.Error);
    }
  };

export {
  fetchGuitars,
  fetchGuitarPrice,
  fetchFoundGuitars
};
