import {useParams, generatePath} from 'react-router-dom';

import {AppRoute, DEFAULT_PAGE} from '../../const';

const useGeneratePath = (currentLink: string) => {
  const {page} = useParams<{page: string}>();

  return currentLink === AppRoute.Catalog
    ? generatePath(currentLink, {page: page || DEFAULT_PAGE}) : currentLink;
};

export default useGeneratePath;
