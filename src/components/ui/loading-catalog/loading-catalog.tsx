import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';

import './loading-catalog.css';

import {MessageText} from '../../../const';
import {fetchGuitars, fetchGuitarPrice} from '../../../store/api-actions/api-actions';
import {isLoadingCatalog} from '../../../store/reducers/catalog-data/catalog-data';
import {setDefaultParams} from '../../../store/reducers/query-string-data/query-string-data';

import Spinner from '../spinner/spinner';

type LoadingProps = {
  isError?: boolean,
};

function LoadingCatalog({isError}: LoadingProps): JSX.Element {
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

  return (
    <>
      {!isError && <Spinner />}

      <p className="text-loading">
        {isError
          ? <span className="text-loading__error">Ошибка загрузки</span>
          : MessageText.Loading}
      </p>
    </>
  );
}

export default LoadingCatalog;
