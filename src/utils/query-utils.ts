import {SearchParams, SortType} from '../const';
import {GeneratedParams} from '../types/types';

const queryСonfig: {[key: string]: string} = {
  sortType: SearchParams.SortType,
  sortOrder: SearchParams.SortOrder,
  guitarsFrom: SearchParams.GuitarsFrom,
  guitarTypes: SearchParams.GuitarTypes,
  stringCount: SearchParams.StringCount,
  minPrice: SearchParams.PriceGte,
  maxPrice: SearchParams.PriceLte,
};

const replaceGuitarPriceParams = (orderType: string) => ({
  minPrice: [],
  maxPrice: [],
  guitarsFrom: [],
  sortType: [SortType.Price],
  sortOrder: [orderType],
});

const replaceGuitarReviewParams = (start: number) => ({
  sortType: [SortType.Date],
  sortOrder: [SortType.Down],
  guitarsFrom: [start.toString()],
});

const getSearchParamValues = (search: string, name: string) => new URLSearchParams(search).getAll(name);

const getDefaultSearchParamsToStore = () => Object.entries(queryСonfig)
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

const getLocation = (params: string, pathname?: string) => {
  const search = params.replace('&', '');

  return pathname ? {pathname, search} : {search};
};

export {
  replaceGuitarPriceParams,
  replaceGuitarReviewParams,
  getDefaultSearchParamsToStore,
  adaptSearchParamsToStore,
  getUrlToQuery,
  getLocation
};
