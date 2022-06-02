import {combineReducers} from 'redux';

import catalogData from './catalog-data/catalog-data';
import productData from './product-data/product-data';
import queryStringData from './query-string-data/query-string-data';
import reviewData from './review-data/review-data';

enum NameSpace {
  Catalog = 'CATALOG',
  Product = 'PRODUCT',
  QueryString = 'QUERY_STRING',
  Review = 'REVIEW',
}

const rootReducer = combineReducers({
  [NameSpace.Catalog]: catalogData,
  [NameSpace.Product]: productData,
  [NameSpace.QueryString]: queryStringData,
  [NameSpace.Review]: reviewData,
});

export {
  NameSpace,
  rootReducer
};
