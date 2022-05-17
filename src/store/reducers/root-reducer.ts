import {combineReducers} from 'redux';

import guitarData from './guitar-data/guitar-data';
import catalogData from './catalog-data/catalog-data';
import productData from './product-data/product-data';
import queryStringData from './query-string-data/query-string-data';

enum NameSpace {
  Guitar = 'GUITAR',
  Catalog = 'CATALOG',
  Product = 'PRODUCT',
  QueryString = 'QUERY_STRING',
}

const rootReducer = combineReducers({
  [NameSpace.Guitar]: guitarData,
  [NameSpace.Catalog]: catalogData,
  [NameSpace.Product]: productData,
  [NameSpace.QueryString]: queryStringData,
});

export {
  NameSpace,
  rootReducer
};
