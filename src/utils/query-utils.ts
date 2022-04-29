import {SearchParams} from '../const';
import {GeneratedParams} from '../types/types';

const queryСonfig: {[key: string]: string} = {
  sortType: SearchParams.SortType,
  sortOrder: SearchParams.SortOrder,
  guitarsFrom: SearchParams.GuitarsFrom,
  guitarTypes: SearchParams.GuitarTypes,
  stringCount: SearchParams.StringCount,
  priceGte: SearchParams.PriceGte,
  priceLte: SearchParams.PriceLte,
};

const getSearchParamValues = (search: string, name: string) => new URLSearchParams(search).getAll(name);

const setDefaultOptionsToStore = () => Object.entries(queryСonfig)
  .reduce((params: GeneratedParams, [key]) => {
    params[key] = [];

    return params;
  }, {});

const adaptSearchParamsToStore = (data: GeneratedParams, search: string) => Object.entries(data)
  .reduce((params: GeneratedParams, [key]) => {
    const name = queryСonfig[key];
    params[key] = getSearchParamValues(search, name);

    return params;
  }, {});

const getUrlToQuery = (data: GeneratedParams) => Object.entries(data)
  .reduce((url: string, [key]) => {
    const paramKey = queryСonfig[key];
    const paramValues = data[key];
    const paramStr = `&${paramKey}=`;

    url += paramValues.length ? `${paramStr}${paramValues.join(paramStr)}` : '';

    return url;
  }, '');

export {
  setDefaultOptionsToStore,
  adaptSearchParamsToStore,
  getUrlToQuery
};
