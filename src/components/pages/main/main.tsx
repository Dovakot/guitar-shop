import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {resetMainPageData} from '../../../store/actions/actions';
import {getStatusIsLoading} from '../../../store/reducers/guitar-data/selectors';

import BasePage from '../../base-page/base-page';
import Catalog from '../../ui/catalog/catalog';
import LoadingCatalog from '../../ui/loading-catalog/loading-catalog';

type MainProps = {
  isBreadcrumbs?: boolean;
};

function Main({isBreadcrumbs}: MainProps): JSX.Element {
  const dispatch = useDispatch();
  const {isLoading, isError} = useSelector(getStatusIsLoading);

  useEffect(() => {
    const resetPageData = async () => await dispatch(resetMainPageData());

    return () => {
      resetPageData();
    };
  }, [dispatch]);

  return (
    <BasePage title="Каталог гитар" isBreadcrumbs>
      {isLoading
        ? <LoadingCatalog isError={isError} />
        : <Catalog />}
    </BasePage>
  );
}

export default Main;
