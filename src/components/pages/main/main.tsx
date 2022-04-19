import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchGuitars} from '../../../store/api-actions/api-actions';
import {resetMainPageData} from '../../../store/actions/actions';
import {getGuitars} from '../../../store/reducers/guitar-data/selectors';

import BasePage from '../../base-page/base-page';
import Catalog from '../../ui/catalog/catalog';
import Loading from '../../ui/loading/loading';

type MainProps = {
  isBreadcrumbs?: boolean;
};

function Main({isBreadcrumbs}: MainProps): JSX.Element {
  const dispatch = useDispatch();
  const {isLoading, isError} = useSelector(getGuitars);

  useEffect(() => {
    const resetPageData = async () => {
      await dispatch(resetMainPageData());
    };

    dispatch(fetchGuitars());

    return () => {
      resetPageData();
    };
  }, [dispatch]);

  return (
    <BasePage title="Каталог гитар" isBreadcrumbs>
      {isLoading
        ? <Loading isError={isError} />
        : <Catalog />}
    </BasePage>
  );
}

export default Main;
