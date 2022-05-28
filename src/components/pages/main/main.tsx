import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {resetCatalogData} from '../../../store/reducers/catalog-data/catalog-data';
import {getIsLoadingCatalog} from '../../../store/reducers/catalog-data/selectors';

import BasePage from '../../base-page/base-page';
import Catalog from '../../ui/catalog/catalog';
import LoadingCatalog from '../../ui/catalog/loading-catalog/loading-catalog';

function Main(): JSX.Element {
  const dispatch = useDispatch();
  const {isLoading, isError} = useSelector(getIsLoadingCatalog);

  useEffect(() => {
    const resetMainPage = async () => await dispatch(resetCatalogData());

    return () => {
      resetMainPage();
    };
  }, [dispatch]);

  return (
    <BasePage title="Каталог гитар">
      {isLoading
        ? <LoadingCatalog isError={isError} />
        : <Catalog />}
    </BasePage>
  );
}

export default Main;
