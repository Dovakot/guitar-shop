import {toast} from 'react-toastify';

import {MessageText, ApiRoute, SortType, TOTAL_COUNT_HEADER, MAX_GUITAR_COUNT} from '../../const';
import {replaceGuitarPriceParams, getUrlToQuery, getLocation} from '../../utils/query-utils';
import {ThunkActionResult} from '../../types/store-types';
import {GeneratedParams} from '../../types/types';
import {loadGuitars, searchGuitars, setDefaultGuitarPrices, redirect, isLoadingGuitars} from '../actions/actions';

const fetchGuitars = (currentValue?: GeneratedParams, currentLocation?: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {options, isLoading} = _getState().GUITAR;
    const url = getUrlToQuery({...options, ...currentValue});
    const location = getLocation(url, currentLocation);

    if (!isLoading) {
      dispatch(isLoadingGuitars(true));
      dispatch(redirect(location));
    }

    try {
      const {data, headers} = await api.get(`${ApiRoute.Guitars}?_limit=${MAX_GUITAR_COUNT}&_embed=comments${url}`);

      dispatch(isLoadingGuitars(false));
      dispatch(loadGuitars(data, +headers[TOTAL_COUNT_HEADER]));
    } catch(error) {
      dispatch(isLoadingGuitars(false));
      toast.error(MessageText.Error);

      throw error;
    }
  };

const fetchGuitarPrice = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {options} = _getState().GUITAR;
    const urlMinPrice = getUrlToQuery({
      ...options,
      ...replaceGuitarPriceParams(SortType.Up),
    });
    const urlMaxPrice = getUrlToQuery({
      ...options,
      ...replaceGuitarPriceParams(SortType.Down),
    });

    try {
      const {data: [minData]} = await api.get(`${ApiRoute.Guitars}?_limit=1${urlMinPrice}`);
      const {data: [maxData]} = await api.get(`${ApiRoute.Guitars}?_limit=1${urlMaxPrice}`);

      dispatch(setDefaultGuitarPrices(minData.price, maxData.price));
    } catch(error) {
      toast.error(MessageText.PriceError);
    }
  };

const fetchFoundGuitars = (name: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get(`${ApiRoute.Guitars}?name_like=${name}`);

      dispatch(searchGuitars(data));
    } catch(error) {
      toast.error(MessageText.Error);
    }
  };

export {
  fetchGuitars,
  fetchGuitarPrice,
  fetchFoundGuitars
};
