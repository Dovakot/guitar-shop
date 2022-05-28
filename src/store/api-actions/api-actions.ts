import {toast} from 'react-toastify';

import {MessageText, ApiRoute, SortType, TOTAL_COUNT_HEADER, MAX_GUITAR_COUNT} from '../../const';
import {replaceGuitarPriceParams, getUrlToQuery, getLocation} from '../../utils/query-utils';
import {NameSpace} from '../reducers/root-reducer';
import {ThunkActionResult} from '../../types/store-types';
import {GeneratedParams} from '../../types/types';
import {redirect} from '../actions/actions';
import {loadGuitars, setGuitarName, loadGuitar, searchGuitars, isLoadingGuitars} from '../reducers/product-data/product-data';
import {setCatalogPages, setDefaultPriceFilter} from '../reducers/catalog-data/catalog-data';

const fetchGuitar = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get(`${ApiRoute.Guitars}/${id}`);

      dispatch(loadGuitar({data, isError: false}));
      dispatch(setGuitarName(data.name));
    } catch(error) {
      dispatch(loadGuitar({data: {}, isError: true}));
      toast.error(MessageText.Error);
    }
  };

const fetchGuitars = (currentValue?: GeneratedParams, currentLocation?: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {
      [NameSpace.QueryString]: params,
      [NameSpace.Catalog]: {isLoading},
    } = _getState();

    const url = getUrlToQuery({...params, ...currentValue});
    const location = getLocation(url, currentLocation);

    if (!isLoading) {
      dispatch(isLoadingGuitars(true));
      dispatch(redirect(location));
    }

    try {
      const {data, headers} = await api.get(`${ApiRoute.Guitars}?_limit=${MAX_GUITAR_COUNT}&_embed=comments${url}`);

      dispatch(isLoadingGuitars(false));
      dispatch(loadGuitars(data));
      dispatch(setCatalogPages(+headers[TOTAL_COUNT_HEADER]));
    } catch(error) {
      dispatch(isLoadingGuitars(false));
      toast.error(MessageText.Error);

      throw error;
    }
  };

const fetchGuitarPrice = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {[NameSpace.QueryString]: params} = _getState();

    const urlMinPrice = getUrlToQuery({
      ...params,
      ...replaceGuitarPriceParams(SortType.Up),
    });
    const urlMaxPrice = getUrlToQuery({
      ...params,
      ...replaceGuitarPriceParams(SortType.Down),
    });

    try {
      const {data: [minData]} = await api.get(`${ApiRoute.Guitars}?_limit=1${urlMinPrice}`);
      const {data: [maxData]} = await api.get(`${ApiRoute.Guitars}?_limit=1${urlMaxPrice}`);

      dispatch(setDefaultPriceFilter({minPrice: minData.price, maxPrice: maxData.price}));
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
  fetchGuitar,
  fetchGuitars,
  fetchGuitarPrice,
  fetchFoundGuitars
};
