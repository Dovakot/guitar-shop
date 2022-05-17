import {CatalogData} from '../../../types/store-types';

const catalogInitialState: CatalogData = {
  defaultMinPrice: 0,
  defaultMaxPrice: 0,
  totalCount: 0,
  pages: [],
  guitarTypes: [],
  guitarStrings: [],
  isLoading: true,
  isError: false,
};

export default catalogInitialState;
