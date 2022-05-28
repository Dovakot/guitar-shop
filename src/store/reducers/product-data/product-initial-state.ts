import {NavLinkTitle} from '../../../const';
import {Guitar} from '../../../types/guitar-types';
import {ProductData} from '../../../types/store-types';

const productInitialState: ProductData = {
  guitar: {
    name: NavLinkTitle.Guitar,
    data: {} as Guitar,
    isLoading: true,
    isError: false,
  },
  guitars: [],
  foundGuitars: [],
  guitarCount: 0,
  isLoading: false,
};

export default productInitialState;
