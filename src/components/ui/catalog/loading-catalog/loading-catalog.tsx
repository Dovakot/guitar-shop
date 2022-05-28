import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';

import {fetchGuitars, fetchGuitarPrice} from '../../../../store/api-actions/api-actions';
import {isLoadingCatalog} from '../../../../store/reducers/catalog-data/catalog-data';
import {setDefaultParams} from '../../../../store/reducers/query-string-data/query-string-data';

import Loading from '../../loading/loading';

type LoadingCatalogProps = {
  isError?: boolean,
};

function LoadingCatalog({isError}: LoadingCatalogProps): JSX.Element {
  const dispatch = useDispatch();
  const {search} = useLocation();

  useEffect(() => {
    const setStatusApp = (flag: boolean) => dispatch(isLoadingCatalog(flag));

    (async () => {
      await dispatch(setDefaultParams(search));

      try {
        await dispatch(fetchGuitars());
        await dispatch(fetchGuitarPrice());

        setStatusApp(false);
      } catch {
        setStatusApp(true);
      }
    })();
  }, [dispatch, search]);

  return <Loading isError={isError} />;
}

export default LoadingCatalog;
