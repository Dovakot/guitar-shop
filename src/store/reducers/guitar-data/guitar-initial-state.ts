import {
  getDefaultSearchParamsToStore
} from '../../../utils/query-utils';

const OPTIONS_DATA_DEFAULT = getDefaultSearchParamsToStore();

const guitarInitialState = {
  guitars: {
    data: [],
    totalCount: 0,
    isLoading: false,
  },
  search: {
    guitars: [],
    guitarCount: 0,
  },
  filter: {
    defaultPriceMin: 0,
    defaultPriceMax: 0,
    guitarTypes: [],
    guitarStrings: [],
  },
  pages: [],
  options: OPTIONS_DATA_DEFAULT,
  isLoading: true,
  isError: false,
};

export default guitarInitialState;
