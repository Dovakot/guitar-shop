import {useParams, generatePath} from 'react-router-dom';

import {AppRoute, PageInfo} from '../../const';

const useGeneratePath = (currentLink: string) => {
  const {page} = useParams<{page: string}>();

  return currentLink === AppRoute.Catalog
    ? generatePath(currentLink, {page: page || PageInfo.DefaultPage}) : currentLink;
};

export default useGeneratePath;
